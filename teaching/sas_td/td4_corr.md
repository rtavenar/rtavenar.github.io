---
title : "TD 4"
language: fr
author: Aude Tavenard
rights: Creative Commons CC BY-NC-SA
---

1.	Importer les jeux de données `lab.txt` et `labsupp.txt`.

```SAS
PROC IMPORT OUT= lab
DATAFILE=  "/home/u49948743/SAS2021/lab.txt" DBMS=DLM REPLACE;
       DELIMITER=";";
       GETNAMES=YES;
       DATAROW=2;
RUN;
```

```SAS
PROC IMPORT OUT= labsupp
DATAFILE=  "/home/u49948743/SAS2021/labsupp.txt" DBMS=DLM REPLACE;
       DELIMITER=";";
       GETNAMES=YES;
       DATAROW=2;
RUN;
```

2.	Observer la structure ainsi que le contenu des jeux de données. A votre avis, à quoi correspond la variable `AVAL` ?

`AVAL` reporte la valeur de chaque paramètre.


3.	Trouver le patient qui est présent dans le jeu de données `lab` mais absent de `labsupp`.

```SAS
proc sort data=lab; by patient; run;
proc sort data=labsupp; by patient; run;
data one;
	merge lab(in=a) labsupp(in=b);
	by patient;
	if a and not b;
run;
```

4.	Après avoir observé la structure des jeux de données, fusionnez les de manière pertinente.

```SAS
data laball;
	set lab labsupp;
run;
```

5.	Créer la variable `AVALUNIT` qui réunit les deux colonnes `AVAL` et `UNIT`.

```SAS
data laball;
	set laball;
	avalunit=cat(aval," ",unit);
run;
```

6.	Faire un tableau croisé reportant les différents paramètres de laboratoire (`PARAM`) par groupe (`GROUP`) en incluant les statistiques descriptives : moyenne, écart type, minimum et maximum.

```SAS
proc tabulate data=laball;
	class param group;
	var aval;
	table param, group*aval*(mean std min max);
run;
```

7.	Faire des boîtes à moustache reportant pour chaque paramètre (`PARAM`) la distribution des valeurs par groupe (`GROUP`).


```SAS
proc sort data=laball; by group param; run;
proc boxplot data=laball;
	plot aval*param(group);
run;

/*OR*/
proc sgplot data=laball;
	vbox aval/category=param group=group;
run;
```
