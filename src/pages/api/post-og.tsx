import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

import { BlogPost } from '@/modules/microCMS/BlogPost';
import { client } from '@/modules/microCMS/microcms';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../../public/assets/MPLUSRounded1c-Bold-subset.woff', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('id');

  const post = await client.getListDetail<BlogPost>({ endpoint: 'blogs', contentId: postId! });

  return new ImageResponse(
    (
      <div style={{ display: 'flex', position: 'relative' }}>
        <img src={post.eyecatch.url} alt={'eyecatch'} height={630} width={1200} style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '420px',
            width: '990px',

            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',

            borderRadius: '16px',
          }}
        >
          <p
            style={{
              fontSize: '96px',
            }}
          >
            {post.title}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
      fonts: [
        {
          name: 'MPLUSRounded1c',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
