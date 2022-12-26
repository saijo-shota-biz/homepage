import { NextPage } from 'next';
import * as React from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { client } from '@/modules/microCMS/microcms';

const Home: NextPage = () => {
  return <></>;
};

export async function getStaticProps() {
  const posts = await client.getList<BlogPost>({ endpoint: 'blogs' });
  return {
    props: {
      posts,
    },
  };
}

export default Home;
