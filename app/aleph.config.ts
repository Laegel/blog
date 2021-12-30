import Processor from "https://esm.sh/windicss@3.1.7";
import type { Plugin } from "https://deno.land/x/aleph@v0.3.0-beta.10/types.d.ts";

import markdown from "./plugins/markdown.ts";


import config from "./windi.config.ts";

const extraClasses = [
  "text-5xl", "text-center", "font-bold",
  "text-3xl", "text-xl", "mb-6", "mb-4", "mb-2", "text-primary",
  "m-auto", "rounded-sm", "!leading-tight",
  "text-sm", "list-disc", "pl-6", "underline",
  "underline-offset-1", "flex-col", "min-w-screen",
  "!my-6", "max-w-screen-md",
];

const windicss = <Plugin>{
  name: "windicss",
  setup: aleph => {
    const windi = new Processor(config);
    
    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      const { specifier, jsxStaticClassNames } = module;
      if (jsxStaticClassNames?.length) {
        const url = specifier.replace(/\.(j|t)sx$/i, "") + ".tailwind.css";
        
        const interpretedSheet = windi.interpret([...extraClasses, ...jsxStaticClassNames].join(" ")).styleSheet;
        const minify = aleph.mode === "production";
        // todo: treeshake prefilght
        const css = interpretedSheet.extend(windi.preflight()).build(minify);
        const cssModule = await aleph.addModule(url, css, true);

        return {
          // import tailwind css
          code: `import "${aleph.resolveImport(cssModule, specifier, bundleMode, true)}";${code}`,
          // support SSR
          extraDeps: [{ specifier: url, virtual: true }],
        };
      }
    });
  }
};

export default <Config>{
  basePath: "/blog",
  build: {
    outputDir: "/docs",
  },
  plugins: [windicss, markdown()]
};