---
title: Ce blog
created: 2021-12-27
updated: 2021-12-27
---

J'inaugure ce blog avec un tout premier projet : lui-même !

Depuis un moment maintenant, j'ai envie d'écrire et partager mes expériences à qui voudra bien lire mes billets. 
Ce blog s'articule autour d'un thème principal qui est **le métier de développeur (à travers mon prisme)** et est découpé en trois rubriques : 
- [Technos](/technos), qui concernera des sujets purement techniques ;
- [Idées](/idees), qui traitera d'idées et projets que j'ai ou aimerais réaliser ;
- [Divers](/divers), qui abordera un aspect plus philosophique.

## Choix technique

Mes contraintes étaient les suivantes : un site statique, hébergeable partout, où je peux rédiger mon contenu en Markdown et personnalisable. Sachant que j'aime beaucoup explorer des technologies que je n'ai pas ou peu utilisées, l'occasion était trop belle pour ne pas passer par Deno et Aleph.js.

- [Deno](/technos/articles/deno), un environnement d'exécution JavaScript et TypeScript ;
- [React](https://fr.reactjs.org/) ;
- [Aleph.js](https://alephjs.org/), un framework React universel (pensez Next.js) pour Deno ;
- [Docker](https://www.docker.com/) ;
- [Windi CSS](https://windicss.org/)</a>, un framework CSS bâti sur [Tailwind CSS](https://tailwindcss.com/).

## 1ère mouture

Après avoir passé environ une vingtaine d'heures à configurer l'application (image Docker pour Deno et Aleph.js), gérer des bugs (Aleph.js est *en version alpha*, pas censée être utilisée en production), lire les documentations de Deno et Aleph.js pour personnaliser le projet (les plugins Markdown et Windi CSS d'Aleph.js *ne sont pas personnalisables*, j'ai dû récupérer leur code pour le transformer à ma guise) et effectuer une recherche graphique (les couleurs, la disposition, le logo, les illustrations) j'ai enfin pu commencer à rédiger du contenu. 

N'étant pas tout-à-fait satisfait du rendu final, je le ferai évoluer au gré de mes envies !

## Des soucis de déploiement

Ce site est hébergé sur GitHub Pages. J'ai eu quelques surprises : si on passe par le domaine de GitHub pour accéder à son site, le projet est stocké dans un dossier (le nom de votre projet GitHub) et non à la racine. Aleph.js permet de définir la base du chemin, donc c'était facile à contourner. Mais en navigant sur le site, le JS n'était pas chargé. Dans l'incompréhension totale, je pensais que c'était un souci venant d'Aleph.js qui ne remplaçait pas correctement les liens aux différentes ressources ; j'ai donc réservé un nom de domaine à la place. Et là : même constat. Le JS ne se charge toujours pas alors que...

> Chez moi, ça marche.

Après plusieurs recherches, je suis tombé sur cet [article](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) qui explique que Jekyll ignore les fichiers commençant par un underscore (_) et qu'il fallait ajouter un fichier `.nojekyll` à la racine du dossier ciblé par Pages.

---

Le code est [disponible ici](https://github.com/Laegel/blog).
