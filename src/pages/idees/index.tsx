import { grabPostsFromServer } from "@/utils/posts";
import { getURI } from "@/utils/links";
import Posts from "@/components/posts";
import type { PostsSource } from "@/types";

export async function getStaticProps() {
  const posts = await grabPostsFromServer("/pages/idees/articles");
  return {
    props: {
      posts,
    },
  };
}

const Ideas = ({ posts }: PostsSource) => {

  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Idées</h1>
      <p className="mb-4">
        J&apos;ai la fâcheuse tendance à multiplier les idées et à démarrer des projets personnels qui n&apos;aboutissent pas.<br />
        Cette partie du blog est dédiée à la mise à profit du temps passé à faire de la conception et de la réalisation.
      </p>
      <Posts posts={posts} root={getURI("/")} />
    </div>
  );
};

export default Ideas;

