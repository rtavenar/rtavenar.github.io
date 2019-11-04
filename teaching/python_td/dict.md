---
title : "Les dictionnaires en Python"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Organisation de votre code

Pour ce TD, vous créerez un nouveau fichier `td6.py` dans le répertoire que vous
avez créé à la première séance.
Dans ce fichier, votre code sera organisé de la manière suivante :

```python
def ma_premiere_fonction_qui_a_un_meilleur_nom_que_celui_la(n):
    [...]

def mon_autre_fonction(truc, machin):
    [...]

# Tests
print(ma_premiere_fonction_qui_a_un_meilleur_nom_que_celui_la(3))
# [Sortie] 3
```

Notamment, vous définirez vos fonctions en début de fichier et les appels seront
listés en fin de fichier. De cette manière, vous pourrez, d'une question à
l'autre, réutiliser les fonctions déjà codées au besoin.

# Manipulations de base des dictionnaires

1. Écrivez une fonction qui prend en entrée un dictionnaire et retourne la liste
de ses éléments sous forme de paires comme retournée par la méthode
`items`{.python}, triés par clé.

2. Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne
un dictionnaire indiquant, pour chaque mot, sa fréquence dans la chaîne fournie.

# Exercices de synthèse

3. On dispose d'un dictionnaire associant à des noms de commerciaux d'une
société le nombre de ventes qu'ils ont réalisées.
Par exemple :
```python
ventes={"Dupont":14, "Hervy":19, "Geoffroy":15, "Layec":21}
```
a. Écrivez une fonction qui prend en entrée un tel dictionnaire et renvoie le
nombre total de ventes dans la société.
b. Écrivez une fonction qui prend en entrée un tel dictionnaire et renvoie le
nom du vendeur ayant réalisé le plus de ventes. Si plusieurs vendeurs sont
_ex-aequo_ sur ce critère, la fonction devra retourner le nom de l'un d'entre
eux.

4. Écrivez une fonction qui prend en entrée une chaîne de caractères comprenant,
sur chaque ligne, trois champs séparés par des caractères `';'`{.haskell} (un
    numéro d'étudiant, un nom et un prénom) et retourne un dictionnaire dont les
    clés sont les numéros d'étudiants lus et les valeurs sont, pour chaque
    numéro d'étudiant, une chaîne correspondant à la concaténation des prénom et
    nom de la personne. On pourra tester la fonction avec la chaîne suivante :
```python
chaine_etudiants = """213615200;BESNIER;JEAN
213565488;DUPOND;MARC
214665555;DURAND;JULIE"""
```

5. Écrivez une fonction qui prend en entrée un dictionnaire associant à un nom
une liste de notes et qui retourne la liste des noms des personnes qui ont la
moyenne la plus élevée (s'il y a des _ex-aequo_, cette liste contiendra
plusieurs éléments, sinon, elle n'en contiendra qu'un) et la moyenne
correspondante.
On pourra utiliser le dictionnaire suivant pour tester la fonction ainsi
écrite :
```python
notes = {"Tom": [8, 10, 12], "Mila": [10, 9], "Alex": [], "Lina": [12, 10, 8]}
```
