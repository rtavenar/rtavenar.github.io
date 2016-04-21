# MongoDB : CC2

Pour cet examen de contrôle continu, tous les documents sont autorisés et l'accès à internet n'est pas interdit à l'exception stricte des moyens de discussion de type e-mails, messagerie instantanée, etc. Toute contrevenance à cette règle simple entraînera la note de 0 sans prise en compte d'aucune excuse que ce soit.
Les questions de cet examen sont indépendantes et ne sont pas triées par ordre de difficulté, n'hésitez pas à commencer par celles qui vous semblent les plus accessibles.
Au besoin, vous créerez les structures d'index nécessaires au bon fonctionnement de vos requêtes et reporterez dans votre document-réponse les commandes MongoDB utilisées pour cela.

## Éléments utiles

Durant cet examen de contrôle continu, vous pourriez avoir besoin des pages d'aide suivantes :

* <https://docs.mongodb.org/manual/reference/operator/aggregation/substr/>
* <https://docs.mongodb.org/manual/reference/operator/aggregation-arithmetic/>


De plus, il sera utile de savoir que lorsque l'on écrit dans un client MongoDB la commande suivante :
```
d = new Date("2012/03/12 21:03Z")
```
le `"Z"` terminal signifie que la date est spécifiée dans le fuseau horaire de l'utilisateur et non pas en heure UTC (vous pouvez tester les deux versions avec et sans le `"Z"` final pour vous en convaincre : vous devriez observer un décalage d'une heure à cette période de l'année).

## Import des données

1.	Importez, dans une première base `tv`, les collections contenues dans les fichiers `channels.json` et `tnt.json` disponibles sur CURSUS.

2.	Importez ensuite, dans une seconde base elec, la collection contenue dans le fichier `instal_elec_bzh.json` disponible sur CURSUS.

**Prenez le temps d'observer la structure des documents de chacune de ces collections et notamment la hiérarchie qui peut exister entre les différents éléments au sein d'un document.**

## La base `tv`

3.	Proposez une commande qui permette :

	i.	si la chaîne `"L'Equipe 21"` existe dans la collection channels, de lui ajouter l'attribut `num` ayant pour valeur `21` ;
	ii.	si elle n'existe pas, de la créer en spécifiant en plus de l'attribut `num` son `channel_id` : `"C4132.telerama.fr"`.
 
4.	Dans la collection `channels`, ajoutez à tous les documents ne disposant pas de l'attribut `num`, un attribut `num` associé à la valeur `-1`.

5.	Affichez l'ensemble des programmes TV pour lesquels le nom de `Laurent Weil` apparaît dans la description.
 
6.	Affichez le nombre total de catégories de programme TV différentes existant dans la base.

7.	Affichez, pour chaque chaîne TV, le nombre de ses programmes pour lesquels un sous-titre est renseigné.

8.	Affichez les titres des programmes censés être en cours de diffusion le 18 Avril 2016 à 17h.

9.	Affichez les titres des programmes diffusés dans leur intégralité le 18 Avril 2016 (c'est-à-dire commençant le 18 avril et se terminant le même jour).

10.	Affichez, pour chaque catégorie, le nombre de programmes qui y sont associés. Vous ne retiendrez que les catégories correspondant à au moins 50 programmes et trierez les résultats par nombre de programmes décroissants.

11.	Affichez le minimum et le maximum du nombre de catégories par programme.

12.	Affichez, pour chaque chaîne et chaque jour, le nombre de programmes stockés dans la base. Vous trierez les résultats par date croissante.

13.	Affichez, pour chaque lettre, le nombre de programmes dont le titre commence par cette lettre.

## La base `elec`

14.	Affichez le code INSEE des installations électriques de la base situées à moins de 50 kilomètres de Rennes.

15.	Affichez la puissance totale (c'est-à-dire la somme de la puissance de toutes les installations) des installations solaires répertoriées en Ille-et-Vilaine (code INSEE débutant par 35).

16.	Affichez la puissance totale (éolien, géothermie, hydraulique et solaire mélangés) des installations répertoriées dans la base.

17.	Affichez le nombre d'installations par commune, en ne conservant que les communes disposant de (strictement) plus d'une installation.


