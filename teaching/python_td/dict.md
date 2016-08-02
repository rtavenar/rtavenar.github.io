---
title : "Les dictionnaires en Python"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Travail à préparer chez vous avant la séance
1. Écrivez en Python une fonction qui prend en entrée une chaîne de caractères comprenant, sur chaque ligne, trois champs séparés par des caractères `';'`{.haskell} (un numéro d'étudiant, un nom et un prénom) et retourne un dictionnaire dont les clés sont les numéros d'étudiants lus et les valeurs sont, pour chaque numéro d'étudiant, une chaîne correspondant à la concaténation des prénom et nom de la personne. On pourra tester la fonction avec la chaîne suivante :
```python
chaine_etudiants = """213615200;BESNIER;JEAN
213565488;DUPOND;MARC
214665555;DURAND;JULIE"""
```

# Manipulations de base des dictionnaires

## Construction de dictionnaire
Il existe deux façons de déclarer un dictionnaire dont les clés sont des chaînes de caractères, dont voici une illustration :
```python
d = dict(a=5, b=7, c=1, d=7, e=7)
d = {"a": 5, "b": 7, "c": 1, "d": 7, "e": 7}
```

Si, par contre, on souhaite utiliser pour clé autre chose qu'une chaîne de caractère, on utilisera la seconde notation :
```python
d2 = {1: 12, 1000: 7}
```

La copie de dictionnaire pose exactement, en Python, les mêmes problèmes que la copie de liste.
On utilisera la fonction `dict`{.python} pour dupliquer le contenu d'un dictionnaire.

2. Écrivez une fonction qui prend en entrée un dictionnaire et retourne la liste de ses éléments sous forme de paires comme retournée par la méthode `items`{.python}, triés par valeur.
3. Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne un dictionnaire indiquant, pour chaque mot, sa fréquence dans la chaîne fournie.

# Exercices de synthèse
4. On dispose d'un dictionnaire associant à des noms de commerciaux d'une société le nombre de ventes qu'ils ont réalisées.
Par exemple :
```python
ventes={"Dupont":14, "Hervy":19, "Geoffroy":15, "Layec":21}
```
a. Écrire une fonction qui prend en entrée un tel dictionnaire et renvoie le nombre total de ventes dans la société.
b. Écrire une fonction qui prend en entrée un tel dictionnaire et renvoie le nom du vendeur ayant réalisé le plus de ventes.
5. Écrivez une fonction qui prend en entrée un dictionnaire associant à un nom une liste de notes et qui retourne le nom et la moyenne de la personne qui a la moyenne la plus élevée.
On pourra utiliser le dictionnaire suivant pour tester la fonction ainsi écrite :
```python
notes = {"Romain": [1, 5, 12], "Jean": [15, 16, 19], "Robert": [5, 12], "Michel": []}
```
