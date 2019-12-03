---
title : Bataille navale, un choix cornélien
subtitle: Suggestion de découpage
language: fr
rights: Creative Commons CC BY-NC-SA
---

Lors de la séance de CM de vendredi dernier, vous avez décidé d'une partie des
structures de données à utiliser pour le problème de la bataille navale. Mais
vous n'avez pas discuté de comment représenter les bateaux eux-mêmes.

Pour ce faire, vous avez deux options :

* Option 1 : la grille de bataille navale sera représentée sous la forme
d'un dictionnaire. Ce dictionnaire aura pour clés les noms de case (par exemple
`"B3"`{.haskell}) et pour valeurs l'état de la case correspondante :

    - `"O"`{.haskell} indiquera que la case était auparavant occupée par un bateau
    qui a été attaqué ;
    - `"X"`{.haskell} indique que la case a été attaquée sans succès (car elle
        était vide).

    Si une case est vide, la clé correspondante ne sera pas pas stockée dans le
    dictionnaire. Dans ce cas, les positions des bateaux sont stockées dans un
    dictionnaire de listes de positions, chaque position étant représentée par une
    chaine de caractères du type `"B3"`{.haskell}

* Option 2 : la grille de bataille navale sera représentée sous la forme
d'un dictionnaire. Ce dictionnaire aura pour clés les noms de case (par exemple
`"B3"`{.haskell}) et pour valeurs les indices de bateaux. Si une case est vide,
la clé correspondante ne sera pas pas stockée dans le dictionnaire. Enfin, au
cours du jeu, ces valeurs pourront être remplacées par les valeurs suivantes :

    - `"O"`{.haskell} indiquera que la case était auparavant occupée par un bateau
    qui a été attaqué ;
    - `"X"`{.haskell} indique que la case a été attaquée sans succès (car elle
        était vide).

**Vous devez faire un choix collectif (une décision par groupe de TD) :**

* Si vous choisissez l'option 1, suivez
[ce lien](bataille_navale_intermediaire3.html).
* Si vous choisissez l'option 2, suivez
[ce lien](bataille_navale_intermediaire2.html).
