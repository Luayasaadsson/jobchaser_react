import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import NavCSS from "./Nav.module.css";

function Nav(): JSX.Element {
  return (
    <div className={NavCSS.Navcontainer}>
      <h1 className={NavCSS.Jobchasetitle}>JobChaser</h1>
      <div className={NavCSS.Navbuttons}> 
        <a href="#" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Favoriter</span>
          <FontAwesomeIcon icon={faHeart} /></a>
        <Link to="/signin" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Logga in</span>
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;

