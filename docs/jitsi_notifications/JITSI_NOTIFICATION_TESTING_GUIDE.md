# Guide de test - Notifications Jitsi

## Prérequis de test

- ✅ Element Web en cours d'exécution
- ✅ Compilé avec les changements (npm run build ou yarn build)
- ✅ Un serveur Matrix avec au moins 2 utilisateurs
- ✅ Audio activé sur votre système

## Étapes de test

### Test 1 : Notification de base

1. **Préparation**
   - Ouvrez Element Web avec l'utilisateur A
   - Créez une salle de groupe ou rejoignez une salle existante
   - Assurez-vous qu'il y a au moins 3 personnes dans la salle (pour que ça soit un appel de groupe)

2. **Lancement de l'appel**
   - Cliquez sur l'icône d'appel vidéo 🎥 ou audio 📞
   - Vous devriez entendre une **sonnerie**
   - Un **toast** devrait apparaître en haut à droite

3. **Vérifications**
   - ✅ Sonnerie audible ?
   - ✅ Toast visible ?
   - ✅ Nom de la salle affiché dans le toast ?
   - ✅ Widget Jitsi apparu dans la salle ?

### Test 2 : Fermeture du toast

1. **Depuis le test précédent**
   - Gardez le toast visible

2. **Action**
   - Cliquez sur le bouton "Dismiss" du toast

3. **Vérification**
   - ✅ Toast disparaît ?
   - ✅ Sonnerie continue de jouer ?
   - ✅ Widget Jitsi reste actif ?

### Test 3 : Paramètres de notification

1. **Accès aux paramètres**
   - Allez à Settings → Notifications

2. **Vérification du contrôle**
   - Trouvez la section **Calls**
   - L'option push notifications doit être disponible
   - Notez l'état actuel

3. **Test de désactivation**
   - Désactivez "Push notifications"
   - Retournez à la salle et lancez un nouvel appel
   - ✅ Pas de sonnerie ? (si c'est le comportement attendu)

4. **Test de réactivation**
   - Réactivez "Push notifications"
   - Lancez un nouvel appel
   - ✅ Sonnerie est de retour ?

### Test 4 : Apparence du toast

1. **Vérifier les éléments visuels**
   - Icône d'appel vidéo visible ?
   - Titre correct ("Group call started in...") ?
   - Texte de description affiché ?
   - Bouton "Dismiss" cliquable ?

2. **Vérifier le style**
   - Les couleurs correspondent au thème ?
   - L'alignement est correct ?
   - La typographie est lisible ?

### Test 5 : Appels 1-à-1 (régression)

1. **Préparation**
   - Ouvrez une conversation 1-à-1

2. **Lancement d'appel**
   - Cliquez sur l'icône d'appel vidéo
   - Un appel 1-à-1 devrait commencer (pas un Jitsi)

3. **Vérification**
   - ✅ Toast d'appel entrant classique apparaît ?
   - ✅ Sonnerie joue ?
   - ✅ Pas de toast Jitsi (car ce n'est pas un appel de groupe) ?

### Test 6 : Navigateurs différents

Répétez les Tests 1-4 sur :
- Chrome / Edge
- Firefox
- Safari (si disponible)

**Points de vérification** :
- ✅ Son joue sur tous les navigateurs ?
- ✅ Toast s'affiche correctement ?
- ✅ Pas d'erreurs console (F12) ?

### Test 7 : Performance

1. **Lancer plusieurs appels**
   - Lancez 3-4 appels successifs rapidement
   - ✅ Chaque toast remplace le précédent (pas d'accumulation) ?
   - ✅ Pas de crash ou ralentissement ?

2. **Fermeture rapide**
   - Lancez un appel, fermez immédiatement
   - ✅ Toast disparaît sans erreur ?

### Test 8 : Appels parallèles

1. **Configuration**
   - Ouvrez 2 onglets avec Element Web
   - Rejoignez 2 salles différentes

2. **Appels simultanés**
   - Lancez un appel dans l'onglet 1
   - Ensuite dans l'onglet 2
   - ✅ Les deux toasts apparaissent (ou le dernier remplace) ?
   - ✅ Sons joue pour chaque appel ?

## Cas de test - Traductions

### Test 9 : Traduction anglaise

1. Changez la langue en Anglais (Settings → Language)
2. Lancez un appel Jitsi
3. Toast devrait afficher :
   - "Group call started in [Room Name]"
   - "A Jitsi group call has been started in this room"

### Test 10 : Traduction française (si implémentée)

1. Changez la langue en Français
2. Lancez un appel Jitsi
3. Toast devrait afficher :
   - "Appel de groupe lancé dans [Nom Salle]"
   - "Un appel de groupe Jitsi a été lancé dans cette salle"

## Cas de test avancés

### Test 11 : Console du navigateur

1. Ouvrez la console (F12)
2. Lancez un appel Jitsi
3. **Vérifications** :
   - ✅ Pas d'erreurs JavaScript (rouges) ?
   - ✅ Logs info affichées (bleus) ?
   - Vous devriez voir : `"Jitsi widget added"`

### Test 12 : Événements React DevTools

Si React DevTools est installé :
1. Ouvrez l'onglet React
2. Lancez un appel Jitsi
3. **Vérifications** :
   - ✅ `JitsiGroupCallToast` component créé ?
   - ✅ Props affichées correctement ?

## Rapport de test

Utilisez le template suivant pour documenter vos tests :

```markdown
## Test Report - Jitsi Notifications

**Date** : YYYY-MM-DD
**Testeur** : [Nom]
**Navigateur** : [Browser + Version]
**OS** : [OS + Version]

### Résultats

- Test 1 (Notification de base) : ✅ / ❌ / ⚠️
- Test 2 (Fermeture toast) : ✅ / ❌ / ⚠️
- Test 3 (Paramètres) : ✅ / ❌ / ⚠️
- Test 4 (Apparence) : ✅ / ❌ / ⚠️
- Test 5 (1-à-1) : ✅ / ❌ / ⚠️
- Test 6 (Navigateurs) : ✅ / ❌ / ⚠️
- Test 7 (Performance) : ✅ / ❌ / ⚠️
- Test 8 (Parallèles) : ✅ / ❌ / ⚠️
- Test 9 (EN) : ✅ / ❌ / ⚠️
- Test 10 (FR) : ✅ / ❌ / ⚠️
- Test 11 (Console) : ✅ / ❌ / ⚠️
- Test 12 (DevTools) : ✅ / ❌ / ⚠️

### Erreurs trouvées

1. [Description de l'erreur]
   - Navigateur : 
   - Étapes pour reproduire :
   - Screenshot :

### Notes supplémentaires

[Toutes observations pertinentes]
```

## Checkpoints clés

Avant de considérer l'implémentation comme complète :

- ✅ Test 1 passe (notification audio + visuelle)
- ✅ Test 5 passe (pas de régression sur 1-à-1)
- ✅ Test 11 passe (pas d'erreurs console)
- ✅ Au moins un navigateur (Chrome/Firefox) testé
- ✅ Traduction anglaise correcte
- ✅ CSS stylis correctement

## Documentation pour l'équipe

Une fois tous les tests passés, créez :
1. Un pull request avec les changements
2. Un résumé des fonctionnalités
3. Les instructions d'utilisation pour les utilisateurs
4. Les instructions de translation pour les mainteneurs
