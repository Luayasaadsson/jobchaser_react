import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

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
    <li className="job-item">
      <img src={logoUrl} className="job-logo" />
      <div className="job-info">
        <h2 className='job-headline'>{headline}</h2>
        <br></br>
        <p>Plats: {location}</p>
        <p className='job-duration'><span className='job-duration-title'>Tjänst:</span> {duration}</p>
        <p>{occupation}</p>
        <p>{employer}</p>
        <p>{new Date(applicationDeadline).toLocaleDateString()}</p>
        <a href={applicationUrl} target="_blank" rel="noopener noreferrer">Ansök här</a>
        <p className='job-description'><span className='job-description-title'>Beskrivning:</span> <br></br>{descriptionText}</p> 
        <button className="job-btn" onClick={toggleFavorite}>
          <FontAwesomeIcon icon={heartIcon} style={{ color: isFavorite ? 'red' : '' }} />
        </button>
      </div>
    </li>
  );
}

export default JobItem;
