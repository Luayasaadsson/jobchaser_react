import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import SignInPage from "./components/Pages/SignIn/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import Dashboard from "./components/Pages/Dashboard";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/search";
import JobList from "./components/JobList/JobList";
import Footer from "./components/Footer/Footer";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from 'react';
import "./css/index.css";
import "./css/media.css";

function ProtectedRoute(): JSX.Element {
  const authContext = useContext(AuthContext);
  const isAuthenticated: boolean = authContext?.user !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Search onSearch={handleSearch} />
        <main>
        <JobList searchTerm={searchTerm} />
        </main>
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
