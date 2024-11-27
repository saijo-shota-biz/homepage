import { Link } from '@remix-run/react';
import { View } from '~/routes/_app._index/view';
import { useAppLoaderData } from '~/routes/_app/useAppLoaderData';

export const handle = {
  Breadcrumb: () => <Link to={"/blog"}>blog</Link>,
};

export default function Route() {
  const { list } = useAppLoaderData();
  return <View list={list.filter((item) => item.path.startsWith("blog"))} />;
}
