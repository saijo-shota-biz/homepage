import { Link, useLoaderData } from "@remix-run/react";
import { loaderFunction } from "~/routes/_app._index._$sha/loader.server";
import { metaFunction } from "~/routes/_app._index._$sha/meta";
import { View } from "~/routes/_app._index._$sha/view";

export const handle = {
  Breadcrumb: ({ sha }: Awaited<ReturnType<typeof loader>>) => <Link to={`/idea/${sha}`}>{sha.substring(0, 7)}</Link>,
};

export const meta = metaFunction;

export const loader = loaderFunction;

export default function Route() {
  const { html } = useLoaderData<typeof loader>();
  return <View html={html} />;
}
