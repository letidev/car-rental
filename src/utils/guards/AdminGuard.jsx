import { Navigate } from "react-router-dom";
import { getLoggedUser } from "../http-utils/user-requests";
import { PATHS } from "../constants";

const AdminGuard = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  } else if (user && user.role !== "admin") {
    return <Navigate to={PATHS.Home} />;
  }

  return children;
};

export default AdminGuard;
