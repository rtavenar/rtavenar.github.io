---
title : Polycopié pour le cours de Python
subtitle : Solution des exercices
author : Romain Tavenard
---

**Exercice 2.1**

```python
import math

def aire_equi(l):
    base = l
    hauteur = l * math.sin(math.pi / 3)
    return base * hauteur / 2

print(aire_equi(1.))
# [Sortie] 0.4330127018922193
```

**Exercice 3.1**

```python
def argmax(liste):
    i_max = None
    # On initialise elem_max à une valeur
    # qui n'est clairement pas le max
    elem_max = liste[0] - 1  
    for i, elem in enumerate(liste):
        if elem > elem_max:
            i_max = i
            elem_max = elem
    return i_max

print(argmax([1, 6, 2, 4]))
# [Sortie] 1
```
