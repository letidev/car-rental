import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCar, getAllCars } from "../../../utils/http-utils/cars-requests";
import { getIsAdmin } from "../../../utils/http-utils/user-requests";
import { MainLayout } from "../../layout";
import CarCard from "./CarCard";

const Cars = () => {
  const isAdmin = getIsAdmin();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars().then((response) => setCars(response.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteCar(id);
    getAllCars().then((response) => setCars(response.data));
  };

  return (
    <MainLayout>
      <div className="flex flex-row items-center justify-between mb-10">
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
      <div className="flex flex-row flex-wrap gap-6">
        {cars.map((car) => (
          <CarCard car={car} onClickDelete={handleDelete} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Cars;
