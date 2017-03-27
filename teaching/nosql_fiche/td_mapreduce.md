---
title: "Les requêtes de type _Map Reduce_"
subtitle: TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Avant-propos

Dans la suite de ce TD, vous allez formuler des requêtes de type _Map Reduce_ pour des bases MongoDB.
Ces requêtes vous permettront d'accéder à des fonctionnalités non offertes nativement par MongoDB, comme :

* grouper par clé et non par valeur ;
* compter les occurrences de mots dans les chaînes de caractères de la base ;
* effectuer des opérations arithmétiques non autorisées par MongoDB (nous verrons ici le cas de la division d'un entier par une durée) ;
* _etc._

Ces requêtes _Map Reduce_ ont en revanche un inconvénient principal : elles sont exécutées en _Javascript_ et sont donc relativement lentes (cela aura toutefois peu d'effet sur des bases de petite taille).

## Éléments de syntaxe _Javascript_

Une requête _Map Reduce_ est de la forme suivante :

```javascript
db.nomDeLaCollection.mapReduce(fonction_map,
                               fonction_reduce,
                               "nomDeLaCollectionDeSortie")
```

et le résultat est enregistré dans la table `"nomDeLaCollectionDeSortie"`{.haskell}.

Il faut donc être capable de coder en _Javascript_ deux fonctions (`map` et `reduce`).
La première ne prend pas d'argument, ne retourne rien, mais _émet_ des messages par des appels à la fonction `emit(clé, valeur)`.
La seconde prend deux arguments en entrée :

* une clé émise par un ou plusieurs appels à `map`;
* une liste de valeurs émises par les mêmes appels à `map`.

Pour coder ces fonctions, il est nécessaire de maîtriser quelques concepts de base en _Javascript_.

Tout d'abord, pour définir une variable en _Javascript_, la syntaxe à utiliser est la suivante :

```javascript
var nomDeLaVariable = valeur;
```

Ensuite, pour appeler une fonction (par exemple la fonction `emit`), la syntaxe est relativement usuelle :

```javascript
emit(clé, valeur);
```

Enfin, pour parcourir une liste (ou un dictionnaire), la syntaxe sera :

```javascript
for (var i in liste) {
    valeur = liste[i];
}

for (var clé in dictionnaire) {
    valeur = dictionnaire[clé];
}
```

## Un exemple de requête _Map Reduce_

Supposons tout d'abord que l'on souhaite faire la somme des valeurs associées à l'attribut `"a"`{.haskell} pour l'ensemble des documents d'une collection nommée `collec` (notez qu'une telle requête aurait pu être effectuée plus efficacement sous la forme d'une requête d'agrégation).

La formulation _Map Reduce_ de cette requête sera donc de la forme :

```javascript
function map_somme() {
    emit("a", this["a"]);
}
function reduce_somme(key, values) {
    s = 0;
    for (var i in values) {
        s = s + values[i];
    }
    return s;
}

db.collec.mapReduce(map_somme, reduce_somme, "output_somme")
db.output_somme.find()
```

Vous remarquez que :

* dans la fonction `map_somme`, l'accès au document courant se fait par le biais de la variable `this`{.javascript} ;
* la fonction `reduce_somme` a une valeur de retour qui est du même type que la valeur émise par la fonction `map_somme`.

# À vous de jouer

1. Créez une collection contenant les documents suivants :

```
{a: 123, b: 5}
{b: 4, c: 8}
{c: 4}
```

2. Affichez, pour chaque clé, le nombre de document dans lesquels cette clé est présente.

3. Affichez les mots présents dans la collection issue du fichier `random_text.json` ainsi que leur fréquence d'apparition. Classez ces résultats par ordre de fréquence décroissante.

4. La collection issue du fichier `links.json` contient une liste de liens.
À chaque lien est associé un certain nombre de catégories (attribut `tags`).
On aimerait classer les différentes catégories à l'aide du score $S_c$ suivant :

$$S_c = \sum_{d \in \mathcal{D}_c} \frac{s_d}{\Delta_d}$$

où $\mathcal{D}_c$ est l'ensemble des documents contenant la catégorie $c$, $s_d$ est la valeur de l'attribut `score` du document $d$ et $\Delta_d$ est l'ancienneté du document $d$, calculée comme :

```javascript
anciennete = new Date() - date_du_document
```

Proposez une requête qui permette de classer les liens selon ce critère.

# Pour aller plus loin

5. Supposons maintenant que nous ayons, dans une collection, des documents constitués de deux attributs : `"x"`{.haskell} et `"y"`{.haskell}. Proposez un moyen, dans le formalisme _Map Reduce_, de calculer le coefficient de régression $\hat{\beta}$ optimal au sens des moindres carrés. Vérifiez votre résultat en proposant une autre solution utilisant les opérateurs d'agrégation.
