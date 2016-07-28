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
