import { Chip } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';

import { Category } from '@/modules/microCMS/BlogPost';

type Props = {
  category: Category;
};

export const CategoryChip: FC<Props> = ({ category }) => {
  return <Chip label={`#${category.name}`} variant="outlined" color="primary" />;
};
