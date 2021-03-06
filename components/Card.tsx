interface Job {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default function Card({
  job,
  selectedJobTags,
  setSelectedJobTags,
}: {
  job: Job;
  selectedJobTags: string[];
  setSelectedJobTags: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleTagClick = (tag: string) => {
    return (
      !selectedJobTags.includes(tag) &&
      setSelectedJobTags([...selectedJobTags, tag])
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center bg-white rounded-md 
      p-4 lg:p-7 mb-12 lg:mb-6 shadow-lg ${
        job.featured && 'border-l-4 border-cyan'
      }`}
    >
      {/* Company logo */}
      <div className="mr-5 -mt-11 lg:mt-0">
        <img
          className="w-14 lg:w-auto"
          src={job.logo}
          alt="company logo"
          width={88}
          height={88}
        />
      </div>
      {/* Job info */}
      <div className="flex-grow flex flex-col justify-around h-24">
        <div>
          <span className="text-cyan text-sm font-bold mr-4">
            {job.company}
          </span>
          {job.new && (
            <span className="bg-cyan text-white text-xs px-3 py-2 mr-2 rounded-xl inline-block leading-1 h-7">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="bg-cyan-darkest text-white text-xs px-3 py-2 rounded-xl inline-block leading-1 h-7">
              FEATURED
            </span>
          )}
        </div>

        <h5 className="font-bold text-black hover:text-cyan cursor-pointer">
          {job.position}
        </h5>
        <p className="text-gray-400 text-sm">{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
      </div>

      <hr className="mt-4 mb-2 lg:hidden" />

      {/* Job tags */}
      <div>
        {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => (
          <button
            key={tag}
            className="mr-4 lg:ml-4 mb-2 mt-2 p-2 text-cyan text-sm font-semibold bg-cyan-light rounded-sm hover:bg-cyan hover:text-white cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
