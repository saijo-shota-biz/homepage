import { Link, useLoaderData } from '@remix-run/react';
import { loaderFunction } from '~/routes/_app._index._$sha/loader.server';
import { View } from '~/routes/_app._index._$sha/view';

export const handle = {
  Breadcrumb: ({ sha }: Awaited<ReturnType<typeof loader>>) => <Link to={`/tech/${sha}`}>{sha}</Link>,
};

export const loader = loaderFunction;

export default function Route() {
  const { html } = useLoaderData<typeof loader>();
  return <View html={html} />;
}
