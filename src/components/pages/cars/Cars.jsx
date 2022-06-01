import React from "react";
import { Link } from "react-router-dom";
import { getIsAdmin } from "../../../utils/http-utils/user-requests";
import { MainLayout } from "../../layout";

const Cars = () => {
  const isAdmin = getIsAdmin();
  return (
    <MainLayout>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-4xl font-bold w-fit">All cars</h3>
        {isAdmin && (
          <Link
            to="/cars/create"
            className="inline-block px-4 py-2 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-opacity-80"
          >
            Create
          </Link>
        )}
      </div>
    </MainLayout>
  );
};

export default Cars;
