/* import { useState } from "react"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBookmark as solidBookMark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookMark } from "@fortawesome/free-regular-svg-icons"; */
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
  // Tillstånd för att hantera favoritmarkering.
/*   const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Funktion för att växla favoritstatus.
  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  }; */

/*   const favIcon: IconDefinition = isFavorite ? solidBookMark : regularBookMark; */

  // Hanterar klick på favoritknappen.
/*   const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Förhindrar att länken aktiveras när favoritknappen klickas
    toggleFavorite();
  };
 */
  return (
    <div className={JobItemCSS.jobitem}>
      <div className={JobItemCSS.header}>
        <img src={logoUrl} className={JobItemCSS.joblogo} alt="Logo" />
      </div>
      {/* Länk till jobbansökan */}
      <a href={applicationUrl} className={JobItemCSS.jobitemLink} target="_blank" rel="noopener noreferrer">
        <h2 className={JobItemCSS.jobheadline}>{headline}</h2>
      </a>
      {/* Detaljer */}
      <ul className={JobItemCSS.details}>
        {/* Plats */}
        <li className={JobItemCSS.joblocation}>
          <FontAwesomeIcon icon={faLocationDot} className={JobItemCSS['jobdate-icon']} />
          {location}
        </li>
        {/* Arbetsgivare */}
        <li className={JobItemCSS.jobemployer}>{employer}</li>
        {/* Publiceringsdatum och sista ansökningsdag */}
        <li className={JobItemCSS.jobdate}>
          <FontAwesomeIcon icon={faClock} className={JobItemCSS['jobdate-icon']} />
          Publicerad {new Date().toLocaleDateString("sv-SE")}, Ansök senast {new Date(applicationDeadline).toLocaleDateString("sv-SE")}
        </li>
      </ul>
      {/* Favoritknapp */}
      {/* <button onClick={handleFavoriteClick} className={JobItemCSS.favoriteBtn}>
        <FontAwesomeIcon icon={favIcon} />
      </button> */}
      <a href={applicationUrl} className={JobItemCSS.applyBtn} target="_blank" rel="noopener noreferrer">
        Besök webbplatsen
      </a>
    </div>
  );
}

export default JobItem;