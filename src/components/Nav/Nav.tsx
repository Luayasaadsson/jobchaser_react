import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavCSS from "./Nav.module.css";
import logoImage from "./../../images/Jobchaser-logo2.png";
import {
  faBookmark,
  faBriefcase,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false); // Lokal state för att hålla reda på om menyn är öppen eller stängd.

  // Funktion för att växla mellan att visa eller dölja menyn.
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Invertera isOpen när användaren klickar på hamburgarmenyn.
  };

   // Funktion för att stänga menyn om användaren klickar utanför den.
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menuRef = useRef<HTMLDivElement>(null); // Referens till menynodet för att kontrollera klick utanför menyn.

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={NavCSS.Navcontainer}>
      <Link
        to="/"
        className={`${NavCSS.Jobchasertitle} ${NavCSS.resetButton}`}
        role="button"
        onClick={closeMenu}
      >
        <img
          className={NavCSS.logoImage}
          src={logoImage}
          alt="JobChaser Logo"
        />
      </Link>
      <FontAwesomeIcon
        icon={faBars}
        className={NavCSS.hamburger}
        onClick={toggleMenu}
      />
      <div
        ref={menuRef}
        className={`${NavCSS.Navbuttons} ${isOpen ? NavCSS.open : ""}`}
      >
        <Link to="/favorites" className={NavCSS.Navicon} onClick={closeMenu}>
          <span className={NavCSS.Navfaviconame}>Favoriter</span>
          <FontAwesomeIcon icon={faBookmark} />
        </Link>
        <Link to="/jobs" className={NavCSS.Navicon} onClick={closeMenu}>
          <span className={NavCSS.Navfaviconame}>Lediga jobb</span>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
        <Link to="/signin" className={NavCSS.Navicon} onClick={closeMenu}>
          <span className={NavCSS.Navfaviconame}>Logga in</span>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
