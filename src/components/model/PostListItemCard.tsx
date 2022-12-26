import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import * as React from 'react';
import { FC } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { CategoryChipList } from '@model/CategoryChipList';
import { PostDate } from '@model/PostDate';
import { PostSummary } from '@model/PostSummary';
import { PostTitle } from '@model/PostTitle';
import Link from '@ui/Link';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostListItemCard: FC<Props> = ({ post }) => {
  return (
    <Card>
      <Link href={`/posts/${post.id}`} underline={'none'} color={'inherit'}>
        <CardActionArea
          sx={(theme) => ({
            display: 'flex',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              height: '450px',
            },
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
              height: '250px',
            },
          })}
        >
          <CardMedia component="img" height="250px" image={post.eyecatch.url} alt={post.title} />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
            <PostTitle post={post} />
            <PostDate post={post} />
            <PostSummary post={post} />
            <CategoryChipList categoryList={post.category} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
