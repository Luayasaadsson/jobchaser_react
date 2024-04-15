import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import JobPage from "./components/Pages/JobPage/JobPage";
import SignInPage from "./components/Pages/SignIn/SignInPage";
import SignUpPage from "./components/Pages/SignUp/SignUpPage";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useTheme } from "./context/useTheme";
import ThemeSwitcher from "./Themeswitcher/ThemeSwitcher";
import "./css/index.css";
import "./css/media.css";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.user !== null;

  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />;
}

function App() {
  /* const [searchTerm, setSearchTerm] = useState(""); */
  const { theme } = useTheme();

  /*  const handleSearch = (term: string) => {
    setSearchTerm(term);
  }; */

  useEffect(() => {
    document.body.className = theme + "-mode";
  }, [theme]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="jobs" element={<JobPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
