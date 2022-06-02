import React, { useState, useEffect } from "react";
import { getAllRents } from "../../../utils/http-utils/rents-requests";
import { MainLayout } from "../../layout";
import RentCardAdmin from "./RentCardAdmin";

const RentsAdmin = () => {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    getAllRents().then((r) => setRents(r.data));
  }, []);

  return (
    <MainLayout role="admin">
      <h3 className="text-4xl font-bold w-fit">All user rents</h3>

      <div className="flex flex-row flex-wrap gap-6 mt-5">
        {rents.map((rent) => (
          <RentCardAdmin rent={rent} key={rent.id} />
        ))}
      </div>
    </MainLayout>
  );
};

export default RentsAdmin;
