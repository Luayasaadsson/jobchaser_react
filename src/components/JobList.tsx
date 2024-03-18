import { useState, useEffect } from 'react';
import JobItem from './JobItem';
import Loader from '../Loader';

interface Job {
  id: string;
  headline: string;
  logo_url: string;
  workplace_address: {
    municipality: string;
  };
  application_deadline: string;
  description: {
    text: string;
  };
  application_details: {
    url: string;
  };
  duration: {
    label: string;
  };
  occupation: {
    label: string;
  };
  employer: {
    name: string;
  };
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
    job.headline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.employer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description?.text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.occupation?.label?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.workplace_address?.municipality?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (job.duration?.label?.toLowerCase().includes(searchTerm.toLowerCase()) || false) || 
    (job.application_details?.url?.toLowerCase().includes(searchTerm.toLowerCase()) || false) 
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
