import { createContext, useReducer, useState } from "react";
import { authConstants } from "../helpers/constants";
import authReducer from "../reducers/authReducer";
import { isUserLoggedIn } from "../actions/auth.action";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, null);

  const isLogged = () => {
    
    const aut = isUserLoggedIn();
    dispatch(aut);
  };
  const isAuth = () => authState?.isAuthenticate;

  const hasRole = (role) => role && authState?.role === role;

  const login = (userdata) => {    
    dispatch({ type: authConstants.SIGNUP_REQUEST, payloads: userdata });
  };

  const logout = () => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
  };

  const contextValues = {
    authState,
    isLogged,
    isAuth,
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
