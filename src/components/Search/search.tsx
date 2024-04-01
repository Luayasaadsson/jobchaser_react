import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchCSS from "./Search.module.css"

interface SearchProps {
  onSearch: (searchTerm: string) => void; // Funktion för att hantera sökning.
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Funktion för att uppdatera söktermen när användaren skriver.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  // Funktion för att hantera sökning när användaren klickar på sökknappen.
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Återställer listan när söktermen tas bort.
  useEffect(() => {
    if (searchTerm === '') {
      onSearch(''); // Anropar onSearch med en tom sökterm för att återställa listan.
    }
  }, [searchTerm, onSearch]);

  return (
    <div className={SearchCSS.searchcontainer}>
      <input
        className={SearchCSS.searchnav}
        type="text"
        placeholder='Jobbtitel, nyckelord eller företag'
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className={SearchCSS.searchbtn} onClick={handleSearch}>Sök</button>
      <FontAwesomeIcon icon={faSearch} className={SearchCSS.searchicon} />
    </div>
  );
}

export default Search;
