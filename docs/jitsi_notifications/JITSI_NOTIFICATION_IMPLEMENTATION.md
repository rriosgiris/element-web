# Implémentation de Notifications pour Appels Jitsi

## Résumé des changements

Cette implémentation ajoute un système complet de notification avec sonnerie lorsqu'un appel de groupe Jitsi Meet est lancé dans une salle.

## Fichiers modifiés

### 1. **src/LegacyCallHandler.tsx**
- Ajout de l'import du nouveau composant `JitsiGroupCallToast`
- Modification de la méthode `placeJitsiCall()` pour déclencher les notifications
- Nouvelle méthode `notifyJitsiCallStarted(roomId: string)` qui :
  - Vérifie si les règles de notification push permettent de jouer un son
  - Joue le son "ring" (même que pour les appels 1-à-1)
  - Affiche un toast de notification dans l'interface

### 2. **src/toasts/JitsiGroupCallToast.tsx** (nouveau fichier)
Composant React qui affiche :
- Une icône d'appel vidéo
- Le nom de la salle où l'appel a été lancé
- Une description explicative
- Un bouton "Dismiss" pour fermer la notification

### 3. **src/i18n/strings/en_EN.json**
Ajout des clés de traduction :
- `"jitsi_group_call_started": "Group call started in %(roomName)s"`
- `"jitsi_group_call_description": "A Jitsi group call has been started in this room"`

### 4. **res/css/views/toasts/_JitsiGroupCallToast.pcss** (nouveau fichier)
Styles CSS pour le toast incluant :
- Layout flexbox pour alignement
- Couleurs cohérentes avec le thème de l'application
- Espacement et typographie appropriés
- Styles pour l'icône, le titre et la description

### 5. **res/css/_components.pcss**
- Ajout de l'import du fichier CSS du toast Jitsi

## Fonctionnement

### Flux de notification

1. **Lancement d'un appel Jitsi** :
   - Utilisateur clique sur le bouton d'appel vidéo/audio
   - `placeJitsiCall()` est appelé
   - Le widget Jitsi est ajouté à la salle

2. **Notification sonore** :
   - `notifyJitsiCallStarted()` vérifie les règles de notification push
   - Si enabled et si son "ring" est configuré, joue le son
   - Respecte les paramètres de silence forcé de l'utilisateur

3. **Notification visuelle** :
   - Un toast s'affiche dans l'interface
   - Affiche le nom de la salle
   - Permet à l'utilisateur de la fermer

### Points clés

- **Respecte les paramètres utilisateur** : La sonnerie ne joue que si l'utilisateur a activé les notifications pour les appels entrants
- **Cohérence** : Utilise le même système de son que les appels 1-à-1 (AudioID.Ring)
- **Non-intrusif** : Le toast peut être facilement fermé
- **Multilingue** : Les clés de traduction sont prêtes pour les autres langues

## Configuration

### Règles de notification Matrix

La notification fonctionne en se basant sur la règle de notification `m.rule.call` avec :
- **Action** : set_tweak avec "sound" = "ring"
- **Condition** : Applicable à tous les appels

Ces règles sont gérées par le serveur Matrix et les paramètres client de l'utilisateur.

## Testage

Pour tester la nouvelle fonctionnalité :

1. Accédez à une salle avec plus de 2 personnes
2. Cliquez sur le bouton d'appel vidéo/audio
3. Vous devriez entendre une sonnerie et voir un toast de notification
4. Le toast affiche le nom de la salle et peut être fermé

## Prochaines améliorations possibles

- Ajouter une option de paramètre pour contrôler les notifications Jitsi séparément
- Ajouter une notification desktop si le navigateur supporte
- Ajouter la traduction dans d'autres langues
