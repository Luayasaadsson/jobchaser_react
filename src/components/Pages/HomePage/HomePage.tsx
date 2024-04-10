import Nav from "../../../components/Nav/Nav";
import Search from "../../../components/Search/search";
import JobList from "../../../components/JobList/JobList";
import Footer from "../../../components/Footer/Footer";
import FilterByCategory from "../../Search/FilterByCategory";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Search />
      <main>
      <FilterByCategory />
      <JobList />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
