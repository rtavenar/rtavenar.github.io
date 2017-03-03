---
title: "Requêtes d'agrégation"
subtitle: Corrigé de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Avant-propos

Les bases de données utilisées ici sont les bases `food`, `etudiants` et `keolis` (issue de `metro.json` disponible sur CURSUS).
Vérifiez qu'elles sont bien chargées sur le serveur avant de débuter le TD.

# Agrégations "simples"

1. Affichez, sans utiliser la méthode `count()`, le nombre de restaurants dans la base `food`.

2. Affichez le nombre de restaurants par quartier.

3. Même chose en ignorant les restaurants dont le quartier n'est pas renseigné (valeur `"Missing"`{.haskell}).

4. Même chose en faisant apparaître les quartiers ayant le plus de restaurants aux premières positions.

5. Même chose en ne conservant que les quartiers ayant plus de 5000 restaurants.

# Groupement par date

Vous savez déjà que les attributs de type date doivent être considérés de façon particulière : il faut notamment toujours utiliser une comparaison sous forme d'intervalle pour ces attributs. Ainsi, si on veut regrouper des documents par date (regrouper ensemble tous les documents concernant un mois donné, puis en faire une moyenne, par exemple), il faudra avoir recours à une syntaxe particulière pour préciser à quel degré de précision sur la date l'agrégation doit se faire (ici on suppose que le champ en question s'appelle `att_date` dans la collection et on fera une agrégation par jour) :

```javascript
> db.coll.aggregate( [
   {
     $group: {
        _id: {
               month: { $month: "$att_date" },
               day: { $dayOfMonth: "$att_date" },
               year: { $year: "$att_date"}
           },
        total: { $sum: "$price" }
     }
   }
] )
```

6.	Passez à la base `keolis` et affichez, mois par mois, le nombre de stations de métro vérifiées.

7. Même chose en triant les résultats par date croissante (observez bien la structure du résultat de la requête précédente).

# Manipulations de listes

8. Affichez le nombre minimum et maximum de notes obtenues par les restaurants de la base `food`.

9. Affichez le nombre moyen de notes obtenues par les restaurants.

10. Même chose en ne considérant que les restaurants du quartier `"Manhattan"`{.haskell}.

11. Même chose en affichant la moyenne quartier par quartier.

12. Affichez, pour chaque valeur possible de note, le nombre de fois qu'elle a été attribuée.

13. Même question en ne considérant que les restaurants du quartier `"Brooklyn"`{.haskell}.

14. Répétez la manipulation précédente en n'affichant que les notes données plus de 1000 fois dans ce quartier.

15. Au lieu de cette dernière contrainte (note donnée plus de 1000 fois), affichez les 3 notes les plus données.

16. Affichez, mois par mois, le nombre d'évaluations effectuées.

17. Même chose en triant les dates par ordre croissant.

18. Référez-vous à [l'aide du mot-clé $out](https://docs.mongodb.org/manual/reference/operator/aggregation/out/#out-aggregation) pour générer une nouvelle collection, appelée `summary`, dans la base `food` qui contienne les statistiques pour chaque année et chaque quartier des nombres moyen, minimum et maximum de notes obtenues par restaurant. Les données seront triées pour faire apparaître les années les plus récentes en premières et, pour une même année, les quartiers par ordre alphabétique.

19. Passez à la base `etudiants` et calculez, pour chaque étudiant, sa moyenne. Vous pourrez pour cela utiliser (une ou) des fonctions de calcul horizontal dont l'aide se trouve à l'adresse : <https://docs.mongodb.org/v3.0/reference/operator/aggregation-arithmetic/>
