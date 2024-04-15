import { createContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
  user: { name: string; email: string } | null;
  signIn: (mockUser: { name: string; email: string }) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  const signIn = (mockUser: { name: string; email: string }) => {
    setUser(mockUser); // Simulate a user signing in with mock data
  };

  const signOut = () => {
    setUser(null); // Simulate a user signing out
  };

  useEffect(() => {
    // Här kommer vi kolla om användaren är inloggad eller inte
    const mockUser = { name: "John Doe", email: "john@example.com" };
    signIn(mockUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
