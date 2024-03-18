import { useState } from "react";
import Header from "./Header/Header";
import "./css/index.css";
import "./css/media.css";
import JobList from "./components/JobList/JobList";
import Search from "./components/Search/search";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

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

export default App;
