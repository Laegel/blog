// import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;
  const absolutePath = await fs.realpath("." + path);
  return fs.readdir(absolutePath), absolutePath + "/";
}
