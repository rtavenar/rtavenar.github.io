---
title : "Les fonctions en Python"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
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

2. Proposez une implémentation récursive du calcul de la somme des `n`{.python} premiers entiers. On écrira une fonction `somme_entier`{.python} qui prend en argument la valeur de `n`{.python} et renvoie la somme des entiers.

3. Implémentez en Python l'algorithme élaboré à la maison. On écrira une fonction `fibonacci` qui prend en argument le rang `n` et renvoie la valeur du terme.

4. Écrivez une fonction `duree_secondes`{.python} qui prend en argument une durée en heures, minutes, secondes, exprimée sous la forme de trois variable, et qui renvoie la durée équivalente en nombre de secondes.

5. Écrivez une fonction `delta_secondes`{.python} qui retourne la différence (en secondes) entre deux durées exprimées en heures, minutes, secondes.

6. Écrivez une fonction `table`{.python} qui prenne pour argument une base et affiche la table de multiplication de cette base. Par exemple `table(5)`{.python} affichera la table de 5, soit une sortie de la forme :
```
5*1=5
5*2=10
[...]
5*10=50
```

7. Écrivez une fonction `aire_preimetre_rectangle`{.python} qui retourne l'aire et le périmètre d'un rectangle dont les longueurs des côtés sont passés en argument.

8. Analysez la structure des paroles de la chanson _La jument de Michao_ et écrivez une fonction qui affiche ces paroles dans le terminal pour un nombre d'années `n`{.python} initial passé en argument. Voici la structure de la chanson pour `n=4` :

> C'est dans 4 ans je m'en irai.
J'entends le loup et le renard chanter.
{2x}
>
> J'entends le loup, le renard et la belette.
J'entends le loup et le renard chanter.
{2x}
>
> C'est dans 3 ans je m'en irai.
La jument de Michao a passé dans le pré.
>
> La jument de Michao et son petit poulain.
A passé dans le pré et mangé tout le foin.
{2x}
>
> L'hiver viendra les gars, l'hiver viendra.
La jument de Michao, elle s'en repentira.
{2x}
>
> C'est dans 2 ans je m'en irai.
J'entends le loup et le renard chanter.
{2x}
>
> J'entends le loup, le renard et la belette.
J'entends le loup et le renard chanter.
{2x}
>
> C'est dans 1 ans je m'en irai.
La jument de Michao a passé dans le pré.
>
> La jument de Michao et son petit poulain.
A passé dans le pré et mangé tout le foin.
{2x}
>
> L'hiver viendra les gars, l'hiver viendra.
La jument de Michao, elle s'en repentira.
{2x}

# Arguments facultatifs et valeurs par défaut

9. Écrivez une fonction `somme`{.python} qui prenne en entrée 2, 3, ou 4 nombres et en retourne la somme.

10. Écrivez une version améliorée de la fonction `table`{.python}, que vous appellerez `table_multiplication`{.python}, qui prenne en entrée une base, un multiplicateur de début et un autre de fin et affiche la table de multiplication de cette base entre les deux bornes fournies.
Par exemple `table_multiplication(5, 4, 7)`{.python} affichera une sortie de la forme :

```
5*4=20
5*5=25
5*6=30
5*7=35
```

Notez qu'un appel à `table_multiplication(5)`{.python} devra avoir le même effet qu'un appel à `table(5)`{.python}

# Exercice de synthèse

11. Écrivez une fonction qui calcule l'aire d'une ellipse.
Si l'argument correspondant au demi-petit axe n'est pas spécifié, on supposera qu'il s'agit d'un cercle et que donc le demi-petit axe est égal au demi-grand axe.
