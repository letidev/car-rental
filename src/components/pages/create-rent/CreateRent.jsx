import React, { useState, useEffect } from "react";
import { getFreeCars } from "../../../utils/http-utils/cars-requests";
import { MainLayout } from "../../layout";
import CarCard from "../cars/CarCard";
import moment from "moment";
import {
  getIsUserVip,
  getLoggedUser,
} from "../../../utils/http-utils/user-requests";
import { SubmitButton } from "../../common/inputs";
import { createRent } from "../../../utils/http-utils/rents-requests";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants";

const CreateRent = () => {
  const navigate = useNavigate();
  const [freeCars, setFreeCars] = useState([]);
  const [isUserVip, setIsUserVip] = useState(false);
  const [rent, setRent] = useState({
    userId: getLoggedUser().id,
    carId: -1,
    rentFrom: moment().format("yyyy-MM-DD"),
    rentTo: moment().format("yyyy-MM-DD"),
    pricePerDay: 0,
    price: 0,
    discount: 0,
  });

  const updateCarId = (id) => {
    setRent((prev) => ({
      ...prev,
      carId: id,
    }));
  };

  const updatePricePerDay = (price) => {
    setRent((prev) => ({
      ...prev,
      pricePerDay: price,
    }));
  };

  const calculatePrice = () => {
    let discount = 0;
    const dateRange =
      moment(rent.rentTo).diff(moment(rent.rentFrom), "days") + 1;

    // calculate the discount
    if (isUserVip) {
      discount = 15;
    } else {
      if (dateRange >= 3 && dateRange < 5) {
        discount = 5;
      } else if (dateRange >= 5 && dateRange < 10) {
        discount = 7;
      } else if (dateRange >= 10) {
        discount = 10;
      }
    }

    const price = (rent.pricePerDay * dateRange * (100 - discount)) / 100;

    setRent((prev) => ({
      ...prev,
      discount,
      price,
    }));
  };

  useEffect(() => {
    getFreeCars().then((response) => {
      setFreeCars(response);
      updateCarId(response[0].id);
      updatePricePerDay(response[0].pricePerDay);
    });

    getIsUserVip(getLoggedUser().id).then((response) => setIsUserVip(response));
  }, []);

  useEffect(() => {
    calculatePrice();
  }, [rent.rentFrom, rent.rentTo, rent.pricePerDay]);

  const onInputChange = (e) => {
    setRent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    createRent(rent).then(() => navigate(PATHS.Rents));
  };

  return (
    <MainLayout role="user">
      <h3 className="text-4xl font-bold w-fit">Rent a car</h3>
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col">
            <label htmlFor="rentFrom">Rent From</label>
            <input
              type="date"
              className="border-teal-700 rounded-xl w-fit"
              id="rentFrom"
              name="rentFrom"
              onChange={onInputChange}
              value={rent.rentFrom}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rentTo">Rent To</label>
            <input
              type="date"
              className="border-teal-700 rounded-xl w-fit"
              id="rentTo"
              name="rentTo"
              onChange={onInputChange}
              value={rent.rentTo}
            />
          </div>
        </div>
        <h3 className="mt-6 mb-4 text-2xl font-medium">Pick a car</h3>
        <div className="flex flex-row flex-wrap gap-6">
          {freeCars.map((car) => (
            <CarCard
              car={car}
              key={car.id}
              onClick={() => {
                updateCarId(car.id);
                updatePricePerDay(car.pricePerDay);
                calculatePrice();
              }}
              selected={rent.carId === car.id}
            />
          ))}
        </div>
        <div>
          <h3 className="mt-6 mb-4 text-2xl font-medium">Price</h3>
          <div>Discount: {rent.discount}%</div>
          <div>Price: {rent.price}$</div>
        </div>
        <div className="mt-3 w-28">
          <SubmitButton text="Rent car" />
        </div>
      </form>
    </MainLayout>
  );
};

export default CreateRent;
