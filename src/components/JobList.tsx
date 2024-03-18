import { useState, useEffect } from 'react';
import JobItem from './JobItem';
import Loader from '../Loader';

interface Job {
  id: string;
  headline: string;
  logoUrl: string;
  location: string;
  applicationDeadline: string;
  descriptionText: string;
  applicationUrl: string;
  duration: string;
  occupations: string;
  employer: string;
  [key: string]: string;
}


interface JobListProps {
  searchTerm: string;
}

function JobList({ searchTerm }: JobListProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);

  const getData = async () => {
    const url = 'https://jobsearch.api.jobtechdev.se/search?q=javascript&limit=100';
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filteredJobs = data.hits.filter((job: Job) => job.logo_url);
      setJobs(filteredJobs);
      console.log(filteredJobs);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  

  const filteredJobs = jobs.filter(job => (
    Object.keys(job).some(key =>
      typeof job[key] === 'string' && job[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  ));

  if (isLoading) {
    return <Loader />;
  }

 return (
  <ul className="job-list">
    {filteredJobs.length > 0 ? (
      filteredJobs.map(job => (
        <JobItem
          key={job.id}
          logoUrl={job.logo_url}
          headline={job.headline}
          location={job.workplace_address.municipality}
          duration={job.duration.label}
          employer={job.employer.name}
          occupation={job.occupation.label}
          applicationDeadline={job.application_deadline}
          descriptionText={job.description.text}
          applicationUrl={job.application_details.url}
        />
      ))
    ) : (
      <li>Inga jobb tillgängliga.</li>
    )}
  </ul>
);
}

export default JobList;
