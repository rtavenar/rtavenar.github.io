# Lecture et écriture de fichiers textuels

Dans ce chapitre, nous nous intéressons à la lecture/écriture de fichiers textuels par un programme Python.
Un premier élément qu'il est nécessaire de maîtriser pour lire ou écrire des fichiers textuels est la notion d'encodage.
Il faut savoir qu'il existe plusieurs façons d'encoder un texte.
Nous nous focaliserons ici sur les deux encodages que vous êtes les plus susceptibles de rencontrer (mais sachez qu'il en existe bien d'autres) :

* l'encodage Unicode 8 bits (UTF-8), dont le code en python est `"utf-8"`{.haskell} ;
* l'encodage Latin-1 (ISO-8859-1) dont le code en python est `"iso-8859-1"`{.haskell}.

La principale différence entre ces deux encodage réside dans leur façon de coder les accents.
Ainsi, si le texte que vous lisez/écrivez ne contient aucun accent ou caractère spécial, il est probable que la question de l'encodage ne soit pas problématique dans votre cas.
Au contraire, s'il est possible que vous utilisiez de tels caractères, il faudra bien faire attention à l'encodage utilisé, que vous spécifierez à l'ouverture du fichier.
Si votre programme doit lire un fichier, il faudra donc vous assurer de l'encodage associé à ce fichier (en l'ouvrant par exemple avec un éditeur de texte qui soit suffisamment avancé pour vous fournir cette information).
Si vous écrivez un programme qui écrit un fichier, il faudra vous poser la question de l'utilisation future qui sera faite de ce fichier : s'il est amené à être ouvert par un autre utilisateur, il serait pertinent de vous demander quel encodage sera le moins problématique pour cet utilisateur, par exemple.

Si vous n'avez pas de contrainte extérieure pour ce qui est de l'encodage, vous utiliserez l'encodage UTF-8 par défaut.

## Lecture de fichiers textuels

Ce que nous apellons lecture de fichiers textuels en Python consiste à copier le contenu d'un fichier dans une (ou plusieurs) chaîne(s) de caractères.
Cela implique deux étapes en Python :

1. ouvrir le fichier en lecture ;
2. parcourir le contenu du fichier.

La première étape d'ouverture du fichier en lecture est commune à tous les types de fichiers textuels.
En supposant que le nom du fichier à ouvrir soit stocké sous forme de chaîne de caractères dans la variable `nom_fichier`{.python}, le code suivant ouvre un fichier en lecture avec l'encodage UTF-8 et stocke dans la variable `fp`{.python} un pointeur sur l'endroit où nous sommes rendus dans notre lecture du fichier (pour l'instant, le début du fichier) :
```python
fp = open(nom_fichier, "r", encoding="utf-8")
```

Le second argument (`"r"`{.haskell}) indique que le fichier doit être ouvert en mode _read_, donc en lecture.

### Fichiers textuels génériques

Une fois le fichier ouvert en lecture, on peut le lire ligne par ligne à l'aide de la boucle suivante :
```python
fp = open(nom_fichier, "r", encoding="utf-8")
for ligne in fp.readlines():
    print(ligne)
```
Ici, la variable `ligne`{.python}, de type chaîne de caractères, contiendra successivement le texte de chacune des lignes du fichier considéré.

### Fichiers _Comma-Separated Values_ (CSV)

Les fichiers _Comma-Separated Values_ (CSV) permettent de stocker des données organisées sous la forme de tableaux dans des fichiers textuels.
À l'origine, ces fichiers étaient organisées par ligne et au sein de chaque ligne les cellules du tableau (correspondant aux différentes colonnes) étaient séparées par des virgules (d'où le nom de ce type de fichiers).
Aujourd'hui, la définition de ce format ([lien](https://tools.ietf.org/html/rfc4180)) est plus générale que cela et différents délimiteurs sont acceptés.
Pour manipuler ces fichiers, il existe en Python un module dédié, appelé `csv`{.python}.
Ce module contient notamment une fonction `reader`{.python} permettant de simplifier la lecture de fichiers CSV.
La syntaxe d'utilisation de cette fonction est la suivante (vous remarquerez la présence de l'attribut `delimiter`{.python}) :
```python
import csv

nom_fichier = "..." # À remplacer par le chemin vers le fichier :)

# Contenu supposé du fichier :
# 1;2;3
# a;b

fp = open(nom_fichier, "r", encoding="utf-8")
for ligne in csv.reader(fp, delimiter=";"):
    for cellule in ligne:
        print(cellule)
    print("Fin de ligne")
# [Sortie] 1
# [Sortie] 2
# [Sortie] 3
# [Sortie] Fin de ligne
# [Sortie] a
# [Sortie] b
# [Sortie] Fin de ligne
```
On remarque ici que, contrairement au cas de fichiers textuels génériques, la variable de boucle `ligne`{.python} n'est plus une chaîne de caractères mais une liste de chaînes de caractères.
Les éléments de cette liste sont les cellules du tableau représenté par le fichier CSV.

### Fichiers _JavaScript Object Notation_ (JSON)

Les fichiers _JavaScript Object Notation_ (JSON) permettent de stocker des données structurées (par exemple avec une organisation hiérarchique). Un document JSON s'apparente à un dictionnaire en Python (à la nuance près que les clés d'un document JSON sont forcément des chaînes de caractères).
Voici un exemple de document JSON :
```json
{
    "num_etudiant": "21300000",
    "notes": [12, 5, 14],
    "date_de_naissance": {
        "jour": 1,
        "mois": 1,
        "annee": 1995
    }
}
```

En Python, pour lire de tels fichiers, on dispose du module `json` qui contient une fonction `load` :
```python
import json

nom_fichier = "..." # À remplacer par le chemin vers le fichier :)

# Contenu supposé du fichier :
# {
#    "num_etudiant": "21300000",
#    "notes": [12, 5, 14],
#    "date_de_naissance": {
#        "jour": 1,
#        "mois": 1,
#        "annee": 1995
#    }
# }

fp = open(nom_fichier, "r", encoding="utf-8")
d = json.load(fp)
print(d)
# [Sortie] {"notes": [12, 5, 14], "date_de_naissance":
# [Suite ]  {"jour": 1, "annee": 1995, "mois": 1},
# [Suite ]  "num_etudiant": "21300000"}
```

Il est à noter qu'un fichier JSON peut également contenir une liste de dictionnaires, comme dans l'exemple suivant :
```json
[{
    "num_etudiant": "21300000",
    "notes": [12, 5, 14],
    "date_de_naissance": {
        "jour": 1,
        "mois": 1,
        "annee": 1995
    }
},
{
    "num_etudiant": "21300001",
    "notes": [14],
    "date_de_naissance": {
        "jour": 1,
        "mois": 6,
        "annee": 1989
    }
}]
```
Dans ce cas, `json.load` retournera une liste de dictionnaires au lieu d'un dictionnaire, bien évidemment.

Enfin, si l'on a stocké dans une variable une chaîne de caractères dont le contenu correspond à un document JSON, on peut également la transformer en dictionnaire (ou en liste de dictionnaires) à l'aide de la fonction `json.loads` (attention au "s" final) :
```python
ch = '{"num_etudiant": "21300000",  "notes": [12, 5, 14]}'
d = json.loads(ch)  # loads : load (from) string
print(d)
# [Sortie] {"notes": [12, 5, 14], "num_etudiant": "21300000"}
```

## Écriture de fichiers textuels

Ce que nous apellons écriture de fichiers textuels en Python consiste à copier le contenu d'une (ou plusieurs) chaîne(s) de caractères dans un fichier.
Cela implique deux étapes en Python :

1. ouvrir le fichier en écriture ;
2. ajouter du contenu dans le fichier.

La première étape d'ouverture du fichier en écriture est commune à tous les types de fichiers textuels.
En supposant que le nom du fichier à ouvrir est stocké sous forme de chaîne de caractères dans la variable `nom_fichier`{.python}, le code suivant ouvre un fichier en écriture avec l'encodage UTF-8 et stocke dans la variable `fp`{.python} un pointeur sur l'endroit où nous sommes rendus dans notre écriture du fichier (pour l'instant, le début du fichier) :
```python
fp = open(nom_fichier, "w", encoding="utf-8", newline="\n")
```

Le second argument (`"w"`{.haskell}) indique que le fichier doit être ouvert en mode _write_, donc en écriture.

Si le fichier en question existait déjà, son contenu est tout d'abord écrasé et on repart d'un fichier vide.
Si l'on souhaite au contraire ajouter du texte à la fin d'un fichier existant, on utilisera le mode _append_, symbolisé par la lettre `"a"`{.haskell} :
```python
fp = open(nom_fichier, "a", encoding="utf-8", newline="\n")
```

### Fichiers textuels génériques

Pour ajouter du contenu à un fichier pointé par la variable `fp`{.python}, il suffit ensuite d'utiliser la méthode `write`{.python} :
```python
fp.write("La vie est belle\n")
```
Notez que, contrairement à la fonction `print`{.python} à laquelle vous êtes habitué, la méthode `write`{.python} ne rajoute pas de caractère de fin de ligne après la chaîne de caractères passée en argument, il faut donc inclure ce caractère `"\n"`{.haskell} à la fin de la chaîne de caractères passée en argument, si vous souhaitez inclure un retour à la ligne.

### Fichiers CSV

Le module `csv`{.python} déjà cité plus haut contient également une fonction `writer`{.python} permettant de simplifier l'écriture de fichiers CSV.
La syntaxe d'utilisation de cette fonction est la suivante :
```python
import csv

nom_fichier = "..." # À remplacer par le chemin vers le fichier :)

fp = open(nom_fichier, "w", encoding="utf-8", newline="\n")
csvfp = csv.writer(fp, delimiter=";"):
csvfp.writerow([1, 5, 7])
csvfp.writerow([2, 3])
# Après cela, le fichier contiendra les lignes suivantes :
# 1;5;7
# 2;3
```
La méthode `writerow`{.python} prend donc une liste en argument et écrit dans le fichier les éléments de cette liste, séparés par le délimiteur `";"`{.haskell} spécifié lors de l'appel à la fonction `writer`{.python}.
Le retour à la ligne est écrit directement par la méthode `writerow`{.python}, vous n'avez pas à vous en occuper.

## Manipulation de fichiers en Python avec le module `os`

Lorsque l'on lit ou écrit des fichiers, il est fréquent de vouloir répéter la même opération sur plusieurs fichiers, par exemple sur tous les fichiers avec l'extension `".txt"`{.haskell} d'un répertoire donné.
Pour ce faire, on peut utiliser en Python le module `os`{.python} qui propose un certain nombre de fonctions standard de manipulation de fichiers.
On utilisera notamment la fonction `listdir`{.python} de ce module qui permet de lister l'ensemble des fichiers et sous-répertoires contenus dans un répertoire donné :
```python
import os

for nom_fichier in os.listdir("donnees"):
    print(nom_fichier)
```

La fonction `listdir`{.python} peut prendre indifféremment un chemin absolu ou relatif (dans notre exemple, il s'agit d'un chemin relatif qui pointe sur le sous-répertoire `"donnees"`{.haskell} contenu dans le répertoire de travail courant du programme).

Si vous exécutez le code ci-dessus et que votre répertoire `"donnees"`{.haskell} n'est pas vide, vous remarquerez que le nom du fichier stocké dans la variable `nom_fichier`{.python} ne contient pas le chemin vers ce fichier.
Or, si l'on souhaite ensuite ouvrir ce fichier (que ce soit en lecture ou en écriture), il faudra bien spécifier ce chemin.
Pour cela, on utilisera la syntaxe suivante :
```python
import os

repertoire = "donnees"
for nom_fichier in os.listdir(repertoire):
    nom_complet_fichier = os.path.join(repertoire, nom_fichier)
    print(nom_fichier)
    print(nom_complet_fichier)
    fp = open(nom_complet_fichier, "r", encoding="utf-8")
    # [...]
```
La fonction `path.join`{.python} du module `os`{.python} permet d'obtenir le chemin complet vers le fichier à partir du nom du répertoire dans lequel il se trouve et du nom du fichier isolé.
Il est préférable d'utiliser cette fonction plutôt que d'effectuer la concaténation des chaînes de caractères correspondantes car la forme des chemins complets dépend du système d'exploitation utilisé, ce que gère intelligemment `path.join`{.python}.

**Exercice 6.1**
Écrivez une fonction qui affiche, pour chaque fichier d'extension `".txt"`{.haskell} d'un répertoire passé en argument, le nom du fichier ainsi que son nombre de lignes.

**Exercice 6.2**
Écrivez une fonction qui retourne le nombre de fichiers présents dans un répertoire dont le nom est passé en argument.
Vous pourrez vous aider pour cela de la documentation du sous-module `path`{.python} du module `os`{.python} ([lien](https://docs.python.org/3.5/library/os.path.html)).
