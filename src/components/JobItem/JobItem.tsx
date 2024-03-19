import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import JobItemCSS from "./JobItem.module.css"

interface JobItemProps {
  headline: string;
  logoUrl: string;
  location: string;
  applicationDeadline: string;
  descriptionText: string;
  applicationUrl: string;
  duration: string;
  employer: string;
  occupation: string;
}

function JobItem({
  headline,
  logoUrl,
  location,
  duration,
  employer,
  applicationDeadline,
  descriptionText,
  applicationUrl,
  occupation,
}: JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  const heartIcon: IconDefinition = isFavorite ? solidHeart : regularHeart;

  return (
      <div className={JobItemCSS.jobcontainer}>
    <li className={JobItemCSS.jobitem}>
      <img src={logoUrl} className={JobItemCSS.joblogo} />
      <h2 className={JobItemCSS.jobheadline}>{headline}</h2>
      <br></br>
      <p className={JobItemCSS.joblocation}>Plats: {location}</p>
      <p className={JobItemCSS.jobduration}><span className={JobItemCSS.jobdurationtitle}>Tjänst: <br></br></span> {duration}</p>
      <p className={JobItemCSS.jobemployer}>{employer}</p>
      <p className={JobItemCSS.joboccupation}>{occupation}</p>
      <p className={JobItemCSS.jobdate}>{new Date(applicationDeadline).toLocaleDateString()}</p>
      <a className={JobItemCSS.applybtn} href={applicationUrl} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className={JobItemCSS.applybtnicon} icon={faArrowUpRightFromSquare} />Ansök här</a>
      <p className={JobItemCSS.jobdescription}><span className={JobItemCSS.jobdescriptiontitle}>Beskrivning:</span> {descriptionText}</p> 
      <button className={JobItemCSS.jobbtn} onClick={toggleFavorite}>
      <FontAwesomeIcon icon={heartIcon} style={{ color: isFavorite ? 'red' : '' }} />
      </button>
    </li>
      </div>
  );
}

export default JobItem;
