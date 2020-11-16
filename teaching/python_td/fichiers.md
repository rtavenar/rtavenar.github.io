---
title : "La lecture et l'écriture de fichiers en Python"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Organisation de votre code et de vos fichiers

Pour ce TD, vous écrirez toutes vos fonctions dans un même script Python nommé `TD_fichiers.py`. Celui-ci sera organisé comme indiqué lors des séances précédentes. De plus, vous aurez besoin des données disponibles sur CURSUS dans un fichier `data.zip`.

Le projet que vous ouvrez dans Pycharm doit être organisé comme suit :

```
L2_Python (ou tout autre nom de répertoire parent)
|- data/
   |- a.txt
   |- b.txt
   |- ...
|- TD_fichiers.py
|- ...
```

# Chemins de fichiers

Pour ces questions, pas besoin de coder en Python, munissez-vous uniquement d'un crayon et d'un papier.

1. En vous référant à la structure de dossiers représentée ci-dessus, et en supposant que l'on est en train de travailler dans le script `TD_fichiers.py`, quel est le chemin relatif permettant d'ouvrir le fichier `a.txt` ?

2. Pour être sûrs que ce chemin relatif soit bien valide quel que soit le système d'exploitation (Windows, Linux, MacOS) en train d'exécuter `TD_fichiers.py`, comment devez-vous faire pour définir ce chemin relatif dans votre code Python ?

3. Supposons maintenant que l'on ait la structure de fichiers suivante :


```
L2_Python (ou tout autre nom de répertoire parent)
|- data/
   |- truc/
      |- machin/
         |- chose.txt
   |- a.txt
   |- b.txt
   |- ...
|- TD_fichiers.py
|- ...
```

quel est le chemin relatif permettant d'ouvrir le fichier `chose.txt` ?

4.  Pourquoi préfère-t-on indiquer le chemin relatif, plutôt que le chemin absolu du fichier de données dans le fichier programme ?


# Lecture de fichier textuel

5. Écrivez une fonction qui prend en entrée un nom de fichier et retourne le nombre de mots non vides contenus dans le fichier en question (on suppose que les mots sont séparés par des espaces).

6. Utilisez la fonction codée précédemment pour afficher, fichier par fichier, le nombre de mots des fichiers de votre répertoire `"data"`{.haskell} dont l'extension est `".txt"`{.haskell}.

# Écriture de fichier textuel

7. Écrivez une fonction qui prend en entrée un nom de fichier et une chaîne de caractères et écrit la chaîne dans le fichier indiqué.

8. Écrivez une fonction qui prend en entrée un nom de fichier et une liste de chaînes de caractères et écrit chaque chaîne de la liste dans une nouvelle ligne du fichier indiqué.

<!-- ## L'écriture dans la console
Vous avez déjà écrit dans la console à l'aide de la fonction `print`{.python}.
Plus précisément, cette fonction écrit sur la sortie standard.
Il existe deux autres flux standards.
Le premier, l'entrée standard, est celui duquel vous lisez des chaînes de caractères entrées par les utilisateurs lorsque vous utilisez la fonction `input`{.python}.
Enfin, le dernier flux standard est l'erreur standard, qui est le flux qui doit être utilisé pour écrire les messages d'erreur générés par vos programmes.
Pour choisir le flux de sortie que vous souhaitez utiliser, il faut importer le module `sys`{.python}, puis utiliser la syntaxe suivante :
```python
sys.stdout.write(chaine_a_ecrire)  # Sortie standard
sys.stderr.write(chaine_a_ecrire)  # Erreur standard
```

Ainsi, ces flux sont utilisés de la même manière que les objets `file`{.python} (sauf qu'on ne les ouvre jamais).

5. Écrivez une fonction qui prend en entrée une liste de chaînes de caractères et écrit chaque chaîne de la liste dans une nouvelle ligne sur la sortie standard.
6. Écrivez une fonction qui prend en entrée une liste de chaînes de caractères et écrit chaque chaîne de la liste dans une nouvelle ligne sur l'erreur standard. -->

# Fichiers texte structurés

## Fichiers CSV

9. Écrivez une fonction qui retourne le nombre de lignes et de colonnes (le nombre de colonnes d'un fichier CSV est égal au nombre maximum de champs des lignes de ce fichier) d'un fichier CSV dont le nom est fourni en argument.
On supposera que le séparateur à utiliser pour les fichiers CSV est `";"` et on n'utilisera pas de `Sniffer`.

10. Appliquez cette fonction pour déterminer les nombres de lignes et colonnes de chacun des fichiers de votre répertoire `"data"`{.haskell} dont l'extension est `".csv"`{.haskell}.
Que remarquez-vous pour le fichier `test.csv` ?

## Fichiers JSON

11. Écrivez une fonction qui lit le fichier `"rando_gps.json"`{.haskell} contenu dans le répertoire `"data"`{.haskell} (ce nom de fichier ne devra pas être un paramètre de la fonction, il devra être défini "en dur" dans celle-ci) et retourne le nombre de randonnées listées dans ce fichier.

12. Écrivez une fonction qui lit le fichier `"rando_gps.json"`{.haskell} contenu dans le répertoire `"data"`{.haskell} (ce nom de fichier ne devra pas être un paramètre de la fonction, il devra être défini "en dur" dans celle-ci) et retourne une liste contenant les intitulés des randonnées listées dans ce fichier.
