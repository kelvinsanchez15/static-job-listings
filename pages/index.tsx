import { useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import jobs from '../data.json';
import Card from '../components/Card';
import TagFilter from '../components/TagFilter';

const Home: NextPage = () => {
  const [selectedJobTags, setSelectedJobTags] = useState<string[]>([]);

  const filteredJobs = jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return selectedJobTags.every((tag) => jobTags.includes(tag));
  });

  return (
    <>
      <Head>
        <title>Static Job Listings</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="bg-cyan bg-header-mobile sm:bg-header-desktop bg-center bg-cover h-156px mb-12" />

      <div className="w-full px-6 lg:px-20 xl:px-40">
        {selectedJobTags.length > 0 && (
          <TagFilter
            selectedJobTags={selectedJobTags}
            setSelectedJobTags={setSelectedJobTags}
          />
        )}

        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            job={job}
            selectedJobTags={selectedJobTags}
            setSelectedJobTags={setSelectedJobTags}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
