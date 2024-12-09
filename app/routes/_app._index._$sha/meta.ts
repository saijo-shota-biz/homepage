import type { UIMatch } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import type { loaderFunction } from "~/routes/_app._index._$sha/loader.server";
import { title as baseTitle, type loader } from "~/routes/_app/route";

export const metaFunction: MetaFunction<typeof loaderFunction> = ({ data, matches }) => {
  const rootLoaderData = (matches.find((match) => match.id === "routes/_app") as UIMatch<typeof loader>).data;
  const item = rootLoaderData.list.find((item) => item.sha === data?.sha);
  const title = `${item?.title} - ${baseTitle}`;
  const description = `「${item?.title}」を書きました。よかったら読んでください。`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:site_name", content: title },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};
