import React, { useState, useEffect } from "react";
import { getCarById } from "../../../utils/http-utils/cars-requests";

const RentCardUser = ({ rent }) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    getCarById(rent.carId).then((response) => setCar(response.data));
  }, [rent.carId]);

  return (
    <div className="flex flex-col gap-3 p-5 border border-teal-400 rounded-xl w-fit">
      <div>Car: {`${car.brand} ${car.model}, ${car.buildYear}`}</div>
      <div>Price per day: {car.pricePerDay}</div>
      <div>
        Rent from: <strong>{rent.rentFrom}</strong>
      </div>
      <div>
        Rent to: <strong>{rent.rentTo}</strong>
      </div>
      <div>Discount: {rent.discount}%</div>
      <div>Price: ${rent.price}</div>
    </div>
  );
};

export default RentCardUser;
