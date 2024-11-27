import { View } from '~/routes/_app._index/view';
import { useAppLoaderData } from '~/routes/_app/useAppLoaderData';

export default function Route() {
  const { list } = useAppLoaderData();
  return <View list={list.filter((item) => item.path.startsWith("tech"))} />;
}
