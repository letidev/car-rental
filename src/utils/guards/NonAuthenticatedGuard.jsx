import { Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { getLoggedUser } from "../http-utils/user-requests";

const NonAuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();

  if (user) {
    return <Navigate to={PATHS.Home} />;
  }

  return children;
};

export default NonAuthenticatedGuard;
