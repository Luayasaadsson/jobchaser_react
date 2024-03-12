import { useState } from 'react';
import './App.css';
import JobList from './components/JobList'; 
import Search from './components/search'; 

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Funktion för att hantera sökning och uppdatera söktermen.
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm); // Uppdaterar söktermen när användaren söker.
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      <main>
      <JobList searchTerm={searchTerm} />
      </main>
    </div>
  );
}

function Header() {
  return (
    <h1>JobChaser</h1>
  )
}

export default App;