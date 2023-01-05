import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { FC, ReactNode } from 'react';

import { AppFooter } from '@ui/layout/AppFooter';
import { AppHeader } from '@ui/layout/AppHeader';

type Props = {
  children: ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        '&': { height: '100dvh' },
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100%',
        }}
      >
        <Stack alignItems={'center'} component={'header'} sx={{ marginY: 4 }}>
          <AppHeader />
        </Stack>
        <Box component={'main'} sx={{ flexGrow: 1, width: '100%' }}>
          {children}
        </Box>
        <Stack alignItems={'center'} component={'footer'} sx={{ marginY: 4 }}>
          <AppFooter />
        </Stack>
      </Stack>
    </Container>
  );
};
