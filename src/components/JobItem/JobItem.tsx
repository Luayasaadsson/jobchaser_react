import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
/* import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; */
import { faBookmark as solidBookMark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookMark } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import JobItemCSS from "./JobItem.module.css";

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
  applicationDeadline,
  employer,
  applicationUrl,
}: JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  /*   const [isExpanded, setIsExpanded] = useState(false);
   */
  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  /*   const toggleExpanded = () => setIsExpanded(!isExpanded); */

  const favIcon: IconDefinition = isFavorite ? solidBookMark : regularBookMark;

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Förhindra att länken aktiveras när favoritknappen klickas
    toggleFavorite();
  };

  /*  const trimText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }; */

  return (
    <div className={JobItemCSS.jobitem}>
      <a href={applicationUrl} className={JobItemCSS.jobitemLink} target="_blank" rel="noopener noreferrer">
        <div className={JobItemCSS.header}>
          <img src={logoUrl} className={JobItemCSS.joblogo} alt="Logo" />
        </div>
        <h2 className={JobItemCSS.jobheadline}>{headline}</h2>
      </a>
      <ul className={JobItemCSS.details}>
        <li className={JobItemCSS.joblocation}>
          <FontAwesomeIcon icon={faLocationDot} className={JobItemCSS['jobdate-icon']} />
          {location}
        </li>
        <li className={JobItemCSS.jobemployer}>{employer}</li>
        <li className={JobItemCSS.jobdate}>
          <FontAwesomeIcon icon={faClock} className={JobItemCSS['jobdate-icon']} />
          Publicerad {new Date().toLocaleDateString("sv-SE")}, Ansök senast {new Date(applicationDeadline).toLocaleDateString("sv-SE")}
        </li>
      </ul>
      <button onClick={handleFavoriteClick} className={JobItemCSS.favoriteBtn}>
        <FontAwesomeIcon icon={favIcon} />
      </button>
    </div>
  );
}

export default JobItem;