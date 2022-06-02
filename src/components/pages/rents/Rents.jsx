import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import { getAllRentsForUser } from "../../../utils/http-utils/rents-requests";
import { getLoggedUser } from "../../../utils/http-utils/user-requests";
import { MainLayout } from "../../layout";
import RentCardUser from "./RentCardUser";

const Rents = () => {
  const [rents, setRents] = useState([]);
  const user = getLoggedUser();

  useEffect(() => {
    getAllRentsForUser(user.id).then((r) => setRents(r.data));
  }, [user.id]);

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
      <div className="flex flex-row flex-wrap gap-6">
        {rents.map((rent) => (
          <RentCardUser rent={rent} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Rents;
