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
  const [term, setTerm] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
    setShowSuggestions(newTerm.length > 2);

    if (newTerm.length > 2) {
      dispatch(fetchSuggestions(newTerm));
    } else if (newTerm === "") {
      setShowSuggestions(false);
      dispatch(setSearchTerm(newTerm)); // Återställer jobblistan om sökfältet är tomt
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setTerm(suggestion);
    setShowSuggestions(false);
    dispatch(setSearchTerm(suggestion));
  };

  // Dispatchar söktermen när användaren trycker på Enter.
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowSuggestions(false);
      dispatch(setSearchTerm(term));
    }
  };

  const handleSearchClick = () => {
    setShowSuggestions(false);
    dispatch(setSearchTerm(term));
  };

  useEffect(() => {
    if (term === "") {
      setShowSuggestions(false);
    }
  }, [term]);

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
