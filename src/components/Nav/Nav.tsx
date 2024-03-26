import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import NavCSS from "./Nav.module.css";

function Nav(): JSX.Element {
  return (
    <div className={NavCSS.Navcontainer}>
      <a href="/" className={`${NavCSS.Jobchasertitle} ${NavCSS.resetButton}`} role="button">
        JobChaser
        </a>
      <div className={NavCSS.Navbuttons}> 
        <a href="#" className={NavCSS.Navfavicon}>
          <span className={NavCSS.Navfaviconame}>Favoriter</span>
          <FontAwesomeIcon icon={faHeart} /></a>
          <Link to="/signin" className={NavCSS.Navfavicon}>
  <span className={NavCSS.Navfaviconame}>Logga in</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 0 35 21" strokeWidth="1.5" stroke="currentColor" className={`${NavCSS.w6} ${NavCSS.h6}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
</Link>
      </div>
    </div>
  );
}

export default Nav;

