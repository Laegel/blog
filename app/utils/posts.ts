import { safeLoadFront } from "yaml-front-matter";

import type { PostMeta } from "~/types.ts";
import { toFrenchFormat } from "./date.ts";
import strip from "remove-markdown";

export const toArray = async (iterator: AsyncIterable<Deno.DirEntry>, root: string): Promise<PostMeta[]> => {
  const items = [];
  for await (const val of iterator) {
    const { __content, ...meta } = safeLoadFront(await Deno.readTextFile(root + val.name));
    
    items.push({
      ...meta,
      path: val.name.replace(".md", ""),
      excerpt: strip(__content).substring(0, 90),
      created: toFrenchFormat(meta.created),
      updated: meta.updated ? toFrenchFormat(meta.updated) : undefined,
      sortKey: meta.created,
    } as PostMeta);
  }
  items.sort(((item1, item2) => item2.sortKey - item1.sortKey));
  return items;
};

export const grabPostsFromServer = async (path: string) => {
  const absolutePath = await Deno.realPath("." + path);
  return toArray(Deno.readDir(absolutePath), absolutePath + "/");
};
