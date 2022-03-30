import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  let location = useLocation();

  if (isAuth()) {
    return <Navigate to="/rifas" state={{ from: location }} replace />;
  }

  return children;
}
