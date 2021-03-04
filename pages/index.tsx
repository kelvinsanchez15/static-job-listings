import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-yellow-400 rounded-3xl">hello tailwind</div>
    </>
  );
};

export default Home;
