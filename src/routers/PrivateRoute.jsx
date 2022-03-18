import { Route, Redirect } from "react-router-dom";
export default function PrivateRoute(props) {
  const user = null;
  if (!user) return <Redirect to="/" />;

  return <Route {...props} />;
}
