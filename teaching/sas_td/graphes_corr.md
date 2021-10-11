---
title : "TD 3 : Graphes en SAS"
language: fr
author: Aude Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Graphe 1

1.	Faire un histogramme vertical cumulé de la répartition du type de cholesterol (`chol_status`) par groupe de poids (`weight_status`) en utilisant le jeu de données disponible dans la bibliothèque `SASHELP` et nommé `HEART`. Les pourcentages seront calculés en considérant le nombre de patients dans chaque groupe de poids comme dénominateur.
```SAS
ods output CrossTabFreqs=freq;
proc freq data=sashelp.heart;
table weight_status*chol_status;
run;
proc sgplot data=freq;
	vbar weight_status/response=rowpercent group=chol_status;
run;
```

2.	Modifier le label de l'axe y pour utiliser le label `'Proportion (%)'`.

```SAS
proc sgplot data=freq;
	vbar weight_status/response=rowpercent group=chol_status ;
	yaxis label='Proportion (%)';
run;
```

3.	Modifier le titre de la légende pour qu'il soit en français `'Type de cholesterol'`.

```SAS
proc sgplot data=freq;
	vbar weight_status/response=rowpercent group=chol_status ;
	yaxis label='Proportion (%)';
    keylegend /title='Type de cholesterol';
run;
```

# Graphe 2

1. Dans la bibliothèque `SASHELP`, nous utiliserons le jeu de données `HEART`. Avant de tracer le graphe, il faut dans un premier temps corriger les intitulés des variables `weight` et `height` qui ont été intervertis.

```SAS
data heart;
set sashelp.heart;
rename weight=height height=weight;
run;
```

2.	Tracer les points en considérant le poids `weight` en ordonnée et la taille `height` en abscisse.

```SAS
proc sgplot data=heart;
	scatter x=height y=weight;
run;
```

3.	Tracer une droite de régression donnant la tendance du poids en fonction de la taille en utilisant l'instruction `REG`.

```SAS
proc sgplot data=heart;
	scatter x=height y=weight;
	reg x=height y=weight;
run;
```

4.	Ajouter les unités aux labels de l'axe des abscisses et de l'axe des ordonnées.

```SAS
proc sgplot data=heart;
	scatter x=height y=weight;
	reg x=height y=weight;
    xaxis label='Height (cm)';
    yaxis label='Weight (kg)';
run;
```

5.	Supprimer la légende du graphique.

```SAS
proc sgplot data=heart noautolegend;
	scatter x=height y=weight;
	reg x=height y=weight;
    xaxis label='Height (cm)';
    yaxis label='Weight (kg)';
run;
```

6. Enregistrer le graphe obtenu sur votre disque.
```SAS
ods rtf file="/home/u49948743/SAS2021/graph.rtf";
proc sgplot data=heart noautolegend;
	scatter x=height y=weight;
	reg x=height y=weight;
    yaxis label='Height (cm)';
    xaxis label='Weight (kg)';
run;
ods rtf close;
```
