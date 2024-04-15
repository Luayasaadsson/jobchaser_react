import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as solidBookMark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookMark } from "@fortawesome/free-regular-svg-icons";
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
  duration,
  employer,
  applicationDeadline,
  descriptionText,
  applicationUrl,
  occupation,
}: JobItemProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFavorite = (): void => {
    setIsFavorite((prevState: boolean) => !prevState);
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const favIcon: IconDefinition = isFavorite ? solidBookMark : regularBookMark;

  const trimText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div>
      <li className={JobItemCSS.jobitem}>
        <img src={logoUrl} className={JobItemCSS.joblogo} />
        <h2 className={JobItemCSS.jobheadline}>{headline}</h2>
        <p className={JobItemCSS.joblocation}>Plats: {location}</p>
        <p className={JobItemCSS.jobduration}>
          <span className={JobItemCSS.jobdurationtitle}>
            Tjänst: <br></br>
          </span>{" "}
          {duration}
        </p>
        <p className={JobItemCSS.jobemployer}>{employer}</p>
        <p className={JobItemCSS.joboccupation}>{occupation}</p>
        <p className={JobItemCSS.jobdate}>
          {new Date(applicationDeadline).toLocaleDateString()}
        </p>
        <a
          className={JobItemCSS.applybtn}
          href={applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={JobItemCSS.applybtnicon}
            icon={faArrowUpRightFromSquare}
          />
          Ansök här
        </a>
        <div className={JobItemCSS.jobdescription}>
          <span className={JobItemCSS.jobdescriptiontitle}>Beskrivning:</span>
          {isExpanded ? (
            <span className={JobItemCSS.jobdescription1}>
              {descriptionText}
            </span>
          ) : (
            <span className={JobItemCSS.jobdescription2}>
              {trimText(descriptionText, 10)}
            </span>
          )}
        </div>
        <button
          onClick={toggleExpanded}
          className={JobItemCSS.jobdescriptiontogglebtn}
        >
          {isExpanded ? "Läs mindre" : "Läs mer"}
        </button>
        <button className={JobItemCSS.jobbtn} onClick={toggleFavorite}>
          <FontAwesomeIcon icon={favIcon} />
        </button>
      </li>
    </div>
  );
}

export default JobItem;
