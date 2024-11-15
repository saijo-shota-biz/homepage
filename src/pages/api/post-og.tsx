import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={searchParams.get('img')!} alt={'eyecatch'} width={1200} height={630} style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            justifyContent: 'center',
            fontSize: 60,
          }}
        >
          <h2>{searchParams.get('title')}</h2>
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            justifyContent: 'space-between',
            fontSize: 40,
          }}
        >
          <h2 style={{ marginLeft: '40px' }}>{searchParams.get('date')}</h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '40px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github.com/saijo-shota-biz.png`}
              alt={'avatar'}
              width="60"
              height="60"
              style={{ marginRight: 10 }}
            />
            <h2>さいじょー</h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
