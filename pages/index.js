import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Herman Cai's Portfolio</title>
        <meta name="description" content="Herman Cai's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-blue-500">hello world</h1>
    </div>
  );
}
