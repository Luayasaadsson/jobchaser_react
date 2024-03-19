import { useState } from "react";
import Header from "./components/Nav/Nav";
import "./css/index.css";
import "./css/media.css";
import JobList from "./components/JobList/JobList";
import Search from "./components/Search/search";
import Footer from "./components/Footer/Footer"

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
      <Footer />
    </div>
  );
}

export default App;
