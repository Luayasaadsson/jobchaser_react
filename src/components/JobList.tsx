import { useState, useEffect } from 'react';
import JobItem from './JobItem';

interface Job {
  id: string;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  postedAt: string;
}

function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('/jobs_data.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <ul className="job-list">
      {jobs.length > 0 ? (
        jobs.map(job => <JobItem key={job.id} {...job} />)
      ) : (
        <li>Inga jobb tillgängliga.</li>
      )}
    </ul>
  );
}

export default JobList;