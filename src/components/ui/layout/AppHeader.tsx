import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';

import { mplusRounded1c } from '@/theme';
import FaceIcon from '@assets/icon白.jpeg';
import Link from '@ui/Link';

export const AppHeader = () => {
  return (
    <Link href={'/blogs/1'} underline={'none'}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: mplusRounded1c.style.fontFamily,
          fontWeight: 'bold',
          color: 'transparent',
          background: 'linear-gradient(-45deg, #2AF598, #009EFD)',
          backgroundClip: 'text',
          textAlign: 'center',
          position: 'relative',
          width: 'fit-content',
        }}
      >
        <Image
          src={FaceIcon}
          alt={'avater'}
          height={64}
          width={64}
          style={{ position: 'absolute', top: '50%', left: -72, transform: 'translate(0, -50%)' }}
        />
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={(theme) => ({
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
            },
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
            },
          })}
        >
          <span>システム屋</span>
          <span>さいじょう</span>
        </Stack>
      </Typography>
    </Link>
  );
};
