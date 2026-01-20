# Guide d'ajout des traductions pour les notifications Jitsi

## Clés de traduction requises

Ajoutez les clés suivantes dans la section `voip` de chaque fichier de traduction :

```json
"voip": {
    ...
    "jitsi_group_call_started": "Group call started in %(roomName)s",
    "jitsi_group_call_description": "A Jitsi group call has been started in this room"
}
```

## Traductions par langue

### Anglais (en_EN.json) ✓ FAIT
```json
"jitsi_group_call_started": "Group call started in %(roomName)s",
"jitsi_group_call_description": "A Jitsi group call has been started in this room"
```

### Français (fr.json)
```json
"jitsi_group_call_started": "Appel de groupe lancé dans %(roomName)s",
"jitsi_group_call_description": "Un appel de groupe Jitsi a été lancé dans cette salle"
```

### Allemand (de_DE.json)
```json
"jitsi_group_call_started": "Gruppenanruf in %(roomName)s gestartet",
"jitsi_group_call_description": "Ein Jitsi-Gruppenanruf wurde in diesem Raum gestartet"
```

### Espagnol (es.json)
```json
"jitsi_group_call_started": "Llamada de grupo iniciada en %(roomName)s",
"jitsi_group_call_description": "Se ha iniciado una llamada de grupo de Jitsi en esta sala"
```

### Néerlandais (nl.json)
```json
"jitsi_group_call_started": "Groepsgesprek gestart in %(roomName)s",
"jitsi_group_call_description": "Een Jitsi-groepsgesprek is in deze kamer gestart"
```

### Portugais (pt_BR.json)
```json
"jitsi_group_call_started": "Chamada de grupo iniciada em %(roomName)s",
"jitsi_group_call_description": "Uma chamada de grupo do Jitsi foi iniciada nesta sala"
```

### Russe (ru.json)
```json
"jitsi_group_call_started": "Групповой вызов начался в %(roomName)s",
"jitsi_group_call_description": "Групповой вызов Jitsi был начат в этой комнате"
```

## Instructions d'édition

1. Ouvrez le fichier de traduction approprié (par exemple, `src/i18n/strings/fr.json`)
2. Trouvez la section `"voip": {`
3. Localisez la clé `"you_are_presenting"` (la dernière clé généralement)
4. Ajoutez une virgule après `"you_are_presenting"`
5. Ajoutez les deux nouvelles clés comme montré ci-dessus
6. Assurez-vous que la syntaxe JSON est correcte (virgules entre les entrées, pas après la dernière)

## Format du paramètre

Le paramètre `%(roomName)s` est remplacé automatiquement avec le nom réel de la salle à la display.

Exemple :
- Si le nom de la salle est "Support", le message affichera :
  - "Group call started in Support" (EN)
  - "Appel de groupe lancé dans Support" (FR)
