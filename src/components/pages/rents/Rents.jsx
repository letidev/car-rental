import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import { MainLayout } from "../../layout";

const Rents = () => {
  return (
    <MainLayout role="user">
      <div className="flex flex-row items-center justify-between mb-10">
        <h3 className="text-4xl font-bold w-fit">Your rents</h3>
        <Link
          to={PATHS.CreateRent}
          className="inline-block px-4 py-2 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-opacity-80"
        >
          Rent a car
        </Link>
      </div>
    </MainLayout>
  );
};

export default Rents;
