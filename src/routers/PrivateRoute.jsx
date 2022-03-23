import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PrivateRoute({ children }) {
  const { isLogged } = useAuth();
  let location = useLocation();

  if (!isLogged()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
