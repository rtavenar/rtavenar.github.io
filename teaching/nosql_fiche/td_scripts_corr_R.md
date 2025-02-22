---
title: "Requêtes MongoDB depuis R et Python"
subtitle: Corrigé de TD pour un cours dispensé à  l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Dans ce TD, vous allez effectuer des requêtes classiques à une base MongoDB
depuis des scripts.
Seront abordés ici deux langages:

* les scripts R vous permettront de récupérer les résultats de vos requêtes
sous forme  de _dataframe_ dans  R  pour  ensuite  y  appliquer  vos  
traitements statistiques: un utilisera pour cela la librairie `mongolite`;
* les scripts Python vous permettront de récupérer les résultats de vos
requêtes sous forme de variable Python: on utilisera pour cela la librairie
`pymongo` qui présente  l'avantage  d'être  maintenue  par  les  développeurs
de  MongoDB  (ce qui garantit, a priori, une certaine pérennité et une
cohérence avec l'interface MongoDB).

Ainsi, pour chaque manipulation de cet énoncé, il est demandé d'effectuer le
travail dans  chacun  de  ces deux langages.

# Connexion à la base de données

1. Connectez  vous  à  la  base `food` hébergée sur le serveur MongoDB Atlas
dont l'URL est `clusterm1.0rm7t.mongodb.net`.

**Attention: ci-dessous les identifiants et mot de passe sont inscrits en clair pour que vous puissiez tester ces bouts de code chez vous, mais il s'agit d'une très mauvaise pratique : ceux-ci doivent toujours être lus dans un fichier externe de manière à ce que vous puissiez partager votre code sans révéler vos identifiants.**

```R
library("mongolite")

url="mongodb://etudiant:ur2@clusterm1-shard-00-00.0rm7t.mongodb.net:27017,clusterm1-shard-00-01.0rm7t.mongodb.net:27017,clusterm1-shard-00-02.0rm7t.mongodb.net:27017/?ssl=true&replicaSet=atlas-l4xi61-shard-0"

mdb = mongo(collection="NYfood", db="food",
            url=url,
            verbose=TRUE)
```

2. Affichez la liste des collections de la base (ceci n'est pas possible en R
avec `mongolite`).

3. Affichez la liste des index de la collection `NYfood`.

```R
print(mdb$index())
```

# Requêtes de lecture

4. Affichez  la  liste  des  restaurants  de  Manhattan  dont  le  nom
commence par `A`.

```R
q = '{"borough": "Manhattan", "name": {"$regex": "^A", "$options" : "i"}}'
print(mdb$find(query = q))
```

5. Combien de résultats comporte cette liste ?

```R
print(mdb$count(query= q))
```

6. Affichez le résultat de la fonction `explain()` pour cette requête
(ceci n'est pas possible en R avec `mongolite`).

7. Reprenez la requête précédente et n'affichez que les 5 premiers résultats.

```R
print(mdb$find(query = q, limit = 5))
```

8. Même  chose  en  ayant  trié  les  résultats  par  ordre  alphabétique
inverse du nom de restaurant.

```R
print(mdb$find(query = q, limit = 5, sort = '{"name": -1}'))
```

9. Affichez la liste des notes attribuées à des restaurants de `Manhattan`.
À l'aide d'une boucle, stockez, pour chaque note attribuée, le nombre de restaurants 
qui ont reçu cette note au moins une fois.
Visualisez ces données sous la forme d'un diagramme en bâton.

```R
q = '{"borough": "Manhattan"}'

liste_notes <- coll$distinct(key = "grades.grade",
                             query = q)

i <- 1
cpt <- numeric(length(liste_notes))
for (note in liste_notes){
  cpt[i] <- coll$count(query = paste0('{"borough": "Manhattan",
                                       "grades.grade": "', note, '"}'))
  i <- i + 1
}

barplot(cpt,
        names.arg = liste_notes,
        main = "Répartition des notes \n Restaurants de Manhattan")
```

10. Affichez la liste des notes existant dans la base.

```R
print(mdb$distinct(key = "grades.grade"))
```

11. Affichez la liste des restaurants ayant au moins une note postérieure au
20 janvier 2015.

```R
q = '{"grades.date": {"$gte": {"$date": "2015-01-20T00:00:00Z"}}}'
print(mdb$find(query=q))
```
