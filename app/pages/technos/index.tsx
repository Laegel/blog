import React from "react";
import type { SSROptions } from "aleph/types";

import { grabPostsFromServer } from "~/utils/posts.ts";
import Posts from "~/components/posts.tsx";
import type { PostsSource } from "~/types.ts";

export const ssr: SSROptions<PostsSource> = {
  props: async () => {
    return {
      $revalidate: 0, // revalidate props after 1 second
      posts: await grabPostsFromServer("/pages/technos/articles"),
    };
  },
};

export default ({ posts }: PostsSource) => {

  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Technos</h1>
      <p className="mb-4">
        La veille technologique est un aspect important du métier de développeur. Il est nécessaire de se tenir à jour, de
        connaître un minimum les nouveautés afin d'aiguiser ses compétences pour proposer des solutions mieux adaptées en
        fonction des besoins. Je relaierai ici certaines news, rédigerai des tests de technologies (langages, bibliothèques, frameworks, ...)
        afin de donner mon avis sur un sujet souvent trop négligé : l'expérience développeur.
      </p>
      <Posts posts={posts} root={"/technos/articles/"} />
    </div>
  );
};
