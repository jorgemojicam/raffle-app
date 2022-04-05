import { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import { isUserLoggedIn, signout, login } from "../actions/auth.action";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, null);

  const isLogged = () => {
    const aut = isUserLoggedIn();
    dispatch(aut);
  };
  const isAuth = () => authState?.isAuthenticate;
  const hasRole = (role) => role && authState?.role === role;

  const logi = (userdata) => {
    const res = async () => {
      const useres = await login(userdata);      
      dispatch(useres);
    };
    res()
  };

  const logout = () => {
    dispatch(signout());
  };

  const contextValues = {
    authState,
    isLogged,
    isAuth,
    hasRole,
    logi,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}
