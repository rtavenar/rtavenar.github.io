---
title: "Requêtes MongoDB depuis R et Python"
subtitle: Énoncé de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Dans ce TD, vous allez effectuer des requêtes classiques à une base MongoDB
depuis des scripts.
Seront abordés ici deux langages:

* les scripts Python vous permettront de récupérer les résultats de vos
requêtes sous forme de variable Python: on utilisera pour cela la librairie
`pymongo` qui présente  l'avantage  d'être  maintenue  par  les  développeurs
de  MongoDB  (ce qui garantit, a priori, une certaine pérennité et une
cohérence avec l'interface MongoDB);
* les scripts R vous permettront de récupérer les résultats de vos requêtes
sous forme  de _dataframe_ dans  R  pour  ensuite  y  appliquer  vos  
traitements statistiques: un utilisera pour cela la librairie `mongolite`.

Ainsi, pour chaque manipulation de cet énoncé, il est demandé d'effectuer le
travail dans  chacun  de  ces deux langages.

# Connexion à la base de données

1. Connectez  vous  à  la  base `food` hébergée sur le serveur MongoDB Atlas
dont l'URL est `clusterm1.0rm7t.mongodb.net`. 
    * En python, avec `pymongo`, vous utiliserez l'URI de connexion suivante :
`"mongodb+srv://etudiant:ur2@clusterm1.0rm7t.mongodb.net/?tls=true&tlsAllowInvalidCertificates=true"`
    * En R, vous utiliserez l'URI : `"mongodb+srv://etudiant:ur2@clusterm1.0rm7t.mongodb.net/food"` et 
passerez l'argument `options = ssl_options(allow_invalid_hostname=TRUE, weak_cert_validation=TRUE)` 
à la fonction `mongo()`. 

Si cela échoue, vous pourrez tester avec l'URI suivante : 

```
mongodb://etudiant:ur2@clusterm1-shard-00-00.0rm7t.mongodb.net:27017,clusterm1-shard-00-01.0rm7t.mongodb.net:27017,clusterm1-shard-00-02.0rm7t.mongodb.net:27017/?ssl=true&replicaSet=atlas-l4xi61-shard-0
```

Si cela échoue toujours et que vous êtes sous Python, il est recommandé de se référer à [la page d'aide dédiée](https://pymongo.readthedocs.io/en/stable/examples/tls.html).



2. Affichez la liste des collections de la base (ceci n'est pas possible en R
avec `mongolite`).

3. Affichez la liste des index de la collection `NYfood`.

# Requêtes de lecture

4. Affichez  la  liste  des  restaurants  de  Manhattan  dont  le  nom
commence par `A`.

5. Combien de résultats comporte cette liste ?

6. Affichez le résultat de la fonction `explain()` pour cette requête
(ceci n'est pas possible en R avec `mongolite`).

7. Reprenez la requête précédente et n'affichez que les 5 premiers résultats.

8. Même  chose  en  ayant  trié  les  résultats  par  ordre  alphabétique
inverse du nom de restaurant.

9. Affichez la liste des notes attribuées à des restaurants de `Manhattan`.
À l'aide d'une boucle, stockez, pour chaque note attribuée, le nombre de restaurants qui ont reçu cette note au moins une fois.
Visualisez ces données sous la forme d'un diagramme en bâton.

10. Affichez la liste des notes existant dans la base.

11. Affichez la liste des restaurants ayant au moins une note postérieure au
20 janvier 2015.
