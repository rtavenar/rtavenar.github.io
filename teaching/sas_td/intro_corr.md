---
title : "TD 1 : Introduction au logiciel SAS"
language: fr
author: Aude Tavenard
rights: Creative Commons CC BY-NC-SA
---

1.	Créer un fichier sous Geany et l'enregistrer. Tout le code utilisé lors du
TD devra être enregistré dans cet éditeur. Les instructions SAS seront
exécutées dans SAS au fur et à mesure.

2.	Créer la bibliothèque `tp1` qui pointe sur une clé USB ou sur votre disque
réseau MASS.

```SAS
libname tp1 "/home/tavenard_r/Cours SAS/";
```

3.	Importer des données

a.	Importer les données disponibles dans le fichier `patients.csv` dans la
    bibliothèque `tp1` via le menu SAS.
    Enregistrer le programme créé par SAS pour faire l'import.

```SAS
PROC IMPORT OUT= tp1.patients
            DATAFILE= "/home/tavenard_r/Cours SAS/patients.csv"
            DBMS=CSV REPLACE;
     GETNAMES=YES;
     DATAROW=2;
RUN;
```

b.	Importer les données poids en utilisant le code SAS input suivant :

```SAS
data tp1.poids;
Input patid $ visite $ poids;
datalines;
1007-012 V2 .
1007-012 V3 80
1007-013 V1 82
1007-013 V2 83
1007-013 V3 84
1007-014 V1 60
1007-014 V2 61
1007-014 V3 .
1007-009 V2 72
1007-009 V3 70
1007-010 V1 60
1007-010 V2 60
1007-010 V3 58
1007-001 V2 75
1007-001 V3 73
1007-004 V1 76
1007-004 V2 78
1007-004 V3 79
1007-005 V1 92
1007-005 V2 90
1007-005 V3 92
1007-006 V1 68
1007-011 V1 72
1007-011 V2 71
1007-015 V1 70
1007-015 V2 70
1007-015 V3 69
1007-016 V1 62
1007-016 V2 61
1007-016 V3 62
1007-017 V1 49
1007-017 V2 48
1007-017 V3 48
1007-018 V1 56
1007-018 V2 .
1007-018 V3 56
1007-019 V1 76
1007-019 V2 .
1007-019 V3 76
1007-020 V1 78
1007-001 V1 76
1007-006 V2 66
1007-006 V3 69
1007-007 V1 60
1007-007 V2 58
1007-002 V1 56
1007-002 V2 54
1007-002 V3 50
1007-003 V1 82
1007-003 V2 80
1007-003 V3 79
1007-007 V3 57
1007-008 V1 87
1007-008 V2 89
1007-008 V3 90
1007-009 V1 72
1007-011 V3 72
1007-012 V1 78
1007-020 V2 79
1007-020 V3 80

;
run;
```

4.	Fusionner les fichiers patients et poids dans une table `donnees`
enregistrée dans la bibliothèque.

```SAS
Proc sort data=tp1.patients; by patid ; run ;
Proc sort data=tp1.poids; by patid ; run ;
Data tp1.donnees;
Merge tp1.patients tp1.poids ;
By patid ;
Run ;
```

5.	Créer les dates `datnais1` et `datnais2` en partant de la date de
naissance mais en utilisant les formats respectifs suivants :
  a.	`FRADFWDX.`
  b.	`MMYYS7.`

```SAS
Data tp1.donnees ;
Set tp1.donnees ;
Format datnais1 FRADFWDX. ;
Format datnais2 MMYYS7. ;
Datnais1=datenais ;
Datnais2= datenais;
Run ;
```

6.	Créer les variables suivantes en utilisant les données disponibles :

  a.	Variable `AGE` avec le label "Age (années)" et le format `best12.`
  b.	Variable `IMC` définie comme poids/taille^2 où le poids est exprimé en
  kg et la taille en m avec le label "IMC (kg/m2)" et le format `best12.`
  c.	Variable `IMC_CAT` avec le label "Catégorie IMC" et le format `$10.`
  contenant les catégories de l'IMC (<20, 20-25, >25)
  d.	Variable `NAISSY` avec le label "Année de naissance" et le format
  `best12.` contenant l'année de naissance

```SAS
Data tp1.donnees ;
Set tp1.donnees ;
Attrib
age format=best12. Label= "Age (années)"
imc format=best12. Label= "IMC (kg/m2)"
imc_cat format=$10. Label= "Catégorie IMC"
naissy format=best12. Label= "Année de naissance"
;
age=YEAR(TODAY())-YEAR(datenais) ;
imc=poids/((taille/100) **2);
naissy=year(datenais) ;
if imc<20 then imc_cat= "<20 kg/m2" ;
	else if imc>=20 or imc<=25 then imc_cat= "20-25" ;
else if imc>25 then imc_cat= ">25" ;
Run ;
```

7.	Créer les tables suivantes dans la bibliothèque `tp1` à partir du fichier
fusionné à l'étape 4 et modifié à l'étape 6:

  a.	JEUNES contenant les patients avec date de naissance après le 01/01/1999

```SAS
Data tp1.jeunes ;
Set tp1.donnees ;
WHERE datenais > "01JAN1999"d ;
Run ;
```

  b.	FILLES contenant toutes les filles


```Sas
Data tp1.filles;
Set tp1.donnees ;
WHERE sexe='F' ;
Run ;
```

8.	Créer une table à partir de la table `FILLES` contenant l'identifiant
`patid` et la date de naissance `datenais` sans répétition de l'identifiant
`patid`.

```SAS
Proc sort data=tp1.filles  nodukey out=filluni (keep=patid datnais);
by patid ;
run ;
```

9.	Exporter les données `tp1.jeunes` dans un fichier excel
(méthode de votre choix).

```SAS
Proc export data=tp1.jeunes
Outfile= "/home/tavenard_r/Cours SAS/jeunes.csv"
Dbms=DLM replace;
Delimiter= "09"x ;
Run ;
```