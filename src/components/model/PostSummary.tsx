import { Typography } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import * as React from 'react';
import { FC } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { createSummary } from '@/modules/microCMS/createSummary';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostSummary: FC<Props> = ({ post }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={(theme) => ({
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
          WebkitLineClamp: 2,
        },
        [theme.breakpoints.up('md')]: {
          WebkitLineClamp: 4,
        },
      })}
    >
      {createSummary(post.content)}
    </Typography>
  );
};
