import { createContext, useReducer, useState } from "react";
import { authConstants } from "../helpers/constants";
import authReducer from "../reducers/authReducer";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authState, dispatch] = useReducer(authReducer, null);

  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const login = (userdata) => {
    dispatch({ type: authConstants.SIGNUP_REQUEST, payloads: userdata });
   
  };

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
