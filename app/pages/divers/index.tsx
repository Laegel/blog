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
      posts: await grabPostsFromServer("/pages/divers/articles"),
    };
  },
};

export default ({ posts }: PostsSource) => {

  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Divers</h1>
      <p className="mb-4">
        Ici, je compte porter un regard critique sur le métier, ses avantages et inconvénients, ses normes, ses dérives.<br/>
        Je n'aborderai pas de sujets sous l'angle technique, plutôt philosophique et traiterai davantage des à-côtés.
      </p>
      <Posts posts={posts} root={getURI("/divers/articles/")} />
    </div>
  );
};
