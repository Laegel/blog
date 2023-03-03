---
title: Deno
created: 2021-12-27
updated: 2021-12-27
image: deno.svg
image_width: 200
---

Apparu en 2018, vous en avez probablement déjà entendu parler sans réellement vous y intéresser.

Deno (prononcez "Dino" avec un "i" long, non pas "Déno") a été conçu et lancé par [Ryan Dahl](https://tinyclouds.org/) et est [développé par une équipe](https://github.com/denoland) et sa communauté grandissante. Décrit brièvement, c'est un environnement d'exécution pour JavaScript (JS) et TypeScript (TS) développé en [Rust](https://www.rust-lang.org/fr) qui utilise [Speedy Web Compiler](https://github.com/swc-project/swc) pour compiler le code JS/TS à fournir à [V8](https://v8.dev/).

L'objectif en créant Deno, dont le nom est l'inversion des syllabes de Node(.js), était de palier à plusieurs défauts de conception de Node.js.

### Un environnement plus sûr (parce que rien n'est inviolable)

Il est nécessaire d'utiliser des indicateurs de ligne de commande pour [autoriser Deno à accéder à certaines fonctionalités du système d'exploitation (OS)](https://deno.land/manual@v1.17.1/getting_started/permissions).
Node.js et les node_modules sont loin d'être des modèles en matière de sécurité ; les rapports fréquents concernant des failles de sécurité émanant de paquets hébergés par NPM (que vous téléchargez quotidiennement) le montrent.

```sh
# Audit d'un package.json pas tout-à-fait à jour
> yarn audit
...
81 vulnerabilities found - Packages audited: 2956
Severity: 10 Low | 37 Moderate | 31 High | 3 Critical # Oups !
```

### Une interface de programmation plus intuitive

L'API de Deno utilise des objets `Promise` plutôt que des fonctions de rappel, beaucoup plus raccord avec du JS/TS moderne. 

Deno :
```ts
const textPromise = Deno.readTextFile("./data.txt");

textPromise.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
```

Node.js (version initiale) :
```js
const fs = require("fs");
fs.readFile("./data.txt", "utf8", (error, data) => {
  if (error) {
    return console.log(error);
  }
  console.log(data);
});
```

Node.js (version promesses) :
```js
const fs = require("fs").promises;

const textPromise = fs.readFile("./data.txt", "utf8");

textPromise.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
```

### Les dépendances font partie intégrante du projet

Deno n'utilise pas de gestionnaire de paquets mais télécharge directement les dépendances que l'on renseigne dans le code via un module `deps.ts` (ou `deps_dev.ts` pour les paquets de développement uniquement). 

De plus, Deno utilise un système de résolution de module qui nous permet de personnaliser les imports, [import-maps](https://deno.land/manual/linking_to_external_code/import_maps).

Sachant que Deno n'utilise que des modules ECMAScript (ESM), vous ne pourrez pas utiliser des paquets npm aux formats d'import en CommonJS/UMD sans les [convertir au préalable](https://esm.sh/).

### TypeScript (TS) et JSX/TSX sont exécutés en toute transparence

Bien que toujours transpilé avant d'être compilé puis exécuté, TS peut désormais être utilisé sans configurer quoi que ce soit en supplément. 

### Et plein d'autres bonnes choses !

Deno peut compiler une application en un fichier exécutable en compilation multi-plateformes.

Il intègre son propre système de tests, de formattage, d'empaquetage, d'analyse statique.

---

Deno est encore jeune mais est déjà stable et utilisable en production, à condition de se renseigner sur la sensibilité des fonctionnalités concernées. Le but de Deno n'est pas de remplacer Node.js, inutile donc de vous imposer des migrations de projets Node.js vers Deno si ceux-ci fonctionnent parfaitement.

Pour ma part, le runtime me semble apporter un réél plus au niveau de l'expérience développeur, il se peut que je m'en serve davantage à l'avenir !
