import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

interface JobItemProps {
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

function JobItem({ company, logo, position, ...rest }: JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  const heartIcon: IconDefinition = isFavorite ? solidHeart : regularHeart;

  return (
    <li className="job-item">
<img src={`/${logo}`} alt={`Logotyp för ${company}`} className="job-logo" />
      <div className="job-info">
        <h2>{company}</h2>
        <p>{position}</p>
        <p>{rest.role}</p>
        <p>{rest.level}</p>
        <p>{rest.contract}</p>
        <p>{rest.location}</p>
        <p>{rest.languages.join(', ')}</p>
        <p>{rest.tools.join(', ')}</p>
        <p>{rest.postedAt}</p>
        <button className="job-btn" onClick={toggleFavorite}>
          <FontAwesomeIcon icon={heartIcon} style={{ color: isFavorite ? 'red' : '' }} />
        </button>
      </div>
    </li>
  );
}

export default JobItem;