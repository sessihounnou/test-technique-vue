# Test technique frontend Skalin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


## Liste de taches à effectuer

 - Modifier le composant `AnimalInput.vue` pour permettre la modification d'un animal en utilisant le store VueX
    - Nom de l'animal: string
    - Age de l'animal: integer > 0
    - Espèce de l'animal: string parmi {Chien, Chat, Lapin} 
 - Créer un modèle `AppointementModel.js` permettant de stocker un RDV chez le vétérinaire d'un animal
    - Contient un champ Date du rdv: Date
    - Contient un champ type de rdv: string parmi {contrôle, blessure, vaccin}
    - Ajouter un champ `lastAppointement` dans `AnimalModel.js` permettant de stocker le dernier RDV d'un animal chez le vétérinaire
    - Afficher les données du dernier RDV de l'animal dans `AnimalInfo.vue` 
    - Permettre de modifier les données du dernier RDV de l'animal dans `AnimalInput.vue`
- Lorsqu'un animal est modifié, utiliser le système d'évènements entre composants pour afficher un texte qui disparait au bout de quelques secondes dans `AnimalList.vue` 
- Dans le composant `AnimalList.vue` modifier le css du composant pour afficher 2 composants `AnimalCard` par colonne au lieu d'un seul via l'utilisation de `display: grid`
- Bonus : Faire des tests unitaires sur les modèles du store.


## Livrables

Une fois les taches trminées, renvoyer le zip du projet (sans les `node_modules`) par mail.

Bonne chance!