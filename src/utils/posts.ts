import { promises as fs } from "fs";
import { cwd } from "process";

import { safeLoadFront } from "yaml-front-matter";
import strip from "remove-markdown";

import type { PostMeta } from "@/types";
import { toFrenchFormat } from "./date";
import { render } from "@/markdown";

export const toArray = async (
  posts: any[],
  root: string
): Promise<PostMeta[]> => {
  const items = [];
  for (const post of posts) {
    items.push(await readPostFromServer(root + post));
  }
  items.sort((item1, item2) => item2.sortKey - item1.sortKey);
  return items;
};

export const grabPostsFromServer = async (path: string) => {
  const absolutePath = await fs.realpath(cwd() + "/src" + path);
  return toArray(
    await (
      await fs.readdir(absolutePath)
    ).filter((path) => path.endsWith(".md")),
    absolutePath + "/"
  );
};

export const grabPostFromServer = async (path: string) => {
  const absolutePath = await fs.realpath(cwd() + "/src" + path);

  return {
    ...(await readPostFromServer(absolutePath)),
    content: await render(absolutePath),
  };
};

export const readPostFromServer = async (path: string) => {
  // const absolutePath = await fs.realpath(cwd() + "/src" + path);
  const { __content, ...meta } = safeLoadFront(
    await fs.readFile(path, { encoding: "utf-8" })
  );

  return {
    ...meta,
    path: path.split("/").slice(-3).join("/").replace(".md", ""),
    excerpt: strip(__content).substring(0, 90),
    created: toFrenchFormat(meta.created),
    updated: meta.updated ? toFrenchFormat(meta.updated) : undefined,
    sortKey: meta.created.getTime(),
  } as PostMeta;
};
