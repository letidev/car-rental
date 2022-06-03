import { Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { useIsUserActive } from "../hooks/useIsUserActive";
import { getLoggedUser, logout } from "../http-utils/user-requests";

const AuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();
  const isActive = useIsUserActive(user?.id);

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  }

  if (!isActive) {
    logout();
    return <Navigate to={PATHS.Login} />;
  }

  return children;
};

export default AuthenticatedGuard;
