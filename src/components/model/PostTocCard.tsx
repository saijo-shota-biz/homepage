import { Check, Circle } from '@mui/icons-material';
import { Card, CardContent, Stack, Step, StepIconProps, StepLabel, Stepper, Typography } from '@mui/material';
import { MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';
import { FC, useCallback, useEffect, useState } from 'react';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { createTOC } from '@/modules/microCMS/createTOC';
import Link from '@ui/Link';

type Props = {
  post: BlogPost & MicroCMSListContent;
};

export const PostTocCardWidth = 300;

export const PostTocCard: FC<Props> = ({ post }) => {
  const toc = createTOC(post.content);

  const [activeTocIndex, setActiveTocIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    const nextToc = toc[activeTocIndex + 1];
    if (!nextToc) {
      return;
    }
    const nextTocPosition = document.getElementById(nextToc.id)?.offsetTop || 0;
    // 画面いっぱいじゃなくて近づいてきたかなくらいで次に行くようにする
    if (scrollPosition > nextTocPosition - 10) {
      setActiveTocIndex((prevState) => prevState + 1);
    }

    const prevToc = toc[activeTocIndex - 1];
    if (!prevToc) {
      return;
    }
    const prevTocPosition = document.getElementById(prevToc.id)?.offsetTop || 0;
    if (scrollPosition < prevTocPosition - 10) {
      setActiveTocIndex((prevState) => prevState - 1);
    }
  }, [activeTocIndex]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const scrollPosition = window.scrollY;
    let currentTocIndex = 0;
    toc.some((e, i) => {
      const tocPosition = document.getElementById(e.id)?.offsetTop || 0;
      if (scrollPosition > tocPosition - 10) {
        currentTocIndex = i;
        return false;
      } else {
        return true;
      }
    });
    setActiveTocIndex(currentTocIndex);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Card
      component={'aside'}
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
        [theme.breakpoints.up('md')]: {
          width: `${PostTocCardWidth}px`,
        },
      })}
    >
      <CardContent>
        <Typography variant={'subtitle2'} gutterBottom>
          目次
        </Typography>
        <Stack gap={2}>
          <Stepper activeStep={activeTocIndex} orientation="vertical">
            {toc.map((e) => (
              <Step key={e.id}>
                <Link key={e.id} href={`/posts/${post.id}#${e.id}`} underline={'none'}>
                  <StepLabel
                    StepIconComponent={e.name === 'h2' ? H2StepIcon : H3StepIcon}
                    StepIconProps={{ id: e.name }}
                    sx={{ cursor: 'pointer' }}
                  >
                    {e.text}
                  </StepLabel>
                </Link>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </CardContent>
    </Card>
  );
};

const H2StepIcon = ({ active, completed }: StepIconProps) => {
  if (active) {
    return <Circle color={'primary'} sx={{ fontSize: '1rem', margin: '4px' }} />;
  }
  if (completed) {
    return <Check color={'primary'} sx={{ fontSize: '1rem', margin: '4px' }} />;
  }
  return <Circle color={'disabled'} sx={{ fontSize: '1rem', margin: '4px' }} />;
};

const H3StepIcon = ({ active, completed }: StepIconProps) => {
  if (active) {
    return <Circle color={'primary'} sx={{ fontSize: '0.75rem', margin: '6px', opacity: '0.75' }} />;
  }
  if (completed) {
    return <Check color={'primary'} sx={{ fontSize: '0.75rem', margin: '6px', opacity: '0.75' }} />;
  }
  return <Circle color={'disabled'} sx={{ fontSize: '0.75rem', margin: '6px', opacity: '0.75' }} />;
};
