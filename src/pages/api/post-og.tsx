import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

// const font = fetch(new URL('../../../public/assets/MPLUSRounded1c-Bold-subset.woff', import.meta.url)).then((res) =>
//   res.arrayBuffer()
// );

export default async function handler(req: NextRequest) {
  // const fontData = await font;

  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title');
  const img = searchParams.get('img');
  const date = searchParams.get('date');

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img!} alt={'eyecatch'} width={1200} height={630} style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        ></div>
        <h2
          style={{
            position: 'absolute',
            width: '100%',
            fontSize: 60,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'space-between',
          }}
        >
          <h2
            style={{
              fontSize: 40,
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            {date}
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github.com/saijo-shota-biz.png`}
              alt={'avatar'}
              width="60"
              height="60"
              style={{ borderRadius: 60, marginRight: 10 }}
            />
            <h2
              style={{
                fontSize: 40,
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              さいじょー
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: 'MPLUSRounded1c',
      //     data: fontData,
      //     style: 'normal',
      //   },
      // ],
    }
  );
}
