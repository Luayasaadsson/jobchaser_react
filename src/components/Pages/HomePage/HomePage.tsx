import Nav from "../../../components/Nav/Nav";
import Search from "../../../components/Search/search";
import JobList from "../../../components/JobList/JobList";
import Footer from "../../../components/Footer/Footer";

interface HomePageProps {
  searchTerm: string;
  handleSearch: (term: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm, handleSearch }) => {
  return (
    <>
      <Nav />
      <Search onSearch={handleSearch} />
      <main>
        <JobList searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
