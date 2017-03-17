---
title: "Requêtes de création, mise à jour et suppression"
subtitle: Corrigé de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Création de la base

1. Créez une nouvelle base `voitures` dans laquelle une collection `ventes` servira à tenir le compte des voitures à la vente dans un garage.

```javascript
> use voitures
> db.createCollection("ventes")
```

2. Insérez dans cette base les documents suivants :
```
{"modèle" : "C1", "quantité" : 15, "date_maj": new Date()}
{"modèle" : "Mégane", "quantité" : 2, "date_maj": new Date()}
{"modèle" : "C3", "quantité" : 15, "date_maj": new Date()}
{"modèle" : "Twingo", "quantité" : 2, "date_maj": new Date()}
{"modèle" : "Fiat 500", "quantité" : 0, "date_maj": new Date()}
```

```javascript
> db.ventes.insert([
{"modèle" : "C1", "quantité" : 15, "date_maj": new Date()},
{"modèle" : "Mégane", "quantité" : 2, "date_maj": new Date()},
{"modèle" : "C3", "quantité" : 15, "date_maj": new Date()},
{"modèle" : "Twingo", "quantité" : 2, "date_maj": new Date()},
{"modèle" : "Fiat 500", "quantité" : 0, "date_maj": new Date()}
])
```

# Mise à jour des données

3. Sachant que la plupart des recherches dans cette collection se feront par nom de modèle, mettez en place un index adapté.

```javascript
> db.ventes.createIndex({"modèle": 1})
```

4. Modifiez le document correspondant au modèle `"Mégane"`{.haskell} pour que le nom de modèle soit `"Mégane III"`{.haskell}, la `quantité` `5` et la nouvelle `"date_maj"`{.haskell} soit la date courante.

```javascript
> db.ventes.update(
{"modèle" : "Mégane"},
{"modèle" : "Mégane III", "quantité" : 5, "date_maj": new Date()}
)
```

5. Pour chaque modèle, ajoutez un attribut correspondant à la marque (Renault pour Mégane par exemple). Pour le cas de la Fiat 500, on se rend compte qu'alors il faudra modifier le nom du modèle pour qu'il ne contienne plus le nom de la marque.

```javascript
> db.ventes.update(
{"modèle" : {$in: ["C1", "C3"]}},
{$set: {"marque": "Citroën"}},
{multi: true}
)
> db.ventes.update(
{"modèle" : {$in: ["Mégane III", "Twingo"]}},
{$set: {"marque": "Renault"}},
{multi: true}
)
> db.ventes.update(
{"modèle" : "Fiat 500"},
{$set: {"marque": "Fiat", "modèle": "500"}},
{multi: true}
)
```

6. Ajoutez un attribut contenant le pays d'origine des voitures (France pour les voitures Renault et Citroën, Italie pour les Fiat). Prenez garde au fait qu'il peut exister plusieurs modèles pour une même marque.

```javascript
> db.ventes.update(
{"marque": {$in: ["Renault", "Citroën"]}},
{$set: {"pays": "France"}},
{multi: true}
)
> db.ventes.update(
{"marque": "Fiat"},
{$set: {"pays": "Italie"}},
{multi: true}
)
```

7. Suite à une vente, il faut décrémenter le compteur du nombre de C1 à la vente (et mettre à jour la `date_maj`). Proposez une requête pour le faire en utilisant [l'opérateur `$inc`](https://docs.mongodb.org/v3.0/reference/operator/update/inc/#up._S_inc)

```javascript
> db.ventes.update(
{"modèle": "C1"},
{
    $inc: {"quantité": -1},
    $set : {"date_maj" : new Date()}
}
)
```

8. Proposez une nouvelle requête pour s'assurer que le document correspondant au modèle Xsara, s'il existe, contienne bien pour marque Citroën. Si ce document n'existe pas, créer un document avec une `quantité` de `0` et une `date_maj` égale à la date courante. <https://docs.mongodb.org/v3.0/reference/operator/update/setOnInsert/>

```javascript
> db.ventes.update(
{"modèle": "Xsara"},
{
    $set: {"marque": "Citroën", "modèle": "Xsara", "pays": "France"},
    $setOnInsert: {"quantité": 0, "date_maj": new Date()}
},
{upsert: true})
```

# Suppression de la base

9. Supprimez l'ensemble des données de la collection, mais pas ses index. Vérifiez la présence des index après cette opération.

```javascript
> db.ventes.remove({})
> db.system.indexes.find()
```

10. Supprimez maintenant la collection en entier et voyez l'effet produit sur la liste des index de la base.

```javascript
> db.ventes.drop()
> db.system.indexes.find()
```

11. Pour finir, supprimez la base entière.

```javascript
> db.dropDatabase()
```
