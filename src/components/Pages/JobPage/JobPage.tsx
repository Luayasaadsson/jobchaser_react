import Nav from "../../../components/Nav/Nav";
import Search from "../../../components/Search/search";
import JobList from "../../../components/JobList/JobList";
import Footer from "../../../components/Footer/Footer";
import FilterByCategory from "../../Search/FilterByCategory";
import styles from "./JobPage.module.css";
import ScrollToTopButton from "./../../../components/Scroll/ScrollButton";

const JobPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Nav />
      <Search />
      <main className={styles.mainContent}>
        <FilterByCategory />
        <JobList />
        <ScrollToTopButton/>
      </main>
      <Footer />
    </div>
  );
};

export default JobPage;
