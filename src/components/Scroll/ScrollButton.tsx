import { useState, useEffect } from "react";
import styles from "./../../components/Scroll/ScrollButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Renderar en knapp som låter användare scrolla upp till toppen av sidan.
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);  // Lokal state för att hålla reda på knappens synlighet.

  // Funktion som kontrollerar knappens synlighet baserat på användarens scrollposition.
  const toggleVisibility = () => {
    if (window.scrollY > 300) {  // Om användaren har scrollat mer än 300 pixlar från sidans topp...
      setIsVisible(true);  // ...sätt knappens synlighet till true.
    } else {
      setIsVisible(false);  // Annars sätt knappens synlighet till false.
    }
  };

  // Funktion som rullar upp till sidans topp när användaren klickar på knappen.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,  // Rullar till sidans topp.
      behavior: "smooth",
    });
  };

  // Använd useEffect för att lägga till en lyssnare för scroll-händelser när komponenten monteras.
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button className={styles.button} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} /> 
      </button>
    )
  );
}

export default ScrollToTopButton; 