import React from "react";

const BasicLayout = ({ children, className }) => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className={className}>{children}</div>
    </div>
  );
};

export default BasicLayout;
