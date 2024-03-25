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
}: JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  const heartIcon: IconDefinition = isFavorite ? solidHeart : regularHeart;

  return (
      <div>
    <li className="relative flex flex-col mb-5 p-8 shadow-lg shadow-indigo-500/40 border-l-8 border-indigo-500 rounded-2xl">
      <img src={logoUrl} className="max-w-24 max-h-16 bg-white" />
      <h2 className="m-2 text-2xl font-medium">{headline}</h2>
      <br></br>
      <p className="m-0 text-red-600 font-bold">Plats: {location}</p>
      <p className="m-2 absolute right-2 top-36 text-center"><span className="m-2">Tjänst: <br></br></span> {duration}</p>
      <p className="m-2 font-bold">{employer}</p>
      <p className="m-2 font-bold">{occupation}</p>
      <p className="m-2 absolute right-2 top-28">{new Date(applicationDeadline).toLocaleDateString()}</p>
      <a className="absolute right-1 top-52 text-white bg-blue-600 no-underline rounded-lg w-28 h-8 text-center p-1" href={applicationUrl} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="pr-1" icon={faArrowUpRightFromSquare} />Ansök här</a>
      <p className="w-10/12 max-h-40 overflow-auto"><span className="font-bold block mb-1">Beskrivning:</span> {descriptionText}</p> 
      <button className="bg-none border-none text-4xl absolute right-10 top-16 mt-2 cursor-pointer" onClick={toggleFavorite}>
      <FontAwesomeIcon icon={heartIcon} style={{ color: isFavorite ? 'red' : '' }} />
      </button>
    </li>
      </div>
  );
}

export default JobItem;
