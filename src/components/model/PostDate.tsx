import { Typography } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import * as React from 'react';
import { FC } from 'react';

import { formatDate } from '@/modules/date/formatDate';
import { BlogPost } from '@/modules/microCMS/BlogPost';


type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostDate: FC<Props> = ({ post }) => {
  return (
    <Typography variant="caption" color="text.secondary">
      {`投稿日 ${formatDate(post.createdAt)}`}
    </Typography>
  );
};
