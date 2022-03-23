import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const login = () =>
    setUser({ id: 1, role: "adm", username: "jorge", user: true });
  const logout = () => setUser(null);

  const contextValues = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}
