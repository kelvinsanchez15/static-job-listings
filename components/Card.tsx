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
      id="card"
      className={`flex items-center bg-white rounded-md 
      p-6 mb-6 shadow-lg ${job.featured && 'border-l-4 border-cyan'}`}
    >
      <div id="logo" className="mr-5">
        <img src={job.logo} alt="company logo" width="88px" height="88px" />
      </div>
      <div
        id="job-info"
        className="flex-grow flex flex-col justify-around h-24"
      >
        <div>
          <span id="company-name" className="text-cyan text-sm font-bold mr-4">
            {job.company}
          </span>
          {job.new && (
            <span className="bg-cyan text-white text-xs px-2 py-1 mr-2 rounded-xl">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="bg-cyan-darkest text-white text-xs px-2 py-1 rounded-xl">
              FEATURED
            </span>
          )}
        </div>

        <h5
          id="job-position"
          className="font-bold text-black hover:text-cyan cursor-pointer"
        >
          {job.position}
        </h5>
        <p className="text-gray-400 text-sm">{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
      </div>
      <div id="tags">
        {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => (
          <button
            key={tag}
            className="ml-4 p-2 text-cyan text-sm font-semibold bg-cyan-light rounded-sm hover:bg-cyan hover:text-white cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
