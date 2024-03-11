/* import React from 'react'; */
import './App.css';
import JobList from './components/JobList'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Search />
      <main>
        <JobList />
      </main>
    </div>
  );
}

function Header() {
  return (
    <h1>JobChaser</h1>
  )
}

function Search(): JSX.Element {
  return (
    <div className="search-container">
      <input className='search-nav' type="text" placeholder='Jobbtitel, nyckelord eller företag' />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <button className='search-btn'>Sök jobb</button>
    </div>
  )
}

export default App;