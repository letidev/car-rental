import React from "react";
import { Header } from "./header";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};

export default MainLayout;
