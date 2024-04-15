import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavCSS from "./Nav.module.css";
import logoImage from "./../../images/Jobchaser-logo2.png";

function Nav(): JSX.Element {
  return (
    <div className={NavCSS.Navcontainer}>
      <Link
        to="/"
        className={`${NavCSS.Jobchasertitle} ${NavCSS.resetButton}`}
        role="button">
        <img
          className={NavCSS.logoImage}
          src={logoImage}
          alt="JobChaser Logo"
        />
      </Link>
      <div className={NavCSS.Navbuttons}>
        <Link to="/favorites" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Favoriter</span>
          <FontAwesomeIcon icon={faBookmark} />
        </Link>
        <Link to="/jobs" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Lediga jobb</span>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
        <Link to="/signin" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Logga in</span>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
