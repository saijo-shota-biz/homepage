import { Typography } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import * as React from 'react';
import { FC } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostTitle: FC<Props> = ({ post }) => {
  return (
    <Typography variant="h5" component="div">
      {post.title}
    </Typography>
  );
};
