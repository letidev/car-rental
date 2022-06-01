import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { getLoggedUser } from "../http-utils/user-requests";

const UserGuard = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to={PATHS.Login} />;
  } else if (user && user.role !== "user") {
    return <Navigate to={PATHS.Home} />;
  }

  return children;
};

export default UserGuard;
