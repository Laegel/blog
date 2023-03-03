import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import "windi.css";

import "@/styles/globals.css";
import { glossarize, Application } from "@/utils/glossarize";
import glossary from "@/glossary";
import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import Home from "./index";
import classNames from "classnames";

export default function App({ router, Component, pageProps }: AppProps) {
  const { pathname } = router;
  const getCategory = () => pathname.split("/")[1] || "base";

  const isPost = pathname.split("/")[2] === "articles";

  const root = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let glossaryApp: Application;
    if (root.current) {
      glossaryApp = glossarize(glossary, {
        domRoot: root.current,
      });
    }

    const script = document.createElement("script");
    const attributes = {
      src: "https://giscus.app/client.js",
      id: "giscus-script",
      "data-repo": "laegel/blog",
      "data-repo-id": "R_kgDOGmGGhw",
      "data-category-id": "DIC_kwDOGmGGh84CAjnf",
      "data-mapping": "pathname",
      "data-lang": "fr",
      "data-theme": "dark_protanopia",
      crossOrigin: "anonymous",
      async: "",
    };

    Object.entries(attributes).forEach(([name, value]) =>
      script.setAttribute(name, value),
    );
    if (isPost) {
      document.body.appendChild(script);
    }

    return () => {
      if (glossaryApp) {
        glossaryApp.destroy();
      }
    };
  }, [router.pathname, isPost]);

  return (
    <div
      className={classNames(getCategory(), "min-h-screen", "flex", "flex-col")}
      style={{ minHeight: "100vh" }}
    >
      <main
        ref={root}
        className="text-foreground flex-1 w-full max-w-screen-lg m-auto p-2 mb-4"
      >
        {Component.name !== Home.name && <Navbar />}

        <div className="mt-22 sm:mt-10 pt-10 page-content">
          <Component {...pageProps} />
        </div>

        {isPost && <div className="giscus"></div>}
      </main>
      {Component.name !== Home.name && (
        <footer className="h-24 w-full bg-primary">
          <div className="h-6 relative">
            <div
              className="h-full bg-cover"
              style={{ backgroundImage: `url(/images/${getCategory()}.jpg)` }}
            ></div>
            <div className="bg-primary opacity-40 absolute w-full h-full top-0 left-0"></div>
          </div>
          <div className="h-18">
            <div className="m-auto max-w-screen-lg flex items-center">
              <div className="mr-2 flex-1">
                <a
                  href="https://github.com/Laegel/blog"
                  className="inline-block mt-2"
                  target="_blank"
                  style={{ width: 100 }}
                  rel="noreferrer"
                >
                  <Logo colors={["#000", "#000"]} />
                </a>
              </div>

              <a
                href="https://github.com/Laegel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mr-4"
              >
                <svg
                  className="inline-block text-background"
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/valentin-chouaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mr-2 text-background"
              >
                <svg
                  className="inline-block"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <path
                      d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                      fill="currentColor"
                    />
                    <path
                      d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
