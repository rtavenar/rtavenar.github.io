---
title : "TD : `sklearn` & sélection de modèles"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Dans cette séance, nous nous focaliserons sur la sélection de modèle pour la
classification supervisée avec `sklearn`.

# Préparation des données

Nous allons travailler, pour ce TD, sur un jeu de données ultra classique en
_machine learning_ : le jeu de données "Iris". Ce jeu de données est intégré
dans `sklearn` pour être utilisé facilement.

1. Chargez ce jeu de données à l'aide de la fonction [`load_iris`](http://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_iris.html) du module
`sklearn.datasets`. Faites en sorte de stocker les prédicteurs dans une matrice
`X` et les classes à prédire dans un vecteur `y`. Quelles sont les dimensions
de `X` ?

2. Découpez ce jeu de données en un jeu d'apprentissage et un jeu de test de
mêmes tailles et faites en sorte que chacune de vos variables soient
centrées-réduites.

# Le modèle `SVC` (_Support Vector Classifier_)

Lorsque l'on souhaite faire de la classification supervisée avec `sklearn`, le
fonctionnement sera toujours le même :

```python
mon_classifieur = NomDeLaClasse(a=12, b=3, c=None)
mon_classifieur.fit(X_train, y_train)
mon_classifieur.predict(X_test)
```

où `a`, `b` et `c` sont les hyper-paramètres du modèle.

À vous donc de dénicher la classe `sklearn` correspondant au modèle de votre
choix et d'éplucher sa documentation pour comprendre le fonctionnement des
différents hyper-paramètres associés au modèle.

3. Apprenez un modèle SVM linéaire (classe [`SVC`](http://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html) dans `sklearn`) pour votre
problème.

4. Évaluez ses performances sur votre jeu de test à l'aide de la fonction
[`accuracy_score`](http://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html) du module `sklearn.metrics`.

5. Faites de même avec un modèle SVM à noyau gaussien. Faites varier la valeur
de l'hyperparamètre lié à ce noyau et observez l'évolution du taux de bonnes
classifications.

# Validation croisée

Il existe dans `sklearn` de nombreux itérateurs permettant de faire de la
validation croisée, qui sont listés sur
[cette page](http://scikit-learn.org/stable/modules/classes.html#splitter-classes).

6. Définissez un objet `cv` de la classe `KFold`. Exécutez le code suivant :
```python
for train, valid in cv.split(X_train, y_train):
    print(train, valid)
```
Qu'est-ce qui est affiché ?

7. Faites de même avec des objets des classes `StratifiedKFold` et `LeaveOneOut`
et vérifiez que, même en ne mélangeant pas les données (c'est-à-dire sans
spécifier `shuffle=True`), les découpages obtenus sont différents.

# Sélection de modèle

En pratique, vous n'utiliserez pas vous même ces appels aux méthodes `split()`
des itérateurs de validation croisée, car il existe dans `sklearn` un outil
très pratique pour vous aider lors de votre étape de sélection de modèle.

Cet outil s'appelle
[`GridSearchCV`](http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html).
Là encore, il s'agit d'une classe `sklearn`, et vous l'utiliserez quasiment de
la même manière qu'un classifieur, à la nuance près des paramètres que vous
passerez lors de la construction d'une nouvelle instance.
Nous verrons dans ce TD trois de ces paramètres :

* `estimator` est un classifieur (créé mais pas encore appris sur des données) ;
* `param_grid` est une grille d'hyper-paramètres à tester pour ce classifieur ;
* `cv` est un itérateur de validation croisée, tel que l'un de ceux définis à la
section précédente.

Le paramètre `param_grid` est un dictionnaire (ou une liste de dictionnaire,
comme on le verra plus tard) dont les clés sont les noms des hyper-paramètres à
faire varier et les valeurs associées sont des listes de valeurs à
tester[^1].

8. Reprenez le cas d'un classifieur SVM linéaire et faites varier
l'hyper-paramètre `C` entre 1 et 10 (en prenant 5 valeurs espacées
    régulièrement).

9. Affichez les paramètres du modèle choisi par la validation croisée. Évaluez
les performances de ce modèle sur votre jeu de test.

10. Parfois, certains hyper-paramètres sont liés entre eux. Dans le cas du SVM
par exemple, le choix d'un noyau implique de régler certains hyper-paramètres
spécifiques (_ex._ : le paramètre `gamma` du noyau Gaussien). Dans ce cas, on
peut définir `param_grid` comme une liste de dictionnaires, chaque dictionnaire
correspondant à un cas de figure. Utilisez cette possibilité pour choisir le
meilleur modèle pour votre problème entre un SVM linéaire et un SVM à noyau
Gaussien (pour les deux, on fera varier `C` entre 1 et 10, et pour le noyau
    Gaussien, on fera de plus varier `gamma` entre $10^{-2}$ et 100 sur une
        échelle logarithmique).

11. Étendez cette approche à un autre classifieur supervisé de votre choix et
comparez ses performances à celles du meilleur modèle SVM trouvé jusqu'alors.

# La notion de _Pipeline_

Bien souvent, pour mettre en oeuvre une solution de _machine learning_, vous
allez passer par plusieurs étapes successives de transformation de vos données
avant de les fournir à votre classifieur. Il est possible que ces
pré-traitements aient, eux aussi, des hyper-paramètres à régler. Pour pouvoir
sereinement prendre en compte toutes les configurations possibles, `sklearn`
définit la notion de
[`Pipeline`](http://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html).

12. Modifiez vos données d'origine pour mettre des `numpy.nan` à toutes les
valeurs plus grandes que 2 (en valeur absolue).

13. Créez un _pipeline_ qui soit constitué des 3 étapes suivantes :
a. une imputation des valeurs manquantes ;
b. une standardisation des données ;
c. une classification supervisée par un classifieur de votre choix.

14. Mettez en place une validation croisée qui permette de choisir si
l'imputation doit se faire par valeurs médianes ou moyennes et qui détermine
également un ou plusieurs hyper-paramètres du classifieur que vous avez choisi.

15. Chargez maintenant de nouvelles données à l'aide de la fonction
[`load_digits`](http://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_digits.html)
du module `sklearn.datasets`.
Imaginez un _pipeline_ qui consiste à effectuer tout d'abord une ACP sur ces
données puis une régression logistique dans l'espace de l'ACP.
Mettez en place une validation croisée pour choisir de manière optimale les
paramètres de ces deux étapes de votre _pipeline_.
Comparez votre solution à celle disponible
[là](http://scikit-learn.org/stable/auto_examples/plot_digits_pipe.html).

[^1]: Pour générer ces listes, on pourra avoir recours aux fonctions [`numpy.linspace`](https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.linspace.html) et [`numpy.logspace`](https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.logspace.html).
