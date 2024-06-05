import Head from "next/head";

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
const title = "Free 500 NFT Grass Onchain Summer";
const frameImgUrl = `${HOST_URL}/grass-nft.jpg`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="fc:frame" content="Grass Onchain Summer"/>
        <meta name="fc:frame:image" content={frameImgUrl}/>
        <meta name="fc:frame:image:aspect_ratio" content="1:1"/>
        <meta property="fc:frame:button:1" content="Mint For Free (first 500)"/>
        <meta property="fc:frame:button:1:action" content="tx"/>
        <meta 
          property="fc:frame:button:1:target"
          content={`${HOST_URL}/api/frame/op/get-tx-frame`}
        />
      </Head>
      <h1>Transaction Frame</h1>
    </>
  );
}
