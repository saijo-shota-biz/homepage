import { Box, Stack } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { createSummary } from '@/modules/microCMS/createSummary';
import { client } from '@/modules/microCMS/microcms';
import { PostContentCard } from '@model/PostContentCard';
import { PostHeaderCard } from '@model/PostHeaderCard';
import { PostTocCard } from '@model/PostTocCard';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

const Post: NextPage<Props> = ({ post }) => {
  const summary = createSummary(post.content);

  return (
    <>
      <Head>
        <title>{post.title} - システム屋さいじょう</title>
        <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/posts/${post.id}`} />
        <meta property="og:title" content={`${post.title} - システム屋さいじょう`} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/post-og?id=${post.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="システム屋さいじょう" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saijo_shota" />
      </Head>
      <Stack component={'article'} alignItems={'center'} gap={3} sx={{ width: '100%' }}>
        <PostHeaderCard post={post} />
        <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
          <PostContentCard post={post} />
          <Stack>
            <Box sx={{ position: 'sticky', top: '24px' }}>
              <PostTocCard post={post} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

type Query = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Query> = async () => {
  const listResponse = await client.getList<BlogPost>({ endpoint: 'blogs' });

  return {
    paths: listResponse.contents.map((content) => ({ params: { id: content.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async (context) => {
  const id = context.params?.id;
  const post = await client.getListDetail<BlogPost>({
    endpoint: `blogs`,
    contentId: id!,
  });

  return {
    props: {
      post,
    },
  };
};

export default Post;
