import { grabPostsFromServer } from "@/utils/posts";
import { getURI } from "@/utils/links";
import Posts from "@/components/posts";
import type { PostsSource } from "@/types";

export async function getStaticProps() {
  const posts = await grabPostsFromServer("/pages/divers/articles");
  return {
    props: {
      posts,
    },
  };
}
const Misc = ({ posts }: PostsSource) => {
  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Divers</h1>
      <p className="mb-4">
        Ici, je compte porter un regard critique sur le métier, ses avantages et
        inconvénients, ses normes, ses dérives.
        <br />
        Je n&apos;aborderai pas de sujets sous l&apos;angle technique, plutôt
        philosophique et traiterai davantage des à-côtés.
      </p>
      <Posts posts={posts} root={getURI("/")} />
    </div>
  );
};

export default Misc;
