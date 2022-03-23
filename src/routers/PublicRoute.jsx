import { Route, Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PubliceRoute(props) {
  const user = useAuth();

  if (user) return <Navigate to="/contact" />;

  return <Route {...props} />;
}
