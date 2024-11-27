import { Link, useLoaderData } from '@remix-run/react';
import { myOctokit } from '~/lib/MyOctokit.server';
import { markdownToHtml } from '~/lib/markdownToHtml.server';
import { View } from '~/routes/_app._index._$sha/view';

export const handle = {
  Breadcrumb: () => <Link to={"/about"}>自己紹介</Link>,
};

export const loader = async () => {
  const response = await myOctokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    path: "me/self-introduce.md",
  });
  // @ts-ignore
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  const html = markdownToHtml(markdown);
  return { html };
};

export default function Route() {
  const { html } = useLoaderData<typeof loader>();
  return <View html={html} />;
}
