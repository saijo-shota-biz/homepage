import type { MetaFunction } from "@vercel/remix";
import { View } from "~/routes/_app._index/view";
import { title as baseTitle } from "~/routes/_app/route";
import { useAppLoaderData } from "~/routes/_app/useAppLoaderData";

const title = `ブログ - ${baseTitle}`;
const description = "saijo shotaのブログ記事の一覧です。プライベートのことを書いています。";

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

export default function Route() {
  const { list } = useAppLoaderData();
  return <View list={list.filter((item) => item.path.startsWith("blog"))} />;
}
