import { Stack } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';

import { Category } from '@/modules/microCMS/BlogPost';
import { CategoryChip } from '@model/CategoryChip';

type Props = {
  categoryList: Category[];
};

export const CategoryChipList: FC<Props> = ({ categoryList }) => {
  return (
    <Stack direction={'row'} gap={0.5}>
      {categoryList.map((category) => (
        <CategoryChip key={category.id} category={category} />
      ))}
    </Stack>
  );
};
