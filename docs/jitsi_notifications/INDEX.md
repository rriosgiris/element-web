# 📚 Index de documentation - Notifications Jitsi

## 🎯 Commencer ici

### Je veux... | Lire ce fichier
---|---
...utiliser la fonctionnalité | [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md)
...comprendre comment ça marche | [JITSI_NOTIFICATION_IMPLEMENTATION.md](JITSI_NOTIFICATION_IMPLEMENTATION.md)
...configurer pour mon serveur | [JITSI_NOTIFICATION_USER_GUIDE.md](JITSI_NOTIFICATION_USER_GUIDE.md#configuration-des-notifications-pour-les-appels)
...tester la fonctionnalité | [JITSI_NOTIFICATION_TESTING_GUIDE.md](JITSI_NOTIFICATION_TESTING_GUIDE.md)
...ajouter une traduction | [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md)
...review le code | [CHANGESET.md](CHANGESET.md)
...voir le statut | [STATUS.md](STATUS.md)
...connaître les limitations | [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md#limitations-actuelles)
...reporter un bug | [JITSI_NOTIFICATION_USER_GUIDE.md#dépannage](JITSI_NOTIFICATION_USER_GUIDE.md#dépannage)

---

## 📖 Guide complet par rôle

### 👨‍💼 Product Manager / Lead
**Objectif** : Comprendre ce qui a été fait et les impacts

**Lire dans cet ordre** :
1. [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md) - Vue générale (5 min)
2. [STATUS.md](STATUS.md) - Statut d'implémentation (2 min)
3. [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Détails et limitations (10 min)
4. [CHANGESET.md](CHANGESET.md#statistiques-des-changements) - Stats des changements (5 min)

**Durée totale** : 15-20 minutes

---

### 👨‍💻 Développeur
**Objectif** : Comprendre le code et contribuer

**Lire dans cet ordre** :
1. [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md) - Vue d'ensemble (5 min)
2. [JITSI_NOTIFICATION_IMPLEMENTATION.md](JITSI_NOTIFICATION_IMPLEMENTATION.md) - Architecture (10 min)
3. [src/LegacyCallHandler.tsx](src/LegacyCallHandler.tsx) - Lire le code (5 min)
4. [src/toasts/JitsiGroupCallToast.tsx](src/toasts/JitsiGroupCallToast.tsx) - Lire le composant (2 min)
5. [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md#prochaines-étapes-recommandées) - Prochaines étapes (5 min)

**Durée totale** : 25-30 minutes

---

### 🧪 QA / Testeur
**Objectif** : Tester la fonctionnalité complètement

**Lire dans cet ordre** :
1. [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md#-test-rapide) - Test rapide (5 min)
2. [JITSI_NOTIFICATION_TESTING_GUIDE.md](JITSI_NOTIFICATION_TESTING_GUIDE.md) - Guide complet (30 min)
3. [JITSI_NOTIFICATION_USER_GUIDE.md](JITSI_NOTIFICATION_USER_GUIDE.md#dépannage) - Dépannage (10 min)

**Durée totale** : 45 minutes

---

### 🌍 Traducteur
**Objectif** : Ajouter une traduction

**Lire dans cet ordre** :
1. [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md) - Guide complet (10 min)
2. [src/i18n/strings/en_EN.json](src/i18n/strings/en_EN.json) - Voir l'exemple (2 min)
3. Chercher sa langue dans [src/i18n/strings/](src/i18n/strings/) (2 min)
4. Ajouter les 2 clés à la section `voip` (5 min)
5. Tester : Settings → Language → Vérifier (5 min)

**Durée totale** : 20 minutes

---

### 📋 Reviewer / Mainteneur
**Objectif** : Review et merger les changements

**Lire dans cet ordre** :
1. [STATUS.md](STATUS.md) - Statut rapide (3 min)
2. [CHANGESET.md](CHANGESET.md) - Changements détaillés (15 min)
3. [CHANGESET.md#checklist-de-déploiement](CHANGESET.md#checklist-de-déploiement) - Vérifications (5 min)
4. Code review des 5 fichiers modifiés (10 min)
5. [JITSI_NOTIFICATION_TESTING_GUIDE.md#checklist-de-déploiement](JITSI_NOTIFICATION_TESTING_GUIDE.md#checkpoints-clés) - Vérifier les tests (5 min)

**Durée totale** : 40 minutes

---

### 👤 Utilisateur final
**Objectif** : Comprendre et utiliser la fonctionnalité

**Lire dans cet ordre** :
1. [JITSI_NOTIFICATION_USER_GUIDE.md#fonctionnement](JITSI_NOTIFICATION_USER_GUIDE.md#fonctionnement) - Comment ça marche (5 min)
2. [JITSI_NOTIFICATION_USER_GUIDE.md#paramètres-utilisateur](JITSI_NOTIFICATION_USER_GUIDE.md#paramètres-utilisateur) - Paramètres (5 min)
3. [JITSI_NOTIFICATION_USER_GUIDE.md#cas-dusage](JITSI_NOTIFICATION_USER_GUIDE.md#cas-dusage) - Exemples (5 min)
4. [JITSI_NOTIFICATION_USER_GUIDE.md#dépannage](JITSI_NOTIFICATION_USER_GUIDE.md#dépannage) - Problèmes (5 min)

**Durée totale** : 20 minutes

---

## 📑 Index des documents

| Document | Type | Audience | Taille | Durée |
|----------|------|----------|--------|-------|
| [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md) | Guide | Tous | 280 lignes | 10 min |
| [JITSI_NOTIFICATION_IMPLEMENTATION.md](JITSI_NOTIFICATION_IMPLEMENTATION.md) | Technique | Dev | 150 lignes | 15 min |
| [JITSI_NOTIFICATION_USER_GUIDE.md](JITSI_NOTIFICATION_USER_GUIDE.md) | Utilisateur | Utilisateurs | 300 lignes | 20 min |
| [JITSI_NOTIFICATION_TESTING_GUIDE.md](JITSI_NOTIFICATION_TESTING_GUIDE.md) | Test | QA/Dev | 350 lignes | 30 min |
| [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md) | Traduction | Traducteurs | 120 lignes | 15 min |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | Résumé | Managers | 400 lignes | 20 min |
| [CHANGESET.md](CHANGESET.md) | Technique | Reviewers | 600 lignes | 30 min |
| [STATUS.md](STATUS.md) | Statut | Tous | 280 lignes | 10 min |
| [INDEX.md](INDEX.md) | Navigation | Tous | 300 lignes | 5 min |

---

## 🔗 Fichiers source modifiés

| Fichier | Lignes | Type | Lire |
|---------|--------|------|------|
| src/LegacyCallHandler.tsx | +30 | Modifié | [Voir](src/LegacyCallHandler.tsx#L1018) |
| src/toasts/JitsiGroupCallToast.tsx | 58 | ✨ Nouveau | [Voir](src/toasts/JitsiGroupCallToast.tsx) |
| res/css/views/toasts/_JitsiGroupCallToast.pcss | 45 | ✨ Nouveau | [Voir](res/css/views/toasts/_JitsiGroupCallToast.pcss) |
| res/css/_components.pcss | +1 | Modifié | [Voir](res/css/_components.pcss#L389) |
| src/i18n/strings/en_EN.json | +2 | Modifié | [Voir](src/i18n/strings/en_EN.json#L4122) |

---

## 🎯 Questions fréquentes

### Où est la sonnerie programmée ?
→ [JITSI_NOTIFICATION_IMPLEMENTATION.md#fonctionnement](JITSI_NOTIFICATION_IMPLEMENTATION.md#fonctionnement-du-flux)

### Comment ajouter une traduction ?
→ [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md)

### Comment tester ?
→ [JITSI_NOTIFICATION_TESTING_GUIDE.md](JITSI_NOTIFICATION_TESTING_GUIDE.md#étapes-de-test)

### Est-ce que ça affecte les appels 1-à-1 ?
→ [JITSI_NOTIFICATION_USER_GUIDE.md#test-5--appels-1-à-1-régression](JITSI_NOTIFICATION_TESTING_GUIDE.md#test-5--appels-1-à-1-régression)

### Comment désactiver les notifications ?
→ [JITSI_NOTIFICATION_USER_GUIDE.md#désactiver-la-sonnerie-jitsi](JITSI_NOTIFICATION_USER_GUIDE.md#désactiver-la-sonnerie-jitsi)

### Quelles langues sont supportées ?
→ [STATUS.md#-traductions-ajoutées](STATUS.md#-traductions-ajoutées)

---

## 🚀 Démarrer rapidement

### Je veux juste utiliser la fonctionnalité
```bash
npm run build && npm start
# → Ouvrir une salle avec 3+ personnes
# → Cliquer le bouton appel 📹
# → Entendre la sonnerie 🔊
```

### Je veux contribuer
1. Lire [README_JITSI_NOTIFICATIONS.md](README_JITSI_NOTIFICATIONS.md)
2. Voir ce qui se passe dans [src/](src/)
3. Lire [JITSI_NOTIFICATION_IMPLEMENTATION.md](JITSI_NOTIFICATION_IMPLEMENTATION.md)
4. Contribuer !

### Je veux tester complètement
1. Suivre [JITSI_NOTIFICATION_TESTING_GUIDE.md](JITSI_NOTIFICATION_TESTING_GUIDE.md)
2. Remplir le rapport de test
3. Reporter tout problème

---

## 📞 Support

**Si vous avez une question** :
1. Chercher dans le document pertinent (voir tableau ci-dessus)
2. Chercher "FAQ" ou "Dépannage" dans le document
3. Ouvrir une issue GitHub

**Si vous trouvez un bug** :
1. Lire [JITSI_NOTIFICATION_USER_GUIDE.md#dépannage](JITSI_NOTIFICATION_USER_GUIDE.md#dépannage)
2. Vérifier la console (F12)
3. Ouvrir une issue avec les détails

**Si vous voulons contribuer** :
1. Fork le repository
2. Créer une branche
3. Faire les changements
4. Tester complètement (voir TESTING_GUIDE)
5. Soumettre une PR

---

## ✅ Checklist rapide

Vous avez compris si :
- [ ] Vous savez où le code est
- [ ] Vous savez comment tester
- [ ] Vous savez comment traduire
- [ ] Vous savez comment reporter un bug
- [ ] Vous savez comment contribuer

Si toutes les cases sont cochées, **vous êtes prêt(e)** ! 🚀

---

**Dernière mise à jour** : 2024-01-19

**Statut** : ✅ Documentation complète
