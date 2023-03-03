import { grabPostsFromServer } from "@/utils/posts";
import { getURI } from "@/utils/links";
import Posts from "@/components/posts";
import type { PostsSource } from "@/types";

export async function getStaticProps() {
  const posts = await grabPostsFromServer("/pages/technos/articles");
  return {
    props: {
      posts,
    },
  };
}

const Technos = ({ posts }: PostsSource) => {
  return (
    <div className="page">
      <h1 className="text-primary text-4xl mb-5">Technos</h1>
      <p className="mb-4">
        La veille technologique est un aspect important du métier de
        développeur. Il est nécessaire de se tenir à jour, de connaître un
        minimum les nouveautés afin d&apos;aiguiser ses compétences pour proposer des
        solutions mieux adaptées en fonction des besoins. Je relaierai ici
        certaines news, rédigerai des tests de technologies (langages,
        bibliothèques, frameworks, ...) afin de donner mon avis sur un sujet
        souvent trop négligé : l&apos;expérience développeur.
      </p>
      <Posts posts={posts} root={getURI("/")} />
    </div>
  );
};

export default Technos;
