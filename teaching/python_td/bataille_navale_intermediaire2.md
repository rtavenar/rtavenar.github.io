---
title : Bataille navale
subtitle: Suggestion de découpage numéro 2
language: fr
rights: Creative Commons CC BY-NC-SA
---


Dans votre code, la grille de bataille navale sera représentée sous la forme
d'un dictionnaire. Ce dictionnaire aura pour clés les noms de case (par exemple
`"B3"`{.haskell}) et pour valeurs les indices de bateaux. Si une case est vide, la clé
correspondante ne sera pas pas stockée dans le dictionnaire. Enfin, au cours du
jeu, ces valeurs pourront être remplacées par les valeurs suivantes :

- `"O"`{.haskell} indiquera que la case était auparavant occupée par un bateau qui a été
attaqué ;
- `"X"`{.haskell} indique que la case a été attaquée sans succès (car elle était vide).

1. Écrivez une fonction `charger_grille` qui prend en entrée un nom de fichier
et retourne une grille (telle que définie plus haut) correspondant au contenu
du fichier.

2. Écrivez une fonction `affiche` qui prend en entrée une grille et
affiche son contenu.

3. Écrivez une fonction `bateau_coule` qui prend en entrée un numéro de bateau
et une grille et retourne un booléen qui indique s'il reste au moins un morceau
de ce bateau sur une case.

4. Écrivez une fonction `partie_finie` qui prend en entrée une grille et
retourne un booléen indiquant si la grille
correspond à une partie finie (c'est-à-dire que tous les bateaux ont été coulés)
ou non.

5. Écrivez une fonction `faire_jouer` qui demande à l'utilisateur où il
souhaite jouer et retourne une chaine de caractères indiquant la case jouée.

6. Écrivez une fonction `verif_et_met_a_jour` qui prend en entrée une grille
et une case jouée, affiche l'effet de
ce coup (`"À l'eau"`{.haskell}, `"Touché"`{.haskell} ou
`"Bateau X coulé"`{.haskell}) et retourne la grille
mise à jour.

7. Écrivez une fonction `bataille` qui prend en entrée un nom de fichier
contenant la description des positions de bateaux pour une partie de bataille
navale et déroule la partie correspondante.
