import { Navigate } from "react-router-dom";
import { getLoggedUser } from "../http-utils/user-requests";

export const AuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
