import { useLoaderData } from "@remix-run/react";
import { ArticleView } from "~/components/article/articleView";
import { myOctokit } from "~/lib/MyOctokit.server";
import { markdownToHtml } from "~/lib/markdownToHtml.server";

export const loader = async () => {
  const response = await myOctokit.rest.repos.getReadme({
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
  });
  // @ts-ignore
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  const html = await markdownToHtml(markdown);
  return { html };
};

export default function Route() {
  const { html } = useLoaderData<typeof loader>();
  return <ArticleView html={html} />;
}
