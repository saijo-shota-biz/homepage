export const markdownToHtml = async (markdown: string) => {
  const module = await import("zenn-markdown-html");
  // @ts-ignore zenn-markdown-htmlを動的インポートすると以下のような型で取得される
  // {
  //   __esModule: true,
  //   default: {
  //     default: [Function: markdownToHtml],
  //     markdownToSimpleHtml: [Getter]
  //   },
  //   markdownToSimpleHtml: [Function: markdownToSimpleHtml]
  // }
  const zennMarkdownHtml = module.default.default;
  return zennMarkdownHtml(markdown, {
    embedOrigin: "https://embed.zenn.studio",
  });
};
