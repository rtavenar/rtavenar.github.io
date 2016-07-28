# Les chaînes de caractères

Nous nous intéressons maintenant à un autre type de données particulier du langage Python : les chaînes de caractères (type `str`{.python}).
Pour créer une chaîne de caractères, il suffit d'utiliser des guillemets, simples ou doubles (les deux sont équivalents) :
```python
s1 = "abc"
s2 = 'bde'
```

Comme pour les listes (et peut-être même plus encore), il est fortement conseillé de se reporter à l'aide en ligne dédiée lorsque vous avez des doutes sur la manipulation de chaînes de caractères :
<https://docs.python.org/3/library/stdtypes.html#string-methods>

## Conversion d'une chaîne en nombre

Si une chaîne de caractères représente une valeur numérique (comme la chaîne `'10.2'`{.python} par exemple), on peut la transformer en un entier ou un nombre à virgule, afin de l'utiliser ensuite pour des opérations arithmétiques :
```python
s = '10.2'
f = float(s)
print(f)
# [Sortie] 10.2
print(f == s)
# [Sortie] False
s = '10'
i = int(s)
print(i)
# [Sortie] 10
print(i == s)
# [Sortie] False
```

## Analogie avec les listes

Les chaînes de caractères se manipulent en partie comme des listes.
On peut ainsi obtenir la taille d'une chaîne de caractères à l'aide de la fonction `len`{.python}, ou accéder à la $i$-ème lettre d'une chaîne de caractères avec la notation `s[i]`{.python}.
Comme pour les listes, il est possible d'indicer une chaîne de caractères en partant de la fin, en utilisant des indices négatifs :
```python
s = "abcdef"
print(s[0])
# [Sortie] a
print(s[-1])
# [Sortie] f
```

De même, on peut sélectionner des sous-parties de chaînes de caractères à partir des indices de début et de fin de la sélection. Comme pour les listes, l'indice de fin correspond au premier élément exclu de la sélection :
```python
s = "abcdef"
print(s[2:4])
# [Sortie] cd
```

Comme pour les listes, on peut concaténer deux chaînes de caractères à l'aide de l'opérateur `+`{.python} ou répéter une chaîne de caractères avec l'opérateur `*`{.python} :
```python
s = "ab" + ('cde' * 3)
print(s)
# [Sortie] abcdecdecde
```

On peut également tester la présence d'une sous-chaîne de caractères dans une chaîne avec le mot-clé `in`{.python} :
```python
s = "abcde"
print("a" in s)
# [Sortie] True
print("bcd" in s)
# [Sortie] True
print("bCd" in s)
# [Sortie] False
```

**Attention.**
Toutefois, l'analogie entre listes et chaînes de caractères est loin d'être parfaite.
Par exemple, on peut accéder au $i$-ème élément d'une liste en lecture, mais pas en écriture.
Si `s`{.python} est une chaîne de caractères, on ne peut pas exécuter `s[2] = 'c'`{.python} par exemple.

## Principales méthodes de la classe `str`

La liste de méthodes suivante n'est pas exhaustive, il est conseillé de consulter l'aide en ligne de Python pour plus d'informations.

* `ch.count(sub)`{.python}: Nombre d'occurrences de `sub`{.python} dans `ch`{.python}
* `ch.endswith(suffix)`{.python}: `True`{.python} si `ch`{.python} se termine par `suffix`{.python}
* `ch.startswith(prefix)`{.python}: `True`{.python} si `ch`{.python} commence par `suffix`{.python}
* `ch.find(sub)`{.python}: Indice du début de la première occurrence de `sub`{.python} dans `ch`{.python}
* `ch.rfind(sub)`{.python}: Indice du début de la dernière occurrence de `sub`{.python} dans `ch`{.python}
* `ch.islower()`{.python}: `True`{.python} si `ch`{.python} est constituée uniquement de caractères minuscules
* `ch.isupper()`{.python}: `True`{.python} si `ch`{.python} est constituée uniquement de caractères majuscules
* `ch.isnumeric()`{.python}: `True`{.python} si `ch`{.python} est constituée uniquement de chiffres
* `ch.lower()`{.python}: Version minuscule de `ch`{.python}
* `ch.upper()`{.python}: Version majuscule de `ch`{.python}
* `ch.replace(old, new)`{.python}: Copie de `ch`{.python} dans laquelle la _première_ occurrence de `old`{.python} a été remplacée par `new`{.python}
* `ch.split(sep=None)`{.python}: Liste contenant des morceaux de `ch`{.python} découpée à chaque occurrence de `sep`{.python} (n'importe quel espace par défaut)
* `ch.strip()`{.python}: Version "nettoyée" de `ch`{.python} dans laquelle on a enlevé tous les espaces en début et en fin de chaîne
