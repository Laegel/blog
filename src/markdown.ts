import { promises as fs } from "fs";
import { safeLoadFront } from "yaml-front-matter";
import { marked } from "marked";
import hljs from "highlight.js";
import unescape from "unescape";

import { toFrenchFormat } from "@/utils/date";

const util = {
  isPlainObject(a: any): a is Record<string, any> {
    return (
      typeof a === "object" &&
      a !== null &&
      Object.getPrototypeOf(a) === Object.prototype
    );
  },
  isFunction(a: any): a is Function {
    return typeof a === "function";
  },
  isLikelyHttpURL(s: string): boolean {
    const p = s.slice(0, 8).toLowerCase();
    return p === "https://" || p.slice(0, 7) === "http://";
  },
  isString(a: any): a is string {
    return typeof a === "string";
  },
  trimPrefix(s: string, prefix: string): string {
    if (prefix !== "" && s.startsWith(prefix)) {
      return s.slice(prefix.length);
    }
    return s;
  },
  trimSuffix(s: string, suffix: string): string {
    if (suffix !== "" && s.endsWith(suffix)) {
      return s.slice(0, -suffix.length);
    }
    return s;
  },
};

const reCodeTag = /<code class="language\-([^"]+)">([\s\S]+?)<\/code>/g;

const renderer = {
  heading: (text: string, level: number) => {
    const templates = {
      2: `
        <h2 class="text-3xl text-primary mb-4">
          ${text}
        </h2>`,
    };

    return level in templates
      ? (templates as any)[level]
      : `
      <h${level} class="text-xl text-primary mb-2">
        ${text}
      </h${level}>`;
  },
  paragraph: (text: string) => `<p class="mb-4">${text}</p>`,
  list: (body: string, ordered: boolean, start: number) =>
    `<ul class="mb-4 list-disc pl-6">${body}</ul>`,
  // listitem: (text: string, task: boolean, checked: boolean) => `<li class="list-disc">${text}</li>`,
  link: (href: string, _title: string, text: string) =>
    (href.startsWith("/")
      ? `<a class="text-primary underline underline-offset-1" href="${href}">`
      : `<a class="text-primary underline underline-offset-1" target="_blank" rel="noreferrer noopener nofollow" href="${href}">`) +
    text +
    "</a>",
  hr: () => `<hr class="!my-6 m-auto text-primary max-w-screen-md"/>`,
  blockquote: (text: string) =>
    `<blockquote class="italic border-l-4 border-primary pl-2">${text}</blockquote>`,
};
marked.use({ renderer });

export const markdownResolver = (specifier: string) => {
  let pagePath = util.trimPrefix(
    specifier.replace(/\.(md|markdown)$/i, ""),
    "/pages"
  );
  let isIndex = pagePath.endsWith("/index");
  if (isIndex) {
    pagePath = util.trimSuffix(pagePath, "/index");
    if (pagePath === "") {
      pagePath = "/";
    }
  }
  return { asPage: { path: pagePath, isIndex } };
};

export const render = async (path: string) => {
  const content = await fs.readFile(path, { encoding: "utf-8" });
  const { __content, ...meta } = safeLoadFront(content);

  let html: string = marked.parse(__content);

  html = html.replace(reCodeTag, (_, language, code) => {
    const h = hljs.highlight(unescape(code), { language }).value;
    return `<code class="language-${language} hljs mb-4 rounded-sm">${h}</code>`;
  });

  if (meta.title) {
    html =
      (meta.image
        ? `<img class="m-auto mb-6 rounded-sm" width="${
            meta.image_width || "auto"
          }" src="/images/${meta.image}"/>`
        : "") +
      `<h1 class="text-5xl text-primary text-center font-bold mb-6 !leading-tight">${meta.title}</h1>` +
      (meta.created
        ? `<div class="text-center text-sm mb-4">Le ${toFrenchFormat(
            meta.created
          )}</div>`
        : "") +
      (meta.updated && "" + meta.created !== "" + meta.updated
        ? `<div>Mis à jour le ${toFrenchFormat(meta.updated)}</div>`
        : "") +
      html;
  }

  return html;
};
