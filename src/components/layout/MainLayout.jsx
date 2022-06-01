import React from "react";
import { AuthenticatedGuard } from "../../utils/guards";
import { Header } from "./header";

const MainLayout = ({ children, className }) => {
  return (
    <AuthenticatedGuard>
      <main>
        <Header />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className={className}>{children}</div>
        </div>
      </main>
    </AuthenticatedGuard>
  );
};

export default MainLayout;
