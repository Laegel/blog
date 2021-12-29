import React from "react";

import type { PostMeta } from "~/types.ts";

const Posts = ({ posts, root }: { posts: PostMeta[], root: string; }) => <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {posts.map((post, index) => <div key={post.title + "-" + index} className="rounded p-2 relative overflow-hidden border">
    {post.image && <div className="post-image absolute -z-1 w-full h-full -left-0 -top-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/${post.image})` }}></div>}
    <a rel="nav" className="hover:bg-gray-700 hover:text-white px-3 py-3.5 rounded-md text-sm font-medium flex flex-col" href={`${root}${post.path}`}>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <br />
      <p className="border-b mb-4 pb-2">
        {post.excerpt}...
      </p>
      <span className="text-xs">Le {post.created}</span>
    </a>
  </div>)}
</div>;

export default Posts;
