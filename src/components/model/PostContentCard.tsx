import { Box, Card, CardContent } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import { FC } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { PostTocCardWidth } from '@model/PostTocCard';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostContentCard: FC<Props> = ({ post }) => {
  return (
    <Card
      component={'section'}
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${PostTocCardWidth + 32}px)`,
        },
        '& img': { objectFit: 'contain', width: '100%' },
      })}
    >
      <CardContent>
        <Box
          dangerouslySetInnerHTML={{ __html: post.content }}
          sx={{ '& img': { objectFit: 'contain', width: '100%' } }}
        ></Box>
      </CardContent>
    </Card>
  );
};
