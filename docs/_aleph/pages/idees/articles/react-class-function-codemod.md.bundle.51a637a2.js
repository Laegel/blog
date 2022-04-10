(()=>{var o=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&r(e,s,t[s]);if(l)for(var s of l(t))m.call(t,s)&&r(e,s,t[s]);return e},c=(e,t)=>p(e,d(t)),f=e=>o(e,"__esModule",{value:!0});var h=(e,t)=>{f(e);for(var s in t)o(e,s,{get:t[s],enumerable:!0})};var a={};h(a,{default:()=>n});var{createElement:b}=__ALEPH__.pack["https://esm.sh/react@17.0.2"],{default:x}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/HTMLPage.ts"];function n(e){return b(x,c(i({},e),{html:`<h1 class="text-5xl text-primary text-center font-bold mb-6 !leading-tight">React: Class to Functional</h1><div class="text-center text-sm mb-4">Le 2 avril 2022</div><p class="mb-4">Voici <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://marketplace.visualstudio.com/items?itemName=Laegel.react-class-to-functional">ma toute premi\xE8re extension VS Code</a> : un codemod qui transforme un composant React avec la syntaxe classe vers la syntaxe fonctionnelle.</p>
        <h2 class="text-3xl text-primary mb-4">
          Pour quoi faire ? Les classes, c&#39;est cool.
        </h2><p class="mb-4">Il y a de nombreux inconv\xE9nients \xE0 utiliser React avec la syntaxe classe :</p><ul class="mb-4 list-disc pl-6"><li>il faut plus de code pour un r\xE9sultat similaire (verbosit\xE9) ;</li>
<li>l&#39;utilisation des classes et <code>this</code> n&#39;est pas intuitive pour tout le monde ;</li>
<li><a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://fr.reactjs.org/docs/composition-vs-inheritance.html">l&#39;h\xE9ritage est d\xE9conseill\xE9 au profit de la composition</a> ;</li>
<li>le succ\xE8s des hooks est tel qu&#39;il est d\xE9sormais beaucoup plus difficile de trouver des tutoriels pour d\xE9velopper avec des classes (si vous recrutez des juniors, ayez \xE7a en t\xEAte).</li>
</ul><p class="mb-4">Personnellement, j&#39;ai tendance \xE0 favoriser le fonctionnel en JavaScript/TypeScript, plus coh\xE9rent avec la nature du langage que la d\xE9claration de classes (m\xEAme si tout est objet mais c&#39;est une autre histoire). Sachant que j&#39;ai appris <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://rescript-lang.org/docs/react/latest/introduction">React avec ReScript</a>, la syntaxe fonctionnelle est pour moi beaucoup plus naturelle.</p>
        <h2 class="text-3xl text-primary mb-4">
          Comment \xE7a marche ?
        </h2><p class="mb-4">Dans cette extension se trouve un script qui va analyser du code en d\xE9tectant les d\xE9clarations de composants React sous forme de classe, litt\xE9ralement <code>class MyComponent extends React.Component</code>. </p><p class="mb-4">Pour transformer un composant-classe en composant-fonction, les \xE9tapes suivantes sont effectu\xE9es :</p><ul class="mb-4 list-disc pl-6"><li>la m\xE9thode <code>render</code> devient le composant-fonction ;</li>
<li>les m\xE9thodes <code>componentDidMount</code>, <code>componentDidUpdate</code> et <code>componentWillUnmount</code> sont transform\xE9es en appels \xE0 <code>useEffect</code> ;</li>
<li>les appels <code>React.createRef</code> sont transform\xE9s en appels <code>useRef</code> ;</li>
<li>la propri\xE9t\xE9 <code>state</code> est d\xE9coup\xE9e en de multiples appels \xE0 <code>useState</code> ;</li>
<li>les <code>props</code> sont r\xE9cup\xE9r\xE9es et utilis\xE9es en tant qu&#39;argument de la fonction ;</li>
<li>les m\xE9thodes sont transform\xE9es en de simples fonctions internes ;</li>
<li>les propri\xE9t\xE9s sont transform\xE9es en des appels \xE0 <code>useRef</code> ;</li>
<li>les mots-cl\xE9s <code>this</code> sont supprim\xE9s ;</li>
<li>l&#39;interface de l&#39;\xE9tat du composant (si elle existe) est supprim\xE9e ;</li>
<li>l&#39;import de React est adapt\xE9 en cons\xE9quence.</li>
</ul><p class="mb-4">Installez l&#39;extension, ouvrez un fichier qui contient des classes et ex\xE9cutez la commande <code>react-class-to-functional.transform</code> depuis la palette de VS Code.</p><hr class="!my-6 m-auto text-primary max-w-screen-md"/><p class="mb-4">Si \xE7a vous pla\xEEt, laissez une \xE9toile sur le repo ! Je compte faire \xE9voluer cette extension pour plus de possibilit\xE9s et une meilleure ergonomie. N&#39;h\xE9sitez pas \xE0 remonter les erreurs en cr\xE9ant des issues sur GitHub. </p><p class="mb-4">Le code est <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/Laegel/react-class-to-function">disponible ici</a>.</p>`}))}n.meta={title:"React: Class to Functional",created:"2022-04-02T00:00:00.000Z",updated:"2022-04-02T00:00:00.000Z"};__ALEPH__.pack["/pages/idees/articles/react-class-function-codemod.md"]=a;})();
