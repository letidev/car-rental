import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layout";

const Cars = () => {
  return (
    <MainLayout>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-4xl font-bold w-fit">All cars</h3>
        <Link
          to="/cars/create"
          className="inline-block px-4 py-2 text-base font-medium text-white bg-teal-500 border border-transparent rounded-md hover:bg-opacity-75"
        >
          Create
        </Link>
      </div>
    </MainLayout>
  );
};

export default Cars;
