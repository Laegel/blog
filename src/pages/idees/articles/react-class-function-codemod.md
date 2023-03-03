---
title: "React: Class to Functional"
created: 2022-04-02
updated: 2022-04-02
---

Voici [ma toute première extension VS Code](https://marketplace.visualstudio.com/items?itemName=Laegel.react-class-to-functional) : un codemod qui transforme un composant React avec la syntaxe classe vers la syntaxe fonctionnelle.

## Pour quoi faire ? Les classes, c'est cool.

Il y a de nombreux inconvénients à utiliser React avec la syntaxe classe :
- il faut plus de code pour un résultat similaire (verbosité) ;
- l'utilisation des classes et `this` n'est pas intuitive pour tout le monde ;
- [l'héritage est déconseillé au profit de la composition](https://fr.reactjs.org/docs/composition-vs-inheritance.html) ;
- le succès des hooks est tel qu'il est désormais beaucoup plus difficile de trouver des tutoriels pour développer avec des classes (si vous recrutez des juniors, ayez ça en tête).

Personnellement, j'ai tendance à favoriser le fonctionnel en JavaScript/TypeScript, plus cohérent avec la nature du langage que la déclaration de classes (même si tout est objet mais c'est une autre histoire). Sachant que j'ai appris [React avec ReScript](https://rescript-lang.org/docs/react/latest/introduction), la syntaxe fonctionnelle est pour moi beaucoup plus naturelle.

## Comment ça marche ?

Dans cette extension se trouve un script qui va analyser du code en détectant les déclarations de composants React sous forme de classe, littéralement `class MyComponent extends React.Component`. 

Pour transformer un composant-classe en composant-fonction, les étapes suivantes sont effectuées :

- la méthode `render` devient le composant-fonction ;
- les méthodes `componentDidMount`, `componentDidUpdate` et `componentWillUnmount` sont transformées en appels à `useEffect` ;
- les appels `React.createRef` sont transformés en appels `useRef` ;
- la propriété `state` est découpée en de multiples appels à `useState` ;
- les `props` sont récupérées et utilisées en tant qu'argument de la fonction ;
- les méthodes sont transformées en de simples fonctions internes ;
- les propriétés sont transformées en des appels à `useRef` ;
- les mots-clés `this` sont supprimés ;
- l'interface de l'état du composant (si elle existe) est supprimée ;
- l'import de React est adapté en conséquence.

Installez l'extension, ouvrez un fichier qui contient des classes et exécutez la commande `react-class-to-functional.transform` depuis la palette de VS Code.

---

Si ça vous plaît, laissez une étoile sur le repo ! Je compte faire évoluer cette extension pour plus de possibilités et une meilleure ergonomie. N'hésitez pas à remonter les erreurs en créant des issues sur GitHub. 

Le code est [disponible ici](https://github.com/Laegel/react-class-to-function).
