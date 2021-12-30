import React from "react";
import type { SSROptions } from "aleph/types";

import { grabPostsFromServer } from "~/utils/posts.ts";
import { getURI } from "~/utils/links.ts";
import Posts from "~/components/posts.tsx";
import type { PostsSource } from "~/types.ts";


export const ssr: SSROptions<PostsSource> = {
  props: async () => {
    return {
      $revalidate: 0, // revalidate props after 1 second
      posts: await grabPostsFromServer("/pages/idees/articles"),
    };
  },
};

const Ideas = ({ posts }: PostsSource) => {

  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Idées</h1>
      <p className="mb-4">
        J'ai la fâcheuse tendance à multiplier les idées et à démarrer des projets personnels qui n'aboutissent pas.<br />
        Cette partie du blog est dédiée à la mise à profit du temps passé à faire de la conception et de la réalisation.
      </p>
      <Posts posts={posts} root={getURI("/idees/articles/")} />
    </div>
  );
};

export default Ideas;

