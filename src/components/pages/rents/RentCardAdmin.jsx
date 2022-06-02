import React, { useState, useEffect } from "react";
import { getCarById } from "../../../utils/http-utils/cars-requests";
import { getUserById } from "../../../utils/http-utils/user-requests";

const RentCardAdmin = ({ rent }) => {
  const [car, setCar] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    getCarById(rent.carId).then((response) => setCar(response.data));
    getUserById(rent.userId).then((response) => setUser(response.data));
  }, [rent.carId, rent.userId]);

  return (
    <div className="flex flex-col gap-3 p-5 border border-teal-400 rounded-xl w-fit">
      <img src={car.imageUrl} alt="Car" />
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
      <div>
        Rented by: {user.firstName} {user.lastName}
      </div>
      <div>Email: {user.email}</div>
    </div>
  );
};

export default RentCardAdmin;
