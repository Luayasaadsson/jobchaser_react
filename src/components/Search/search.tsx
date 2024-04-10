import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from './../../store/slices/filterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchCSS from "./Search.module.css";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
  };

  // Dispatchar söktermen när användaren trycker på Enter.
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Dispatchar även om det är tomt, för att återställa listan.
      dispatch(setSearchTerm(term));
    }
  };

  const handleSearchClick = () => {
    dispatch(setSearchTerm(term));
  };

  // Använder en effekt för att återställa menyn när term blir tom
  // Detta säkerställer att listan återställs även om användaren bara raderar söktermen utan att trycka på sökknappen.
  useEffect(() => {
    if (term === '') {
      dispatch(setSearchTerm(''));
    }
  }, [term, dispatch]);

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
      <button 
        className={SearchCSS.searchbtn} 
        onClick={handleSearchClick}
      >
        Sök
      </button>
      <FontAwesomeIcon icon={faSearch} className={SearchCSS.searchicon} onClick={handleSearchClick} />
    </div>
  );
};

export default Search;