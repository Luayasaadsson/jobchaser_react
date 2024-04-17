import { useState, useEffect } from "react";
import JobItem from "../JobItem/JobItem";
import Loader from "../Loader/Loader";
import JobListCSS from "./JobList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import defaultLogo from '../../images/Jobchaser.png';
import { setSortOrder } from '../../store/slices/filterSlice';

interface Job {
  id: string;
  headline: string;
  logo_url: string;
  workplace_address: {
    municipality: string;
  };
  application_deadline: string;
  publication_date: string;
  description: { text: string };
  application_details: { url: string };
  duration: { label: string };
  occupation: { label: string };
  employer: { name: string };
}

const JobList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { searchTerm, categories, sortOrder } = useSelector((state: RootState) => state.filter);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visibleJobsCount, setVisibleJobsCount] = useState(10);
  const [activeSort, setActiveSort] = useState<string>('newest');

  const handleLoadMoreJobs = () => {
    setVisibleJobsCount(prev => prev + 10); // Ökar antalet synliga jobb med 10
  };

  // Funktion för att hantera sorteringsknapptryck
  const handleSortClick = (sortType: string) => {
    setActiveSort(sortType);
    dispatch(setSortOrder(sortType));
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      async function fetchData() {
        const query = searchTerm ? `q=${encodeURIComponent(searchTerm)}` : "";
        const url = `https://jobsearch.api.jobtechdev.se/search?${query}&limit=100`;
        try {
          const response = await fetch(url);
          const data = await response.json();

          const filteredJobs = data.hits.filter((job: Job) =>
            categories.length === 0 || categories.includes(job.occupation.label.toLowerCase())
          );

          filteredJobs.sort((a: Job, b: Job) =>
            sortOrder === 'newest' ?
            new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime() :
            new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
          );

          setJobs(filteredJobs);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      }

      fetchData();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, categories, sortOrder]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={JobListCSS.sortButtonsContainer}>
        <button
          className={`${JobListCSS.sortButton} ${activeSort === 'newest' ? JobListCSS.active : ''}`}
          onClick={() => handleSortClick('newest')}
        >
          NYAST
        </button>
        <button
          className={`${JobListCSS.sortButton} ${activeSort === 'oldest' ? JobListCSS.active : ''}`}
          onClick={() => handleSortClick('oldest')}
        >
          ÄLDST
        </button>
      </div>
      <ul className={JobListCSS.joblist}>
        {jobs.slice(0, visibleJobsCount).map((job) => (
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
        ))}
        {jobs.length > 0 && visibleJobsCount < jobs.length && (
          <button className={JobListCSS.morejobbtn} onClick={handleLoadMoreJobs}>
            Ladda fler jobb
          </button>
        )}
      </ul>
    </div>
  );
};

export default JobList;