import {
    grabPostFromServer,
    grabPostsFromServer,
  } from "@/utils/posts";
  
  export async function getStaticPaths() {
    const posts = await grabPostsFromServer("/pages/technos/articles");
  
    return {
      paths: posts.map((post) => "/" + post.path),
      fallback: false,
    };
  }
  
  export async function getStaticProps(context: any) {
    const { slug } = context.params;
  
    const content = await grabPostFromServer(`/pages/technos/articles/${slug}.md`);
  
    return {
      props: {
        content: content.content,
      },
    };
  }
  
  const BlogPost = ({ content }: { content: string }) => (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  );
  
  export default BlogPost;
  