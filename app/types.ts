export type PostMeta = {
  title: string;
  path: string;
  excerpt: string;
  created: string;
  updated: string;
  image?: string;
};

export type PostsSource = {
  posts: PostMeta[];
};
