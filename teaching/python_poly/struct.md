# Structures de données et structures de contrôle

Dans ce chapitre, nous allons nous intéresser aux éléments de base de la syntaxe Python : les structures de données d'une part et les structures de contrôle d'autre part.
Les structures de données vont nous permettre de stocker dans la mémoire de l'ordinateur (dans le but de les traiter ensuite) des données tandis que les structures de contrôle vont servir à définir les interactions que nous allons avoir avec ces données.

## Variables

En Python, les structures de données sont toutes des variables, il n'existe pas de constante.
Une variable est une association entre un symbole (le nom de la variable) et une valeur, cette dernière pouvant varier au cours de l'exécution du programme.
Les variables Python sont typées dynamiquement, ce qui signifie qu'une variable, à un moment donné de l'exécution d'un programme, a un type précis qui lui est attribué, mais que celui-ci peut évoluer au cours de l'exécution du programme.

Les types de base existant en Python sont les suivants :

* `int` : entier ;
* `float` : nombre à virgule ;
* `str` : chaîne de caractères.

En Python, le type d'une variable n'est pas déclaré par l'utilisateur : il est défini par l'usage (la valeur effective que l'on décide de stocker dans la variable en question).

Par exemple, l'instruction suivante en Python attribue la valeur `12` à la variable `v`, qui devient donc automatiquement de type entier :
```python 
v = 12
```

Ainsi, les instructions suivantes ont toutes une incidence sur le type des variables considérées :
```python 
v = 12     # v est alors de type entier
c = "abc"  # c est de type chaîne de caractères
d = 'abc'  # d est également de type chaîne de caractères 
           # les contenus de c et d sont identiques
v = 12.    # v change de type et est désormais de type nombre à virgule
```

Pour vérifier le type d'une variable, il suffit d'utiliser la fonction `type(.)` de la librairie standard :
```python 
print(type(v))  # la fonction print(.) permet d'afficher 
                # une information dans le terminal
# [Sortie] <class 'float'>
```

Comme le montrent les exemples précédents, pour pouvoir utiliser des variables, on doit leur donner un nom (placé à gauche du signe égal dans l'opération d'affectation).
Ces noms de variables doivent respecter certaines contraintes :

* ils doivent débuter par une lettre (minuscule ou majuscule, peu importe) ou par le symbole `_` ;
* ils ne doivent contenir que des lettres, des chiffres et des symboles `_` ;
* ils ne doivent pas correspondre à un quelconque mot réservé du langage Python, dont voici la liste :
```python 
and del for is raise assert elif from lambda return break else global 
not try nonlocal True False class except if or while continue import
pass yield None def finally in
```
* ils ne doivent pas correspondre à des noms de fonction de la librairie standard de Python (cette dernière condition n'est en fait qu'une bonne pratique à observer) : vous apprendrez au fur et à mesure les noms de ces fonctions.

Les noms de variable en Python sont sensibles à la casse, ainsi les variables `maVariable` et `mavariable` ne pointent pas sur les mêmes données en mémoire. Pour s'en convaincre, on peut exécuter le code suivant :
```python 
mavariable = 12
maVariable = 15
print(mavariable)
# [Sortie] 12
print(maVariable)
# [Sortie] 15
```

Comme on l'a vu plus haut, on utilise en Python l'opérateur `=` pour assigner une valeur à une variable. 
La sémantique de cet opérateur est la suivante : "assigner la valeur contenue dans le membre de droite à la variable du membre de gauche".
Ainsi, il est tout à fait valide d'écrire, en Python :
```python 
x = 3.9 * x * (1 - x)
```
Pour exécuter cette instruction, l'interpréteur Python commencera par évaluer le membre de droite en utilisant la valeur courante de la variable `x`, puis affectera la valeur correspondant au résultat de l'opération `3.9 * x * (1 - x)` dans la variable `x`.

On le voit dans l'exemple précédent, pour manipuler des variables, on utilisera des opérateurs (dont les plus connus sont les opérateurs arithmétiques).
Le tableau suivant dresse une liste des opérateurs définis pour les variables dont le type est l'un des types numériques (entier, nombre à virgule, nombre complexe) :

| Opérateur | Opération |
|:---:|:---:|
| `+` | Addition |
| `-` | Soustraction |
| `*` | Multiplication |
| `/` | Division |
| `**` | Élévation à la puissance |
| `%` | Modulo (non défini pour les nombres complexes) |


De plus, pour chacun de ces opérateurs, il existe un opérateur associé qui réalise successivement l'opération demandée puis l'affectation de la nouvelle valeur à la variable en question. 
Ainsi, l'instruction suivante :
```python 
x = x + 2
```

qui ajoute 2 à la valeur courante de `x` puis stocke le résultat du calcul dans `x` peut se réécrire :
```python 
x += 2
```

Ceci est purement un raccourci de notation, s'il ne vous semble pas évident à maîtriser au premier abord, vous pouvez vous en passer et toujours utiliser la notation `x = x + 2`.

Enfin, lorsque l'évaluation d'une expression implique plusieurs opérateurs, les règles de priorité sont les suivantes (de la priorité maximale à la priorité minimale) :

1. parenthèses ;
2. élévation à la puissance ;
3. multiplication / division ;
4. addition / soustraction ;
5. de gauche à droite.

Pour prendre un exemple concret, pour évaluer l'expression :
```python 
3.9 * x * (1 - x)
```

on commencera par évaluer le contenu de la parenthèse puis, les 2 opérations restantes étant toutes des multiplications, on les effectuera de gauche à droite.
