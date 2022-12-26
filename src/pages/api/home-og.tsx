// @ts-ignore
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
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
        <img width="256" height="256" src={`https://github.com/saijo-shota-biz.png`} alt={'avatar'} />
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
    }
  );
}
