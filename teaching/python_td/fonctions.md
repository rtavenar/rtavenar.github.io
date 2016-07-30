---
title : "Les fonctions en Python"
---

Le but de cette séance est de manipuler vos premières fonctions en Python.
Comme d'habitude, un rappel : la documentation Python est de très bonne qualité : utilisez-la ([https://docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/)).

# Travail à préparer chez vous avant la séance

1. Écrivez, en pseudo-code, un algorithme **récursif** permettant de calculer le terme de rang $n$ de la suite de Fibonacci définie par :

$$\begin{array}{l}
f_0=f_1=1 \\
f_n=f_{n-1}+f_{n-2}, \forall n \geq 2 \\
\end{array}$$

# Fonctions et procédures en Python

2. Proposez une implémentation récursive du calcul de la somme des `n`{.python} premiers entiers.

3. Implémentez en Python l'algorithme élaboré à la maison.

4. Écrivez une fonction `table`{.python} qui prenne pour argument une base et affiche la table de multiplication de cette base. Par exemple `table(5)`{.python} affichera la table de 5, soit une sortie de la forme :
```
5*1=5
5*2=10
[...]
5*10=50
```

# Arguments facultatifs et valeurs par défaut

5. Écrivez une version améliorée de la fonction `table`{.python}, que vous appellerez `table_multiplication`{.python}, qui prend en entrée une base, un multiplicateur de début et un autre de fin et affiche la table de multiplication de cette base entre les deux bornes fournies.
Par exemple `table_multiplication(5, 4, 7)`{.python} affichera une sortie de la forme :
```
5*4=20
5*5=25
5*6=30
5*7=35
```

# Exercice de synthèse

6. Écrivez une fonction qui calcule l'aire d'une ellipse.
Si l'argument correspondant au demi-petit axe n'est pas spécifié, on supposera qu'il s'agit d'un cercle et que donc le demi-petit axe est égal au demi-grand axe.
