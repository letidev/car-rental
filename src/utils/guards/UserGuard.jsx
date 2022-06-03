import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { useIsUserActive } from "../hooks/useIsUserActive";
import { getLoggedUser, logout } from "../http-utils/user-requests";

const UserGuard = ({ children }) => {
  const user = getLoggedUser();
  const isActive = useIsUserActive(user?.id);

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  } else if (!isActive) {
    logout();
    return <Navigate to={PATHS.Login} />;
  } else if (user && user.role !== "user") {
    return <Navigate to={PATHS.Home} />;
  }

  return children;
};

export default UserGuard;
