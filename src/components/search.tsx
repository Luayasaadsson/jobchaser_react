import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
  onSearch: (searchTerm: string) => void; // Funktion för att hantera sökning.
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Funktion för att uppdatera söktermen när användaren skriver.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
    <div className="search-container">
      <input
        className='search-nav'
        type="text"
        placeholder='Jobbtitel, nyckelord eller företag'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='search-btn' onClick={handleSearch}>Sök jobb</button>
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default Search;
