import React from "react";
import { AdminGuard, AuthenticatedGuard, UserGuard } from "../../utils/guards";
import { Header } from "./header";

const MainLayout = ({ children, className, role = "" }) => {
  let Guard = AuthenticatedGuard;

  if (role === "admin") {
    Guard = AdminGuard;
  }

  if (role === "user") {
    Guard = UserGuard;
  }

  return (
    <Guard>
      <main>
        <Header />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className={className}>{children}</div>
        </div>
      </main>
    </Guard>
  );
};

export default MainLayout;
