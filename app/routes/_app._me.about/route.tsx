import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { myOctokit } from "~/lib/MyOctokit.server";
import { markdownToHtml } from "~/lib/markdownToHtml.server";
import { View } from "~/routes/_app._index._$sha/view";
import { title as baseTitle } from "~/routes/_app/route";

export const handle = {
  Breadcrumb: () => <Link to={"/about"}>自己紹介</Link>,
};

const title = `自己紹介 - ${baseTitle}`;
const description =
  "saijo shotaの自己紹介です。読んでいただければ大体どんな人間かがわかると思います。もしよかったらX(Twitter)で連絡していただければうれしいです。";

export const meta: MetaFunction = () => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:site_name", content: title },
  { property: "og:type", content: "website" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
];

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
