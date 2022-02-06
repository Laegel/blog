import markdown from "./plugins/markdown.ts";

export default <Config>{
  build: {
    outputDir: "/docs",
  },
  plugins: [markdown()]
};