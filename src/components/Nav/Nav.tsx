import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import NavCSS from "./Nav.module.css";

function Nav() {
  return (
    <div className={NavCSS.Navcontainer}>
      <h1 className={NavCSS.Jobchasetitle}>JobChaser</h1>
      <div className={NavCSS.Navbuttons}> 
        <a href="#" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Favoriter</span>
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="#" target="_blank" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Logga in</span>
          <FontAwesomeIcon icon={faSignInAlt} />
        </a>
      </div>
    </div>
  );
}

export default Nav;

