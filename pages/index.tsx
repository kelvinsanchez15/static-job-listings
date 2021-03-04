import Head from 'next/head';
import type { NextPage } from 'next';
import jobs from '../data.json';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Static Job Listings</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className=" bg-cyan bg-header-mobile sm:bg-header-desktop bg-center bg-cover h-156px" />
      <div className="w-full p-28">
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Home;
