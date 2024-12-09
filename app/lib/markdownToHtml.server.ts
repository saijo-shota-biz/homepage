export const markdownToHtml = async (markdown: string) => {
  const { default: zennMarkdownHtml } = await import("zenn-markdown-html");
  // @ts-ignore
  return zennMarkdownHtml.default(markdown, {
    embedOrigin: "https://embed.zenn.studio",
  });
};
