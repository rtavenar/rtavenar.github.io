---
title: "Requêtes supplémentaires"
subtitle: Corrigé de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Avant-propos

Les bases de données utilisées ici sont les mêmes que celles utilisées lors du TD précédent. Si besoin, pensez à les recharger sur le serveur.

# La base `test`

1. Affichez les titres (mais pas les autres clés) de tous les posts de la base.


# La base `etudiants`

2. Affichez la liste des étudiantes sans note.

3. Affichez la liste des étudiants nés en 1995.


4. Affichez la liste des étudiants ayant au moins une note supérieure à 13.


5. Affichez la liste des étudiants ayant au moins une note comprise entre 10 et 15. Pour cela, jetez un oeil à l'aide en ligne pour le mot-clé `$elemMatch`{.javascript} : <http://docs.mongodb.org/manual/reference/operator/query/elemMatch/>


6. Affichez la liste des étudiants ayant toutes leurs notes supérieures ou égales à 10. Ici, il pourra être utile de reformuler la requête sous sa forme négative : on veut tous les étudiants pour lesquels il n'existe pas de note inférieure à 10. Vous aurez donc probablement besoin de l'opérateur `$not` pour lequel vous trouverez de l'aide en ligne : <http://docs.mongodb.org/manual/reference/operator/query/not/>


7. Même question en rejetant les étudiants n'ayant pas eu de note.


# La base `food`

8. Combien y a-t-il de restaurants pour lesquels le zipcode est `"10462"`{.javascript} ? Pour mettre en place des conditions sur des clés de sous-document (ici, le sous-document `address`), on peut utiliser la syntaxe suivante :

```javascript
> db.collec.find({"sousdoc.cle": valeur})
```


9. Affichez la liste des notes attribuées à des restaurants du quartier `"Manhattan"`{.javascript} (attribut `grades.grade`).


10. Affichez la liste des restaurants ayant au moins une note `"C"`{.javascript}.


11. Affichez la liste des restaurants n'ayant aucune note `"C"`{.javascript}.


12. Affichez la liste des restaurants n'ayant que des notes `"A"`{.javascript}.
