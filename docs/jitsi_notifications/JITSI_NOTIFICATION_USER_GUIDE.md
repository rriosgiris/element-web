# Guide d'utilisation : Notifications Jitsi avec sonnerie

## Vue d'ensemble

Lorsqu'un appel de groupe Jitsi Meet est lancé dans une salle (avec plus de 2 participants), Element Web affiche maintenant :
1. **Une sonnerie audio** - identique à celle des appels 1-à-1
2. **Une notification visuelle** - un toast contenant les informations de l'appel

## Fonctionnement

### Conditions de déclenchement

La notification Jitsi se déclenche quand :
- ✅ Un appel de groupe est lancé (>2 participants)
- ✅ Les règles de notification push permettent les sons d'appel
- ✅ L'utilisateur n'a pas forcé le silence des notifications

### Comportement de la sonnerie

1. **Activation** : La sonnerie joue automatiquement si :
   - La règle de notification `m.rule.call` est activée sur le compte
   - Le tweak `sound: ring` est configuré
   - Les notifications ne sont pas globalement silencieuses

2. **Arrêt** : La sonnerie s'arrête après ~90 secondes (timeout)

3. **Contrôle** : L'utilisateur peut :
   - Désactiver complètement les notifications des appels
   - Configurer le son des appels dans les paramètres Matrix
   - Utiliser le paramètre client "Silence notifications"

### Notification visuelle (Toast)

Le toast affiche :
- **Icône** : Symbole d'appel vidéo
- **Titre** : "Group call started in [Nom de la salle]"
- **Description** : "A Jitsi group call has been started in this room"
- **Bouton** : "Dismiss" pour fermer manuellement

Le toast disparaît automatiquement après quelques secondes ou en cliquant "Dismiss".

## Paramètres utilisateur

### Configuration des notifications pour les appels

1. Allez à **Settings** → **Notifications**
2. Trouvez la section **Calls**
3. Assurez-vous que **Push notifications** est activé
4. Le son dépend des règles de notification du serveur

### Désactiver la sonnerie Jitsi

Option 1 : Désactiver tous les appels
- Settings → Notifications → Calls → (Désactiver)

Option 2 : Silence temporaire
- Pendant un appel, vous pouvez silencer les notifications depuis l'UI

Option 3 : Paramètres avancés
- Modifier directement les règles de notification Matrix

## Cas d'usage

### Scénario 1 : Appel lancé dans une salle active
**Situation** : Vous êtes dans une salle de chat, quelqu'un lance un appel Jitsi
**Résultat** : 
- ✅ Vous entendez la sonnerie "ring"
- ✅ Un toast apparaît avec le nom de la salle
- ✅ Le widget Jitsi s'affiche en haut de la salle

### Scénario 2 : Appel lancé dans un onglet non actif
**Situation** : Vous êtes dans une autre salle, quelqu'un lance un appel ailleurs
**Résultat** :
- ✅ Vous entendez la sonnerie (si activée)
- ✅ Un toast apparaît
- ✅ Vous pouvez cliquer sur la salle pour vous y joindre

### Scénario 3 : Notifications silencieuses
**Situation** : Vous avez désactivé les sons d'appel
**Résultat** :
- ❌ Pas de sonnerie
- ✅ Le toast s'affiche toujours visuellement
- ✅ Le widget Jitsi est disponible

## Dépannage

### Je n'entends pas de sonnerie

1. Vérifiez les **paramètres système d'audio** du navigateur
2. Vérifiez les paramètres Element :
   - Settings → Notifications → Calls → Doit être activé
3. Vérifiez les **règles de notification du serveur** :
   - Votre serveur peut avoir des règles spéciales
4. Vérifiez le **mode silencieux** :
   - Si Element est en mode silencieux, aucun son ne joue

### Le toast n'apparaît pas

1. Vérifiez que JavaScript est activé
2. Vérifiez la **console du navigateur** pour les erreurs (F12)
3. Rechargez la page
4. Vérifiez que vous êtes dans une salle avec >2 participants

### La sonnerie dure trop longtemps

- La sonnerie s'arrête automatiquement après ~90 secondes
- Vous pouvez fermer le widget pour l'arrêter manuellement

## API interne

### Architecture

```
LegacyCallHandler
├── placeJitsiCall(roomId, type)
│   └── notifyJitsiCallStarted(roomId)
│       ├── Vérifie règles push
│       ├── Joue AudioID.Ring
│       └── Ajoute toast via ToastStore
└── play(AudioID.Ring)
    └── BackgroundAudio.play()

JitsiGroupCallToast
├── Affiche icône d'appel
├── Affiche info salle
└── Bouton dismiss
```

### Flux de code

1. Utilisateur clique bouton appel → `placeJitsiCall(roomId, type)`
2. Widget Jitsi ajouté via `WidgetUtils.addJitsiWidget()`
3. `notifyJitsiCallStarted(roomId)` est appelé
4. Vérifie `MatrixClientPeg.get().pushProcessor.getPushRuleById(RuleId.IncomingCall)`
5. Si enabled + ring tweak :
   - `this.play(AudioID.Ring)` → joue le son
   - `ToastStore.addOrReplaceToast()` → affiche le toast
6. Toast s'affiche avec `JitsiGroupCallToast` component

## Fichiers source

- **Logique** : `src/LegacyCallHandler.tsx`
- **UI Toast** : `src/toasts/JitsiGroupCallToast.tsx`
- **CSS** : `res/css/views/toasts/_JitsiGroupCallToast.pcss`
- **Traductions** : `src/i18n/strings/{lang}.json`

## Notes techniques

- Le son joue via `BackgroundAudio` (classe spéciale pour les sons persistants)
- La sonnerie utilise le même fichier que les appels 1-à-1 (`./media/ring`)
- Le toast a une priorité de 95 (juste en dessous des appels entrants à 100)
- La clé du toast est `jitsi_call_{roomId}` pour éviter les doublons
