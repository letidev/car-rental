import { Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { getLoggedUser } from "../http-utils/user-requests";

const AuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  }

  return children;
};

export default AuthenticatedGuard;
