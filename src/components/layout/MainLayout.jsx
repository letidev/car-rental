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
        <div className="px-4 pb-10 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className={className}>{children}</div>
        </div>
        <div className="bg-teal-600">
          <div className="px-4 py-10 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            <p className="text-white">
              Imagine there are links to legal pages here
            </p>
          </div>
        </div>
      </main>
    </Guard>
  );
};

export default MainLayout;
