import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../../store/store";
import {
  setSearchTerm,
  fetchSuggestions,
} from "../../store/slices/filterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchCSS from "./Search.module.css";

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const suggestions = useSelector(
    (state: RootState) => state.filter.suggestions
  );
  const [term, setTerm] = useState<string>(""); // Hanterar textinmatningen i sökfältet.
  const [showSuggestions, setShowSuggestions] = useState(false); // Kontrollerar om förslagslistan ska visas.

   // Hanterar ändringar i sökfältet och hanterar förslag baserat på inmatad text.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
    setShowSuggestions(newTerm.length > 2);

    if (newTerm.length > 2) {
      dispatch(fetchSuggestions(newTerm)); // Hämtar förslag om textlängden överstiger 2 tecken.
    } else if (newTerm === "") {
      setShowSuggestions(false); // Gömmer förslagslistan om texten är tom.
      dispatch(setSearchTerm(newTerm));// Återställer jobblistan om sökfältet är tomt.
    }
  };

    // Hanterar klick på ett förslag.
  const handleSelectSuggestion = (suggestion: string) => {
    setTerm(suggestion); // Uppdaterar sökfältet med valt förslag.
    setShowSuggestions(false); // Gömmer förslagslistan.
    dispatch(setSearchTerm(suggestion)); // Uppdaterar söktermen och därmed jobblistan.
  };

   // Hanterar Enter-knappen för att initiera en sökning.
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowSuggestions(false);
      dispatch(setSearchTerm(term));  // Skickar söktermen till Redux store.
    }
  };

  // Hanterar klick på sökknappen.
  const handleSearchClick = () => {
    setShowSuggestions(false);
    dispatch(setSearchTerm(term));  // Skickar söktermen till Redux store.
  };

  // Använder useEffect för att hantera visningen av förslagslistan beroende på söktermens tillstånd.
  useEffect(() => {
    if (term === "") {
      setShowSuggestions(false); // Gömmer förslagslistan om texten är tom.
    }
  }, [term]);

  // Renderar sökfält, förslagslista och sökknapp.
  return (
    <div className={SearchCSS.searchcontainer}>
      <input
        className={SearchCSS.searchinput}
        type="text"
        placeholder="Jobbtitel, nyckelord eller företag"
        value={term}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className={SearchCSS.searchSuggestionsList} role="listbox">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button className={SearchCSS.searchbtn} onClick={handleSearchClick}>
        Sök
      </button>
      <FontAwesomeIcon
        icon={faSearch}
        className={SearchCSS.searchicon}
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default Search;
