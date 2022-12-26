// @ts-ignore
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../../public/assets/MPLUSRounded1c-Bold-subset.woff', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function handler(req: NextRequest) {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width="256"
          height="256"
          src={`https://avatars.githubusercontent.com/u/60728259?s=400&u=02fe6e5d330a54046e32277e2d434d5fe6813dad&v=4`}
          alt={'avatar'}
        />
        <p
          style={{
            fontWeight: 'bold',
            color: 'transparent',
            background: 'linear-gradient(-45deg, #2AF598, #009EFD)',
            backgroundClip: 'text',
            fontSize: 72,
            marginLeft: '16px',
          }}
        >
          システム屋さいじょう
        </p>
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
