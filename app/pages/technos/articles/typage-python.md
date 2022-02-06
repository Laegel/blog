---
title: Introduction au typage dans Python
created: 2022-02-02
updated: 2022-02-02
series: Le typage dans Python
tags: python, dx
---

Python, le langage dont la popularité ne cesse de croître de par sa facilité d'apprentissage et d'utilisation, catalogué comme LA technologie à utiliser en Machine Learning est, comme beaucoup d'autres, un langage à typage dynamique. 
Le typage dynamique a ses avantages, c'est indéniable : ça permet de développer rapidement en mettant de côté l'inconvénient principal des langages statiques, à savoir (notamment) la déclaration explicite de type lors de la création d'une variable, la rigidité de la gestion des arguments dans les fonctions et j'en passe.

## Quand et pourquoi ?

Les propositions visant à théoriser puis introduire les annotations de type dans Python, les [PEP 483](https://www.python.org/dev/peps/pep-0483/) et [PEP 484](https://www.python.org/dev/peps/pep-0484/), ont été créées en 2014. Les propositions ont été étudiées et approuvées, permettant aux annotations de type de finalement faire leur apparition dans la version 3.5 des spécifications du langage.

L'introduction du système de typage dans Python avait pour but, je cite (en traduisant) :
> de simplifier l'analyse statique et la refactorisation, de potentiellement vérifier le typage à l'exécution du code et (dans certains contextes) de générer du code utilisant des informations de type.

-- [source](https://www.python.org/dev/peps/pep-0484/#rationale-and-goals)

Dans cet article, je vais surtout m'attarder sur l'analyse statique et la refactorisation, deux techniques exploitées par les dévs au quotidien. \
L'analyse statique, c'est tout ce qui nous permet de bénéficier d'informations sur l'utilisation de code. Vous voyez les infobulles de vos EDI, les vaguelettes lorsque vous avez mal orthographié une variable ? C'est grâce à de l'analyse statique qu'elles sont pertinentes. \
La refactorisation est un procédé qui vise à réduire la complexité du code, le rendre plus maintenable, plus efficace en fonction du besoin. Nous sommes amenés à refactoriser du code fréquemment et le typage sert de levier pour nous faciliter le travail.

A noter que d'autres propositions ([PEP 526](https://www.python.org/dev/peps/pep-0526/)) ont été ajoutées et d'autres le seront dans l'avenir afin d'enrichir la fonctionnalité de base.

## Comment ça fonctionne en pratique ?

### Exemples simples d'utilisation

Le besoin de spécifier un type peut apparaître à plusieurs endroits dans le code.

En déclarant une variable :

```py
name: str = "Je contiens une chaîne"
```

Sur les propriétés d'une structure de données :

```py
@dataclass
class Post:
    id: int
    title: str
    content: str
```

Sur les arguments et le retour d'une fonction :

```py
def multiply(arg1: int, arg2: int) -> int:
    return arg1 * arg2
```

### Typer, oui... mais pas n'importe comment

Dans les exemples précédents, j'ai volontairement augmenté la verbosité du code afin de vous illustrer les possibilités.
Dans la réalité, il n'est pas nécessaire de typer tout, tout le temps : la plupart des langages à typage static bénéficient de ce qu'on appelle la déduction de type, grâce à l'analyse statique. 

Il est peu probable que vous deviez préciser le type d'une variable que vous venez d'assigner : 

```py
name = "Je contiens une chaîne" # Le type de `name` est déduit, c'est un `str`
```

sauf si vous utilisez un alias :

```py
Token = str
token: Token = "12345678" # Le type a été explicité car il ne pouvait être déduit
```

Vous n'aurez pas non plus systématiquement besoin de typer les retours de fonctions :

```py
def multiply(arg1: int, arg2: int): # Le type du retour est déduit, c'est un `int`
    return arg1 * arg2
```

En fait, les seuls moments où ça va s'avérer obligatoire, c'est lorsqu'on va devoir passer par de la définition de structures (telles que les `dataclass`) ou que les types sont trop ambigus ou inexistants, donc impossibles à déduire.


## Des tas d'outils pratiques pour travailler avec les types

En quelques années, la communauté a eu le temps de mettre au point des outils pour se faciliter la vie.\
Sachant qu'il arrive souvent qu'on utilise une bibliothèque non typée, certains outils peuvent s'avérer particulièrement intéressants puisqu'ils peuvent générer les types en lisant le code : ce sont des générateurs de types.
En voici un échantillon :

- [mypy](http://mypy-lang.org/), outil d'analyse statique, générateur de types
- [Pyre](https://pyre-check.org/), outil d'analyse statique, générateur de types
- [Pyright](https://github.com/microsoft/pyright), outil d'analyse statique, générateur de types + [Pylance](https://github.com/microsoft/pylance-release), son extension VS Code
- [MonkeyType](https://github.com/Instagram/MonkeyType), générateur de types

---

Les annotations en Python ne servent qu'à un seul objectif : **rendre le code plus clair, plus explicite**. Il n'a *pas le moindre effet bénéfique lors de son exécution* et n'améliore en rien ses performances (les imports des types vont plutôt les réduire de manière *négligeable*). Bien que leur introduction remonte à 2014, les annotations de type de Python ne sont pas aussi approfondies que ce qu'on pourrait trouver avec TypeScript ou Rust et on peut rapidement se retrouver limité, par exemple avec les types génériques.

Le point final n'est pas de trancher sur le fait de favoriser un langage à typage statique par rapport à un langage à typage dynamique. A travers cette fonctionnalité, Python se rend plus versatile et, à mon avis, **plus facile à maintenir** dans de grosses applications et ce avec un excellent compromis temps/information grâce à la déduction de type. 

Utilisez-vous les annotations de type dans vos projets Python ? Si non, qu'est-ce qui vous ferait changer d'avis ? \
Au contraire, voyez-vous des inconvénients majeurs contre leur utilisation ?
