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

interface JobListProps {
  searchTerm: string;
}

function JobList({ searchTerm }: JobListProps): JSX.Element {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('/jobs_data.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const filteredJobs = jobs.filter(job => {
    return Object.values(job).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <ul className="job-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map(job => <JobItem key={job.id} {...job} />)
      ) : (
        <li>Inga jobb tillgängliga.</li>
      )}
    </ul>
  );
}

export default JobList;