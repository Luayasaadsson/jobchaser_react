import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
/* import JobItemCSS from "./JobItem.module.css" */

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
}: 

  JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const heartIcon: IconDefinition = isFavorite ? solidHeart : regularHeart;

  const trimText = (text: string, limit: number) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div>
      <li className="relative flex flex-col mb-5 p-8 shadow-lg shadow-indigo-500/40 border-l-8 border-indigo-500 rounded-2xl">
        <img src={logoUrl} className="max-w-24 max-h-16 bg-white" />
        <h2 className="mt-2 text-1xl">{headline}</h2>
        <p className="m-0 text-red-600">Plats: {location}</p>
        <p className="m-2 absolute right-2 top-36 text-center"><span className="m-2">Tjänst: <br></br></span> {duration}</p>
        <p className="text-sky-500">{employer}</p>
        <p className="text-sky-500">{occupation}</p>
        <p className="m-2 absolute right-2 top-28">{new Date(applicationDeadline).toLocaleDateString()}</p>
        <a className="absolute right-1 top-52 text-white bg-blue-500 hover:bg-sky-700 no-underline rounded-lg w-28 h-8 text-center p-1" href={applicationUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="pr-1" icon={faArrowUpRightFromSquare} />Ansök här</a>
          <div className="w-10/12 overflow-hidden">
          <span className="block mt-2 text-sm">Beskrivning:</span> 
          {isExpanded ? (
          <span className="text-sm">{descriptionText}</span>
          ) : (
          <span className="text-sm">{trimText(descriptionText, 10)}</span>
          )}
        </div>
        <button onClick={toggleExpanded} className="block mt-3 w-24 h-7 rounded-lg border-none cursor-pointer bg-sky-500 hover:bg-sky-700 mb-2 text-white">
          {isExpanded ? 'Läs mindre' : 'Läs mer'}
        </button>
        <button className="bg-none border-none text-4xl absolute right-10 top-16 cursor-pointer" onClick={toggleFavorite}>
          <FontAwesomeIcon icon={heartIcon} style={{ color: isFavorite ? 'red' : '' }} />
        </button>
      </li>
    </div>
  );  
}

export default JobItem;
