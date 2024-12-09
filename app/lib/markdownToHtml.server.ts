import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { default: zennMarkdownHtml } = require("zenn-markdown-html");

export const markdownToHtml = (markdown: string) => {
  return zennMarkdownHtml(markdown, {
    embedOrigin: "https://embed.zenn.studio",
  });
};
