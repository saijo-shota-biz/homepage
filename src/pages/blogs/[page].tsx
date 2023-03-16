import { Pagination, PaginationItem, Stack } from '@mui/material';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useMemo } from 'react';

import { createArray } from '@/modules/array/createArray';
import { BlogPost } from '@/modules/microCMS/BlogPost';
import { client } from '@/modules/microCMS/microcms';
import { PostListItemCard } from '@model/PostListItemCard';
import Link from '@ui/Link';

type Props = {
  page: number;
  blogPostList: MicroCMSListResponse<BlogPost>;
};

const DISPLAY_PER_PAGE = 10;
const DESCRIPTION = 'フリーランスのフロントエンドエンジニア React/Next/Typescript';

const Page: NextPage<Props> = ({ page, blogPostList }) => {
  const pageCount = useMemo(() => Math.ceil(blogPostList.totalCount / DISPLAY_PER_PAGE), [blogPostList]);

  return (
    <>
      <Head>
        <title>システム屋さいじょう</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/blogs/${page}`} />
        <meta property="og:title" content={`システム屋さいじょう`} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/home-og`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="システム屋さいじょう" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saijo_shota" />
      </Head>
      <Stack gap={2} height={'100%'}>
        <Stack component={'ul'} padding={0} flexGrow={1}>
          <Stack component={'li'} gap={3}>
            {blogPostList.contents.map((post) => (
              <PostListItemCard key={post.id} post={post} />
            ))}
          </Stack>
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Pagination
            color="primary"
            variant={'outlined'}
            count={pageCount}
            page={page}
            renderItem={(item) => <PaginationItem component={Link} href={`/blogs/${item.page}`} {...item} />}
          />
        </Stack>
      </Stack>
    </>
  );
};

type Query = { page: string };

export const getStaticPaths: GetStaticPaths<Query> = async () => {
  const listResponse = await client.getList<BlogPost>({ endpoint: 'blogs' });
  const pageCount = listResponse.totalCount / DISPLAY_PER_PAGE;

  return {
    paths: createArray(0, pageCount).map((page) => ({ params: { page: `${page + 1}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async (context) => {
  const page = Number(context.params?.page);
  const posts = await client.getList<BlogPost>({
    endpoint: 'blogs',
    queries: { offset: (page - 1) * DISPLAY_PER_PAGE, limit: DISPLAY_PER_PAGE, orders: 'priority,-createdAt' },
  });

  return {
    props: {
      page,
      blogPostList: posts,
    },
  };
};

export default Page;
