import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importerar sida-komponenter som används i olika rutter.
import HomePage from "./components/Pages/HomePage/HomePage";
import JobPage from "./components/Pages/JobPage/JobPage";
import SignInPage from "./components/Pages/SignIn/SignInPage";
import SignUpPage from "./components/Pages/SignUp/SignUpPage";
import Dashboard from "./components/Pages/Dashboard/Dashboard";

// Importerar autentiseringskontext och tillhandahållare.
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Importerar krok för att använda tema-kontexten.
import { useTheme } from "./context/useTheme";
import ThemeSwitcher from "./Themeswitcher/ThemeSwitcher";

// Importerar CSS.
import "./css/index.css";
import "./css/media.css";

// Typdefinition för rekvisita till ProtectedRoute-komponenten.
interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Komponent för att skydda rutter som kräver autentisering.
function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.user !== null;

  // Renderar barnkomponenter om användaren är autentiserad, annars omdirigera till inloggningssidan.
  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />;
}

// Huvudkomponenten för applikationen.
function App() {
  const { theme } = useTheme(); // Använder temakontext för att få nuvarande tema.

  // Här uppdaterar jag klassnamnet på body-elementet baserat på aktuellt tema.
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
