import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';

import GitHubIcon from '@assets/github.png';
import TwitterIcon from '@assets/twitter.png';
import Link from '@ui/Link';

export const AppFooter = () => {
  return (
    <Stack gap={2}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2020~ saijo-shota-biz.
      </Typography>
      <Stack direction={'row'} justifyContent={'space-around'}>
        <Link href={'https://twitter.com/saijo_shota'}>
          <Image src={TwitterIcon} alt={'twitter'} width={50} height={50} />
        </Link>
        <Link href={'https://github.com/saijo-shota-biz'}>
          <Image src={GitHubIcon} alt={'github'} width={50} height={50} />
        </Link>
      </Stack>
    </Stack>
  );
};
