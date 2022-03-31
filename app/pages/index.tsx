import React from "react";

import Logo from "~/components/logo.tsx";
import { getURI } from "~/utils/links.ts";

export default function Home () {
  return (
    <div className="text-foreground">
      <head>
        <title>Laegel, Lead Dev</title>
      </head>
      <div className="-mt-24">
        <div className="m-auto" style={{ maxWidth: 500 }}>
          <Logo colors={["#39b1a7", "#913fdf"]} />
        </div>
      </div>
      <h1 className="text-5xl text-center font-bold mb-4">👋 Hey, bienvenue sur <strong>mon blog</strong> !</h1>

      <p className="mb-2">
        Je m'appelle Valentin (AKA Laegel), je suis <strong>Lead Developer</strong> et je développe (principalement du web) depuis 2010. <br />
        Je considère les technologies comme de simples outils et que le plus important reste de répondre au besoin tout en conservant une bonne maintenabilité du code.
      </p>

      <p className="mb-2">
        Le site est découpé en trois rubriques que je vous invite à découvrir !
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex-1 relative rounded-sm h-48 bg-center bg-cover md:bg-contain" style={{ backgroundImage: `url(/images/technos.jpg)` }}>
          <div className="bg-technos opacity-20 absolute w-full h-full top-0 left-0">

          </div>
          <a rel="nav" href={getURI("/technos")} className="absolute w-full h-full top-0 left-0 flex justify-center items-center font-bold text-shadow-around">
            Technos
          </a>
        </div>
        <div className="flex-1 relative rounded-sm h-48 bg-center bg-cover md:bg-contain" style={{ backgroundImage: `url(/images/idees.jpg)` }}>
          <div className="bg-idees opacity-20 absolute w-full h-full top-0 left-0">

          </div>
          <a rel="nav" href={getURI("/idees")} className="absolute w-full h-full top-0 left-0 flex justify-center items-center font-bold text-shadow-around">
            Idées
          </a>
        </div>
        <div className="flex-1 relative rounded-sm h-48 bg-center bg-cover md:bg-contain" style={{ backgroundImage: `url(/images/divers.jpg)` }}>
          <div className="bg-divers opacity-20 absolute w-full h-full top-0 left-0">

          </div>
          <a rel="nav" href={getURI("/divers")} className="absolute w-full h-full top-0 left-0 flex justify-center items-center font-bold text-shadow-around">
            Divers
          </a>
        </div>
      </div>
    </div>
  );
}
