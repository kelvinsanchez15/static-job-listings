export default function Card({ job }) {
  return (
    <div
      id="card"
      className="flex items-center bg-white rounded-md border-l-4 border-cyan p-6 mb-6 shadow-lg"
    >
      <div id="logo" className="mr-5">
        <img src={job.logo} alt="company logo" />
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

        <h5 id="job-position" className="font-bold text-black">
          {job.position}
        </h5>
        <p className="text-gray-400 text-sm">{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
      </div>
      <div id="tags">
        {[job.role, job.level, ...job.languages].map((tag) => (
          <span
            key={tag}
            className="ml-4 p-2 text-cyan text-sm font-semibold bg-cyan-light rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
