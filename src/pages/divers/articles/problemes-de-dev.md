---
title: "Problèmes de dév"
created: 2023-02-12
updated: 2023-02-12
---

## Constat

On voit souvent passer des opinions tranchées affirmant qu’un développeur doit savoir écrire du code propre afin de le rendre compréhensible et lisible donc facile à maintenir. D’un autre côté, certains développeurs se préoccupent assez peu des moyens mis en oeuvre, tant que la finalité est atteinte. C’est cependant sans compter toutes les contraintes additionnelles qui vont se greffer à l’idée de base et qui vont venir définir le projet.

Selon moi, la réussite d’une application (et donc potentiellement du projet) est plutôt un subtile mélange entre la rigueur demandée par la rédaction d’un code propre et les fonctionnalités qu’il fournit. 

Malheureusement, j’ai tendance à pencher davantage du côté “discipline et propreté du code” que celui de “atteinte de l’objectif final” et vais donc mettre plus de temps pour fournir une unité logicielle qui remplit la fonction demandée. C’est probablement la plus grande source de frustration que je puisse avoir au quotidien : l’équilibre me permet d’effectuer le travail en temps voulu mais ne satisfait pas mes besoins d’optimiser l’intelligibilité et l’organisation code.

## Des solutions ?

Pour palier à ce problème, il est parfois possible de prendre du temps pour refactoriser des portions du code qui ont été bâclées. C’est une tâche relativement ingrate qui ne séduit pas grand monde : du responsable du projet qui est satisfait parce que “ça marche” et qu’il faut convaincre au développeur qui manque de motivation (je m’inclus dedans !), c’est difficilement réaliste. Une application, c’est comme un écosystème : c’est fragile et la moindre modification localisée peut avoir des conséquences désastreuses sur l’ensemble. Il y a donc des stratégies à mettre en place pour compenser toutes ces difficultés… sans recette miracle. 

Bon. C’est pénible et ça me laisse franchement sur ma faim. J’adore mon activité de développeur et j’ai déjà des idées pour améliorer cet état.

## La méta-programmation

Il existe des outils pour analyser le code et le traiter comme de l’information. Oui oui, on peut utiliser du code pour administrer du code. 🤯
J’ai déjà développé des programmes qui permettent de transformer du code ([django-to-fastapi](https://github.com/Laegel/django-to-fastapi), [react-class-to-function](https://github.com/Laegel/react-class-to-function)) et il est possible de rendre ça plus générique pour supporter plus de langages et effectuer plus de tâches (génération, modification, traduction de code). Le souci ici, c’est que c’est une une tâche pénible et très chronophage : la décomposition du code permet d’avoir un niveau de granularité très faible, donc on a toutes les informations nécessaires pour faire ce que l’on veut mais le temps passé à l’analyse et la traduction est long et risque d’aboutir sur un résultat pas tout-à-fait satisfaisant. Le moindre cas imprévu dans votre outil risque de le rendre inutilisable par d’autres développeurs.
Sur mon temps libre, je réfléchis et travaille à un système pour fournir une base permettant de manipuler du code sans avoir à y passer trop de temps (décomposition et extraction des informations puis modifications). Le projet avance mais je pense qu’il lui manque quelque chose : une manière d’extraire l’intention derrière une portion de code. Il est plus facile et pertinent de traduire une *intention* (décrire une fonction avec son algorithme pour déduire sa finalité) plutôt qu’*un ensemble d’unités de code* (décomposer la fonction avec ses propriétés, toutes ses étapes, les variables impliquées). Je n’ai pas encore d’idées sur la manière de procéder, j’en reparlerai (je l’espère) prochainement.
