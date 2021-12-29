import type { Aleph, LoadInput, LoadOutput, ResolveResult, Plugin } from "aleph/types";
import { safeLoadFront } from "yaml-front-matter";
import marked from "https://esm.sh/marked@3.0.4?no-check";
import hljs from "https://esm.sh/highlight.js@10.7.1?bundle";
import unescape from "https://esm.sh/unescape@1.0.1?bundle";

import { toFrenchFormat } from "~/utils/date.ts";

const util = {
  isPlainObject (a: any): a is Record<string, any> {
    return typeof a === "object" && a !== null && Object.getPrototypeOf(a) === Object.prototype;
  },
  isFunction (a: any): a is Function {
    return typeof a === "function";
  },
  isLikelyHttpURL (s: string): boolean {
    const p = s.slice(0, 8).toLowerCase();
    return p === "https://" || p.slice(0, 7) === "http://";
  },
  isString (a: any): a is string {
    return typeof a === "string";
  },
  trimPrefix (s: string, prefix: string): string {
    if (prefix !== "" && s.startsWith(prefix)) {
      return s.slice(prefix.length);
    }
    return s;
  },
  trimSuffix (s: string, suffix: string): string {
    if (suffix !== "" && s.endsWith(suffix)) {
      return s.slice(0, -suffix.length);
    }
    return s;
  },
};


const test = /\.(md|markdown)$/i;
const reCodeTag = /<code class="language\-([^"]+)">([\s\S]+?)<\/code>/g;

const renderer = {
  heading: (text: string, level: number) => {
    const templates = {
      2: `
        <h2 class="text-3xl text-primary mb-4">
          ${text}
        </h2>`
    };

    return level in templates ? templates[level] : `
      <h${level} class="text-xl text-primary mb-2">
        ${text}
      </h${level}>`;
  },
  paragraph: (text: string) => `<p class="mb-4">${text}</p>`,
  list: (body: string, ordered: boolean, start: number) => `<ul class="mb-4 list-disc pl-6">${body}</ul>`,
  // listitem: (text: string, task: boolean, checked: boolean) => `<li class="list-disc">${text}</li>`,
  link: (href: string, _title: string, text: string) => (href.startsWith("/") ? `<a class="text-primary underline underline-offset-1" href="${href}">` : `<a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="${href}">`) + text + "</a>",
  hr: () => `<hr class="!my-6 m-auto text-primary max-w-screen-md"/>`
};
marked.use({ renderer });

export const markdownResolver = (specifier: string): ResolveResult => {
  let pagePath = util.trimPrefix(specifier.replace(/\.(md|markdown)$/i, ""), "/pages");
  let isIndex = pagePath.endsWith("/index");
  if (isIndex) {
    pagePath = util.trimSuffix(pagePath, "/index");
    if (pagePath === "") {
      pagePath = "/";
    }
  }
  return { asPage: { path: pagePath, isIndex } };
};

export const markdownLoader = async ({ specifier }: LoadInput, aleph: Aleph, { highlight }: Options = {}): Promise<LoadOutput> => {
  const { framework } = aleph.config;
  const { content } = await aleph.fetchModule(specifier);

  const { __content, ...meta } = safeLoadFront((new TextDecoder).decode(content));
  const props = {
    id: util.isString(meta.id) ? meta.id : undefined,
    className: util.isString(meta.className) ? meta.className.trim() : undefined,
    style: util.isPlainObject(meta.style) ? Object.entries(meta.style).reduce((prev, [key, value]) => {
      prev[key.replaceAll(/\-[a-z]/g, m => m.slice(1).toUpperCase())] = value;
      return prev;
    }, {} as Record<string, any>) : undefined,
  };
  let html: string = marked.parse(__content);

  if (highlight) {
    html = html.replace(reCodeTag, (_, language, code) => {
      const h = hljs.highlight(unescape(code), { language }).value;
      return `<code class="language-${language} hljs mb-4 rounded-sm">${h}</code>`;
    });
  }

  if (meta.title) {
    html = (meta.image ? `<img class="m-auto mb-6 rounded-sm" width="${meta.image_width || "auto"}" src="/images/${meta.image}"/>` : "") +
      `<h1 class="text-5xl text-primary text-center font-bold mb-6 !leading-tight">${meta.title}</h1>` +
      (meta.created ? `<div class="text-center text-sm mb-4">Le ${toFrenchFormat(meta.created)}</div>` : "") +
      (meta.updated && "" + meta.created !== "" + meta.updated ? `<div>Mis à jour le ${toFrenchFormat(meta.updated)}</div>` : "") +
      html;
  }

  const code = [
    `import { createElement } from "https://esm.sh/react"`,
    `import HTMLPage from "https://deno.land/x/aleph/framework/react/components/HTMLPage.ts"`,
    highlight && `import "https://esm.sh/highlight.js@10.7.1/styles/${highlight.theme || "default"}.css"`,
    `export default function MarkdownPage(props) {`,
    `  return createElement(HTMLPage, {`,
    `    ...${JSON.stringify(props)},`,
    `    ...props,`,
    `    html: ${JSON.stringify(html)}`,
    `  })`,
    `}`,
    `MarkdownPage.meta = ${JSON.stringify(meta)}`,
  ];

  if (framework === "react") {
    return {
      code: code.filter(Boolean).join("\n")
    };
  }

  throw new Error(`markdown-loader: does not support framework "${framework}"`);
};

export type Options = {
  highlight?: {
    provider: "highlight.js",
    theme?: string;
  };
};

export default (): Plugin => {
  return {
    name: "markdown-loader",
    setup: aleph => {
      aleph.onResolve(test, markdownResolver);
      aleph.onLoad(test, input => markdownLoader(input, aleph, {
        highlight: {
          provider: "highlight.js",
          theme: "nord",
        }
      }));
    }
  };
};