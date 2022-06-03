import { Navigate } from "react-router-dom";
import { getLoggedUser, logout } from "../http-utils/user-requests";
import { PATHS } from "../constants";
import { useIsUserActive } from "../hooks/useIsUserActive";

const AdminGuard = ({ children }) => {
  const user = getLoggedUser();
  const isActive = useIsUserActive(user?.id);

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  } else if (!isActive) {
    logout();
    return <Navigate to={PATHS.Login} />;
  } else if (user && user.role !== "admin") {
    return <Navigate to={PATHS.Home} />;
  }

  return children;
};

export default AdminGuard;
