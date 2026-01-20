# README - Notifications Jitsi

## 🎯 Vue d'ensemble

Cette implémentation ajoute **notifications audio et visuelles** quand un appel de groupe Jitsi Meet est lancé.

**Fonctionnalités** :
- 🔔 **Toast notification** avec nom de la salle
- 🔊 **Son de notification** (même que pour les appels entrants)
- ⚙️ **Respect des paramètres utilisateur** (push rules)
- 🌍 **Support multilingue** (prêt pour traduction)

---

## 📁 Structure des fichiers

```
element-web/
├── src/
│   ├── LegacyCallHandler.tsx        ✏️ Modifié (+30 lignes)
│   └── toasts/
│       └── JitsiGroupCallToast.tsx  ✨ NOUVEAU (58 lignes)
├── res/css/
│   ├── _components.pcss             ✏️ Modifié (+1 import)
│   └── views/toasts/
│       └── _JitsiGroupCallToast.pcss ✨ NOUVEAU (~45 lignes)
├── src/i18n/strings/
│   └── en_EN.json                   ✏️ Modifié (+2 clés)
└── Documentation/
    ├── JITSI_NOTIFICATION_IMPLEMENTATION.md    (technique)
    ├── TRANSLATION_GUIDE.md                    (traductions)
    ├── JITSI_NOTIFICATION_USER_GUIDE.md        (utilisateurs)
    ├── JITSI_NOTIFICATION_TESTING_GUIDE.md     (tests)
    ├── IMPLEMENTATION_SUMMARY.md               (résumé)
    ├── CHANGESET.md                           (changements)
    └── README.md                              (ce fichier)
```

---

## 🚀 Installation rapide

### Prérequis
- Node.js 16+
- npm ou yarn
- Element Web déjà cloné

### Étapes
```bash
# 1. Vérifier les fichiers modifiés
git status

# 2. Compiler
npm run build  # ou: yarn build

# 3. Servir localement
npm start      # ou: yarn start

# 4. Tester
# Ouvrir http://localhost:8080
# Lancer un appel Jitsi dans une salle (>2 personnes)
```

---

## 📖 Documentation

| Document | Audience | Contenu |
|----------|----------|---------|
| **JITSI_NOTIFICATION_IMPLEMENTATION.md** | Développeurs | Détails techniques, architecture |
| **JITSI_NOTIFICATION_USER_GUIDE.md** | Utilisateurs + Support | Comment ça marche, paramètres, FAQ |
| **JITSI_NOTIFICATION_TESTING_GUIDE.md** | QA + Développeurs | 12 scénarios de test détaillés |
| **TRANSLATION_GUIDE.md** | Traducteurs + Mainteneurs | Comment ajouter des traductions |
| **IMPLEMENTATION_SUMMARY.md** | Leads + Project Managers | Vue d'ensemble, limitations, prochaines étapes |
| **CHANGESET.md** | Reviewers + Release Managers | Liste détaillée de tous les changements |
| **README.md** | Tous | Ce fichier - point de départ |

---

## 🧪 Test rapide

```bash
# 1. Lancer Element Web
npm start

# 2. Se connecter
# Utilisateur: alice@example.com
# Mot de passe: correcthorsebatterystaple

# 3. Créer une salle
# Inviter au moins 2 autres personnes

# 4. Lancer un appel
# Cliquer l'icône 📹 (appel vidéo)
# Ou 📞 (appel audio)

# 5. Vérifier
# ✅ Entendre sonnerie "ring"
# ✅ Toast s'affiche avec nom salle
# ✅ Widget Jitsi visible
```

---

## 🔧 Code principal

### Entrée: `placeJitsiCall()`

```typescript
// File: src/LegacyCallHandler.tsx
private async placeJitsiCall(roomId: string, type: CallType): Promise<void> {
    const client = MatrixClientPeg.safeGet();
    
    // ... code existant pour créer le widget ...
    
    try {
        await WidgetUtils.addJitsiWidget(client, roomId, type, "Jitsi", false);
        logger.log("Jitsi widget added");
        
        // ✨ NOUVEAU: Notification
        this.notifyJitsiCallStarted(roomId);
    } catch (e) {
        // ... gestion d'erreur ...
    }
}
```

### Orchestration: `notifyJitsiCallStarted()`

```typescript
private notifyJitsiCallStarted(roomId: string): void {
    // 1. Vérifier les règles de notification push
    const incomingCallPushRule = MatrixClientPeg.safeGet()
        .pushProcessor.getPushRuleById(RuleId.IncomingCall);
    
    // 2. Jouer le son si autorisé
    if (pushRuleEnabled && tweakSetToRing && !this.isForcedSilent()) {
        this.play(AudioID.Ring);  // ← Réutilise son existant
    }
    
    // 3. Afficher le toast
    ToastStore.sharedInstance().addOrReplaceToast({
        key: `jitsi_call_${roomId}`,
        priority: 95,
        component: JitsiGroupCallToast,
        props: { roomId },
    });
}
```

### UI: `JitsiGroupCallToast`

```typescript
// File: src/toasts/JitsiGroupCallToast.tsx
export default class JitsiGroupCallToast extends React.Component<IProps> {
    public render(): React.ReactNode {
        const room = MatrixClientPeg.safeGet().getRoom(this.props.roomId);
        
        return (
            <div className="mx_JitsiGroupCallToast">
                <VideoCallIcon />
                <div className="mx_JitsiGroupCallToast_text">
                    <div className="mx_JitsiGroupCallToast_title">
                        {_t("voip|jitsi_group_call_started", { roomName: room?.name })}
                    </div>
                    <div className="mx_JitsiGroupCallToast_description">
                        {_t("voip|jitsi_group_call_description")}
                    </div>
                </div>
                <Button onClick={this.onDismiss}>Dismiss</Button>
            </div>
        );
    }
}
```

---

## 🌍 Traductions

### Actuellement implémentée
- ✅ English (en_EN.json)

### À ajouter
- ⏳ French, German, Spanish, Dutch, Portuguese, Russian, etc.

### Comment ajouter
```json
// Dans src/i18n/strings/{lang}.json
{
    "voip": {
        "jitsi_group_call_started": "Group call started in %(roomName)s",
        "jitsi_group_call_description": "A Jitsi group call has been started in this room"
    }
}
```

Voir `TRANSLATION_GUIDE.md` pour les traductions.

---

## 🐛 Dépannage

### Pas de sonnerie

```
1. Vérifier Settings → Notifications → Calls (doit être ON)
2. Vérifier le volume du système
3. Vérifier la console (F12) pour erreurs
4. Vérifier que push rules existent sur serveur
```

### Toast n'apparaît pas

```
1. Vérifier que vous êtes dans une salle (>2 personnes)
2. Vérifier la console (F12)
3. Rafraîchir la page
4. Vérifier que CSS est chargé (res/css/_components.pcss)
```

### Erreur TypeScript

```
"jitsi_group_call_started is not assignable to TranslationKey"

Solution: Assurez-vous que la clé est dans src/i18n/strings/en_EN.json
```

---

## 📊 Métriques

| Métrique | Valeur |
|----------|--------|
| Fichiers modifiés | 2 |
| Fichiers créés (code) | 2 |
| Nouvelles lignes de code | ~100 |
| Nouvelles dépendances | 0 |
| Taille bundle (+) | ~1 KB gzippé |
| Changements API | 0 |

---

## ✅ Checklist de review

Pour un review de pull request:

- [ ] Code compiles sans erreur
- [ ] Tests passent (npm test)
- [ ] Pas d'erreur console (F12)
- [ ] Son joue quand appel Jitsi lancé
- [ ] Toast s'affiche avec bon nom salle
- [ ] Appels 1-à-1 non affectés
- [ ] CSS stylis correctement
- [ ] Traductions présentes (EN minimum)
- [ ] Documentation complète et lisible

---

## 📝 Git commit message

```
feat: Add Jitsi group call notifications with ringing

- Add audio notification (ring sound) when Jitsi group call starts
- Add visual notification toast with room name
- Respect user push notification rules
- Add translations (EN)
- Add comprehensive documentation

Fixes #issue-number
```

---

## 🔗 Liens utiles

- [Element Web Repository](https://github.com/element-hq/element-web)
- [matrix-js-sdk Push Rules](https://github.com/matrix-org/matrix-js-sdk)
- [Jitsi Meet](https://jitsi.org)
- [Matrix Spec - Push Notifications](https://spec.matrix.org/v1.3/client-server-api/#push-rules)
- [React Docs](https://react.dev)

---

## 🤝 Contributing

Pour contribuer:

1. **Ajouter traductions** → Voir `TRANSLATION_GUIDE.md`
2. **Améliorer le toast** → Modifier `src/toasts/JitsiGroupCallToast.tsx`
3. **Changer le son** → Voir `AudioID` dans `LegacyCallHandler.tsx`
4. **Ajouter tests** → Voir `JITSI_NOTIFICATION_TESTING_GUIDE.md`

---

## 📄 Licence

Voir `LICENSE-AGPL-3.0`, `LICENSE-GPL-3.0`, ou `LICENSE-COMMERCIAL`

---

## 🎯 Prochaines étapes

1. **Court terme** :
   - Tester sur tous les navigateurs
   - Ajouter traductions des langues principales
   - Collecter feedback utilisateurs

2. **Moyen terme** :
   - Support desktop notification
   - Son distinctif pour Jitsi
   - Bouton "Join now" sur le toast

3. **Long terme** :
   - Règles notification par salle
   - Intégration Element Call
   - Paramètres avancés

---

## 📧 Support

Pour toute question:
1. Consultez d'abord la documentation
2. Vérifiez les guides de test
3. Ouvrez une issue sur GitHub

---

**Dernière mise à jour** : 2024-01-19

Enjoy your notifications! 🎉
