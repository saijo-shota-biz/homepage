import { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk/dist/cjs/types';

export type Eyecatch = MicroCMSImage;

export type Category = MicroCMSListContent & {
  name: string;
};

export type BlogPost = {
  title: string;
  content: string;
  eyecatch: Eyecatch;
  category: Category[];
};
