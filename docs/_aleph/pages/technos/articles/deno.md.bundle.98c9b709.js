(()=>{var a=Object.defineProperty,c=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(e,s,n)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,p=(e,s)=>{for(var n in s||(s={}))d.call(s,n)&&l(e,n,s[n]);if(o)for(var n of o(s))m.call(s,n)&&l(e,n,s[n]);return e},i=(e,s)=>c(e,u(s)),h=e=>a(e,"__esModule",{value:!0});var f=(e,s)=>{h(e);for(var n in s)a(e,n,{get:s[n],enumerable:!0})};var r={};f(r,{default:()=>t});var{createElement:g}=__ALEPH__.pack["https://esm.sh/react@17.0.2"],{default:b}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/HTMLPage.ts"];function t(e){return g(b,i(p({},e),{html:`<img class="m-auto mb-6 rounded-sm" width="200" src="/images/deno.svg"/><h1 class="text-5xl text-primary text-center font-bold mb-6 !leading-tight">Deno</h1><div class="text-center text-sm mb-4">Le 27 d\xE9cembre 2021</div><p class="mb-4">Apparu en 2018, vous en avez probablement d\xE9j\xE0 entendu parler sans r\xE9ellement vous y int\xE9resser.</p><p class="mb-4">Deno (prononcez &quot;Dino&quot; avec un &quot;i&quot; long, non pas &quot;D\xE9no&quot;) a \xE9t\xE9 con\xE7u et lanc\xE9 par <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://tinyclouds.org/">Ryan Dahl</a> et est <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/denoland">d\xE9velopp\xE9 par une \xE9quipe</a> et sa communaut\xE9 grandissante. D\xE9crit bri\xE8vement, c&#39;est un environnement d&#39;ex\xE9cution pour JavaScript (JS) et TypeScript (TS) d\xE9velopp\xE9 en <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://www.rust-lang.org/fr">Rust</a> qui utilise <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/swc-project/swc">Speedy Web Compiler</a> pour compiler le code JS/TS \xE0 fournir \xE0 <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://v8.dev/">V8</a>.</p><p class="mb-4">L&#39;objectif en cr\xE9ant Deno, dont le nom est l&#39;inversion des syllabes de Node(.js), \xE9tait de palier \xE0 plusieurs d\xE9fauts de conception de Node.js.</p>
      <h3 class="text-xl text-primary mb-2">
        Un environnement plus s\xFBr (parce que rien n&#39;est inviolable)
      </h3><p class="mb-4">Il est n\xE9cessaire d&#39;utiliser des indicateurs de ligne de commande pour <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://deno.land/manual@v1.17.1/getting_started/permissions">autoriser Deno \xE0 acc\xE9der \xE0 certaines fonctionalit\xE9s du syst\xE8me d&#39;exploitation (OS)</a>.
Node.js et les node_modules sont loin d&#39;\xEAtre des mod\xE8les en mati\xE8re de s\xE9curit\xE9 ; les rapports fr\xE9quents concernant des failles de s\xE9curit\xE9 \xE9manant de paquets h\xE9berg\xE9s par NPM (que vous t\xE9l\xE9chargez quotidiennement) le montrent.</p><pre><code class="language-sh hljs mb-4 rounded-sm"><span class="hljs-comment"># Audit d&#x27;un package.json pas tout-\xE0-fait \xE0 jour</span>
&gt; yarn audit
...
81 vulnerabilities found - Packages audited: 2956
Severity: 10 Low | 37 Moderate | 31 High | 3 Critical <span class="hljs-comment"># Oups !</span>
</code></pre>

      <h3 class="text-xl text-primary mb-2">
        Une interface de programmation plus intuitive
      </h3><p class="mb-4">L&#39;API de Deno utilise des objets <code>Promise</code> plut\xF4t que des fonctions de rappel, beaucoup plus raccord avec du JS/TS moderne. </p><p class="mb-4">Deno :</p><pre><code class="language-ts hljs mb-4 rounded-sm"><span class="hljs-keyword">const</span> textPromise = Deno.readTextFile(<span class="hljs-string">&quot;./data.txt&quot;</span>);

textPromise.then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(response);
}).catch(<span class="hljs-function">(<span class="hljs-params">error</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(error);
});
</code></pre>
<p class="mb-4">Node.js (version initiale) :</p><pre><code class="language-js hljs mb-4 rounded-sm"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
fs.readFile(<span class="hljs-string">&quot;./data.txt&quot;</span>, <span class="hljs-string">&quot;utf8&quot;</span>, <span class="hljs-function">(<span class="hljs-params">error, data</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (error) {
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">console</span>.log(error);
  }
  <span class="hljs-built_in">console</span>.log(data);
});
</code></pre>
<p class="mb-4">Node.js (version promesses) :</p><pre><code class="language-js hljs mb-4 rounded-sm"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>).promises;

<span class="hljs-keyword">const</span> textPromise = fs.readFile(<span class="hljs-string">&quot;./data.txt&quot;</span>, <span class="hljs-string">&quot;utf8&quot;</span>);

textPromise.then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(response);
}).catch(<span class="hljs-function">(<span class="hljs-params">error</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(error);
});
</code></pre>

      <h3 class="text-xl text-primary mb-2">
        Les d\xE9pendances font partie int\xE9grante du projet
      </h3><p class="mb-4">Deno n&#39;utilise pas de gestionnaire de paquets mais t\xE9l\xE9charge directement les d\xE9pendances que l&#39;on renseigne dans le code via un module <code>deps.ts</code> (ou <code>deps_dev.ts</code> pour les paquets de d\xE9veloppement uniquement). </p><p class="mb-4">De plus, Deno utilise un syst\xE8me de r\xE9solution de module qui nous permet de personnaliser les imports, <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://deno.land/manual/linking_to_external_code/import_maps">import-maps</a>.</p><p class="mb-4">Sachant que Deno n&#39;utilise que des modules ECMAScript (ESM), vous ne pourrez pas utiliser des paquets npm aux formats d&#39;import en CommonJS/UMD sans les <a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="https://esm.sh/">convertir au pr\xE9alable</a>.</p>
      <h3 class="text-xl text-primary mb-2">
        TypeScript (TS) et JSX/TSX sont ex\xE9cut\xE9s en toute transparence
      </h3><p class="mb-4">Bien que toujours transpil\xE9 avant d&#39;\xEAtre compil\xE9 puis ex\xE9cut\xE9, TS peut d\xE9sormais \xEAtre utilis\xE9 sans configurer quoi que ce soit en suppl\xE9ment. </p>
      <h3 class="text-xl text-primary mb-2">
        Et plein d&#39;autres bonnes choses !
      </h3><p class="mb-4">Deno peut compiler une application en un fichier ex\xE9cutable en compilation multi-plateformes.</p><p class="mb-4">Il int\xE8gre son propre syst\xE8me de tests, de formattage, d&#39;empaquetage, d&#39;analyse statique.</p><hr class="!my-6 m-auto text-primary max-w-screen-md"/><p class="mb-4">Deno est encore jeune mais est d\xE9j\xE0 stable et utilisable en production, \xE0 condition de se renseigner sur la sensibilit\xE9 des fonctionnalit\xE9s concern\xE9es. Le but de Deno n&#39;est pas de remplacer Node.js, inutile donc de vous imposer des migrations de projets Node.js vers Deno si ceux-ci fonctionnent parfaitement.</p><p class="mb-4">Pour ma part, le runtime me semble apporter un r\xE9\xE9l plus au niveau de l&#39;exp\xE9rience d\xE9veloppeur, il se peut que je m&#39;en serve davantage \xE0 l&#39;avenir !</p>`}))}t.meta={title:"Deno",created:"2021-12-27T00:00:00.000Z",updated:"2021-12-27T00:00:00.000Z",image:"deno.svg",image_width:200};__ALEPH__.pack["/pages/technos/articles/deno.md"]=r;})();
