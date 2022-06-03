import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { getIsAdmin } from "../../utils/http-utils/user-requests";

const CarCard = ({ car, onClickDelete, onClick, selected = false }) => {
  const navigate = useNavigate();
  const isAdmin = getIsAdmin();

  return (
    <div
      className={`flex flex-col gap-3 p-5 border border-teal-400 rounded-xl w-fit ${
        onClick && "cursor-pointer hover:bg-gray-100"
      } ${selected && "bg-teal-50"}`}
      onClick={onClick}
    >
      <img src={car.imageUrl} alt="Car" />
      <div>Brand: {car.brand}</div>
      <div>Model: {car.model}</div>
      <div>Year: {car.buildYear}</div>
      <div>Type: {car.vehicleType}</div>
      <div>Fuel: {car.fuelType}</div>
      <div>Seats: {car.numberOfSeats}</div>
      <div>
        <strong>Price per day: ${car.pricePerDay}</strong>
      </div>
      {isAdmin && (
        <>
          <div>
            <strong className={`${!car.isActive && "text-red-500"}`}>
              Is Active: <span>{car.isActive.toString()}</span>
            </strong>
          </div>
          <button
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            onClick={() => navigate(`${PATHS.Cars}/edit/${car.id}`)}
          >
            Edit
          </button>
          <button
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => onClickDelete(car.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default CarCard;
