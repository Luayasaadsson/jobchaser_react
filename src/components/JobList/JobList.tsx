import { useState, useEffect } from "react";
import JobItem from "../JobItem/JobItem";
import Loader from "../Loader/Loader";
import JobListCSS from "./JobList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/store";
import defaultLogo from './../../images/Jobchaser.png';

interface Job {
  id: string;
  headline: string;
  logo_url: string;
  workplace_address: { municipality: string };
  application_deadline: string;
  description: { text: string };
  application_details: { url: string };
  duration: { label: string };
  occupation: { label: string };
  employer: { name: string };
}

const JobList = (): JSX.Element => {
  // Hämtar både sökterm och filter från Redux store
  const { searchTerm, categories } = useSelector(
    (state: RootState) => state.filter
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visibleJobsCount, setVisibleJobsCount] = useState(10);

  const handleLoadMoreJobs = () => {
    setVisibleJobsCount((prevVisibleJobsCount) => prevVisibleJobsCount + 10);
  };

  useEffect(() => {
    const getData = async () => {
      const query = searchTerm ? `q=${encodeURIComponent(searchTerm)}` : "";
      const url = `https://jobsearch.api.jobtechdev.se/search?${query}&limit=100`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response Jobs:", data.hits);
        console.log("Categories for Filtering:", categories);

        let filteredJobs = data.hits;
        if (categories.length > 0) {
          filteredJobs = filteredJobs.filter((job: Job) =>
            categories.some((category) =>
              job.occupation.label
                .toLowerCase()
                .includes(category.toLowerCase())
            )
          );
        }
        console.log("Filtered Jobs:", filteredJobs);

        // Söktermfiltreringen behåller jag som en extra filtrering.
        if (searchTerm) {
          filteredJobs = filteredJobs.filter(
            (job: Job) =>
              job.headline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              job.employer?.name
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              job.description?.text
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              job.occupation?.label
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              job.workplace_address?.municipality
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              job.duration?.label
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              job.application_details?.url
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
          );
        }

        setJobs(filteredJobs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    getData();
  }, [searchTerm, categories]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={JobListCSS.joblist}>
      {jobs.length > 0 ? (
        jobs
          .slice(0, visibleJobsCount)
          .map((job) => (
            <JobItem
              key={job.id}
              logoUrl={job.logo_url || defaultLogo}
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
      {jobs.length > 0 && visibleJobsCount < jobs.length && (
        <button className={JobListCSS.morejobbtn} onClick={handleLoadMoreJobs}>
          Ladda fler jobb
        </button>
      )}
    </ul>
  );
};

export default JobList;
