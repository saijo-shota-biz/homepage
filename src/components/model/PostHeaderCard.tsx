import { Card, CardContent, CardMedia } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import * as React from 'react';
import { FC } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { CategoryChipList } from '@model/CategoryChipList';
import { PostDate } from '@model/PostDate';
import { PostTitle } from '@model/PostTitle';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostHeaderCard: FC<Props> = ({ post }) => {
  return (
    <Card
      sx={(theme) => ({
        display: 'flex',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          height: '250px',
        },
        width: '100%',
      })}
    >
      <CardMedia component="img" height="250px" image={post.eyecatch.url} alt={post.title} sx={{ width: 'unset' }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', width: '100%' }}>
        <PostTitle post={post} />
        <PostDate post={post} />
        <CategoryChipList categoryList={post.category} />
      </CardContent>
    </Card>
  );
};
