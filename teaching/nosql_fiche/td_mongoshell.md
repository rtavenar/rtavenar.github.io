---
title: "Premières requêtes MongoDB"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Avant-propos

Lors de ce TD, vous allez utiliser l'interface Robo 3T pour vous connecter à
des bases de données MongoDB.
Dans le cadre de ce TD, le serveur MongoDB sera soit lancé dans une machine
virtuelle sur votre poste, soit une instance MongoDB Atlas
(_cf._ Guide d'installation).

1. Connectez vous à un serveur comme indiqué dans le guide d'installation et
observez les noms des bases de données disponibles
(panneau de gauche de votre fenêtre)

2. Vous devriez voir une base nommée `test`.
Cliquez droit sur le nom de cette base et choisissez "Open Shell".
Une invite de commande s'ouvre alors dans le panneau de droite : c'est là que
vous entrerez vos requêtes (et vous cliquerez sur la flèche verte pour exécuter
votre commande).

Pour connaître la liste des collections contenues dans une base de données, on utilise la commande :

```javascript
db.getCollectionInfos()
```

Enfin, pour connaître le nombre de documents dans une collection, la syntaxe à utiliser est :

```javascript
db.nomDeLaCollection.count()
```

3. Combien de collections contient la base `test` ? Et combien de documents contiennent chacune de ces collections ?

# Premières requêtes

Il existe en MongoDB deux types de requêtes simples, retournant respectivement toutes les occurrences d'une collection ou la première :

```javascript
db.nomDeLaCollection.find()
db.nomDeLaCollection.findOne()
```

<!-- De plus, lorsqu'on utilise la méthode `find()`{.javascript}, on peut rendre le résultat plus lisible à l'aide de `pretty()`{.javascript} :

```javascript
> db.nomDeLaCollection.find().pretty()
``` -->

4. Chargez la base de données `test` et affichez le contenu de chacune de ses
collections.

Nous allons maintenant changer de base de données de travail. Pour cela,
basculez sur une base appelée `food` (clic droit sur le nom de la base, puis
    "Open Shell").

Si l'on souhaite fixer des contraintes sur les documents à retourner, il suffit de passer en argument d'une de ces fonctions un document masque contenant les valeurs souhaitées. Par exemple, la requête suivante retourne tous les documents ayant un champ `"x"`{.javascript} dont la valeur est `"y"`{.javascript} :

```javascript
db.nomDeLaCollection.find({"x": "y"})
```

5. Utilisez cette syntaxe pour n'afficher que les documents de la collection `NYfood` correspondant à des boulangeries (pour lesquels le champ `"cuisine"`{.javascript} vaut `"Bakery"`{.javascript}). Comptez le nombre de résultats (la méthode `count()` accepte un document masque elle aussi).

6. Affichez maintenant la liste des boulangeries du Bronx. Combien y a-t-il de restaurants chinois (`"Chinese"`{.javascript}) à Brooklyn ?

Les résultats que vous avez obtenus jusqu'à présent sont assez indigestes, notamment parce que toutes les clés sont retournées pour tous les documents. Il est possible de limiter cela en spécifiant les clés à retourner comme second argument de `find()`, ici la clé `"z"`{.javascript}:

```javascript
db.nomDeLaCollection.find({"x": "y"}, {"z": true})
```

7. Utilisez cette astuce pour n'afficher que les **noms** des boulangeries du Bronx.

8. Affichez les nom et notes (mais pas les dates de naissance) des étudiants prénommés Marc dans la base `etudiants`.

# Opérateurs de comparaison

Pour effectuer des requêtes plus complexes, impliquant des opérateurs de comparaison, on utilisera la syntaxe suivante :

```javascript
db.nomDeLaCollection.find({"x": {operateur: valeur}})
```

Il est à noter que le sous-document contenant l'opérateur peut en fait contenir plusieurs opérateurs et ainsi ne seront retournés que les documents vérifiant toutes les conditions.

Les opérateurs les plus classiques sont les suivants :

Opérateur logique | Mot-clé MongoDB
:---:|:---:
<|`$lt`
>|`$gt`
<=|`$lte`
>=|`$gte`
"est dans la liste"|`$in`
"n'est pas dans la liste"|`$nin`

Enfin, le mot-clé `$exists` permet de ne retourner que les documents dans lesquels la clé spécifiée existe.

9. Affichez la liste des étudiants ayant au moins une note au-dessus de 10.

10. Que retourne la requête suivante ? Vérifiez votre intuition.

```javascript
db.notes.find({"notes": {$gt: 12, $lte: 10}})
```

11. Affichez le nom de tous les restaurants chinois du Bronx et de Brooklyn dans une même liste. Vous pourrez utiliser la méthode `count()` pour vérifier que la liste obtenue est bien la fusion des deux listes issues de chaque quartier.

12. Affichez le nom de toutes les boulangeries du Bronx commençant par la lettre `"P"`{.javascript}.

Lorsque l'on souhaite effectuer un test sur une date, on utilisera toujours des opérateurs de comparaison. Toutefois, pour comparer les dates d'une base à des dates de référence, il faudra :

* que les dates de la base soient bien codées au format date (ISODate en MongoDB) ;
* que les dates de référence soient des variables au format date, déclarées à l'aide d'une commande du type :

```javascript
d1 = new Date("AAAA-MM-JJ")
```

13. Dans la base de données `etudiants`, affichez tous les étudiants nés après le 1er Janvier 1995.

14. Même question en ne sélectionnant que les étudiantes.

15. Dans la base de données `test`, affichez la liste des posts en date du 26 Août 2015.

Enfin, il est possible de combiner plusieurs conditions à l'aide de l'opérateur `$or` :

```javascript
db.nomDeLaCollection.find({$or: [{"x": 1}, {"y": "zzz"}]})
```

La commande précédente retournera ainsi l'ensemble des documents vérifiant au moins une des deux conditions suivantes :

* `"x" = 1`{.javascript}
* `"y" = "zzz"`{.javascript}

De la même façon, l'opérateur `$nor` permet de ne retourner que les documents ne vérifiant aucune des conditions spécifiées.

16. Affichez la liste des étudiants qui vérifient l'une des deux conditions suivantes :

* de sexe féminin ;
* dont le prénom commence par la lettre `"M"`{.javascript}

Lorsque l'on travaille sur des listes, il peut être utile de tester leur longueur, ce qui se fait avec le mot-clé `$size` :

```javascript
db.nomDeLaCollection.find({"cleDeLaListe": {$size: 12}})
```

ne retournera ainsi que les documents pour lesquels la valeur associée à la clé `cleDeLaListe` est une liste de taille 12.

17. En utilisant la base `test`, affichez la liste des posts n'ayant pas reçu de commentaire.

18. En utilisant la base `etudiants`, affichez la liste des étudiants ayant obtenu exactement deux notes.

19. Affichez la liste des étudiants ayant obtenu une ou deux notes.

20.	Affichez la liste des étudiants ayant obtenu au moins deux notes.
