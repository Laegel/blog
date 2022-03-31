import React from "react";

import Logo from "~/components/logo.tsx";
import { getURI } from "~/utils/links.ts";

const Navbar = () => <nav className="absolute left-0 top-0 h-12 w-full bg-primary">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-12">
      <div className="flex-1 flex items-center justify-left h-full">
        <div className="flex-shrink-0 flex items-center h-full">
          <a rel="nav" className="block h-full" href={getURI("/")}><Logo colors={["#000", "#000"]} /></a>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">

            <a rel="nav" className="text-background hover:bg-gray-700 hover:text-white px-3 py-3.5 rounded-md text-sm font-medium" href={getURI("/technos")}>Technos</a>
            <a rel="nav" className="text-background hover:bg-gray-700 hover:text-white px-3 py-3.5 rounded-md text-sm font-medium" href={getURI("/idees")}>Idées</a>
            <a rel="nav" className="text-background hover:bg-gray-700 hover:text-white px-3 py-3.5 rounded-md text-sm font-medium" href={getURI("/divers")}>Divers</a>

          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
        <div className="ml-3 relative">
          <div>
            <a href="https://github.com/laegel" target="_blank" rel="noopener noreferrer">
              <svg className="text-background" viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden bg-primary" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a rel="nav" className="text-background px-3 py-2 rounded-md text-sm font-medium" href={getURI("/technos")}>Technos</a>
      <a rel="nav" className="text-background px-3 py-2 rounded-md text-sm font-medium" href={getURI("/idees")}>Idées</a>
      <a rel="nav" className="text-background px-3 py-2 rounded-md text-sm font-medium" href={getURI("/divers")}>Divers</a>
    </div>
  </div>
</nav>;

export default Navbar;
