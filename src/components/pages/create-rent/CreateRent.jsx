import React, { useState, useEffect, useCallback } from "react";
import { getAllCars } from "../../../utils/http-utils/cars-requests";
import { MainLayout } from "../../layout";
import moment from "moment";
import {
  getIsUserVip,
  getLoggedUser,
} from "../../../utils/http-utils/user-requests";
import { SubmitButton } from "../../common/inputs";
import {
  createRent,
  getOngoingAndFutureRentsForCar,
} from "../../../utils/http-utils/rents-requests";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import { CarCard } from "../../common";

const CreateRent = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isUserVip, setIsUserVip] = useState(false);
  const [dateError, setDateError] = useState("");
  const [carError, setCarError] = useState("");
  const [pickedCarTakenSlots, setPickedCarTakenSlots] = useState([]);

  const [rent, setRent] = useState({
    userId: getLoggedUser().id,
    carId: -1,
    rentFrom: moment().format("yyyy-MM-DD"),
    rentTo: moment().format("yyyy-MM-DD"),
    pricePerDay: 0,
    price: 0,
    discount: 0,
  });

  // use effect that initializes the form
  useEffect(() => {
    getAllCars().then((response) => {
      setCars(response.data);
    });

    getIsUserVip(getLoggedUser().id).then((response) => setIsUserVip(response));
  }, []);

  // callback that recalculates the price each time
  // a dependency changes
  const calculatePrice = useCallback(() => {
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
  }, [rent.rentFrom, rent.rentTo, rent.pricePerDay, isUserVip]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const datesInterfere = useCallback(() => {
    return pickedCarTakenSlots.some(
      (ts) =>
        moment(rent.rentFrom).isBetween(ts.rentFrom, ts.RentTo) ||
        moment(rent.rentTo).isBetween(ts.rentFrom, ts.rentTo) ||
        moment(rent.rentFrom).isSame(ts.rentFrom) ||
        moment(rent.rentFrom).isSame(ts.rentTo) ||
        moment(rent.rentTo).isSame(ts.rentFrom) ||
        moment(rent.rentTo).isSame(ts.rentTo)
    );
  }, [pickedCarTakenSlots, rent.rentFrom, rent.rentTo]);

  // use effects for validation errors
  useEffect(() => {
    if (moment(rent.rentTo).isBefore(moment(rent.rentFrom))) {
      setDateError("Rent to date cannot be before rent from date.");
    } else if (datesInterfere()) {
      setDateError(
        "Car isn't available for the whole time slot, pick other dates."
      );
    } else {
      setDateError("");
    }
  }, [rent.rentFrom, rent.rentTo, datesInterfere]);

  useEffect(() => {
    setCarError("");
    getOngoingAndFutureRentsForCar(rent.carId).then((r) =>
      setPickedCarTakenSlots(r)
    );
  }, [rent.carId]);

  // form functionality methods
  const onInputChange = (e) => {
    setRent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (dateError) {
      return;
    }

    if (rent.carId === -1) {
      setCarError("You must pick a car");
      return;
    }

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
        <div className="font-semibold text-red-500">{dateError}</div>
        <h3 className="mt-6 mb-4 text-2xl font-medium">Pick a car</h3>
        <div className="flex flex-row flex-wrap gap-6">
          {cars.map((car) => (
            <CarCard
              car={car}
              key={car.id}
              onClick={() => {
                setRent((prev) => ({
                  ...prev,
                  carId: car.id,
                  pricePerDay: car.pricePerDay,
                }));
              }}
              selected={rent.carId === car.id}
            />
          ))}
        </div>
        <div className="font-semibold text-red-500">{carError}</div>
        <div>
          <h3 className="mt-6 mb-4 text-2xl font-medium">
            Picked car unavailable days
          </h3>
          {pickedCarTakenSlots.map((ts) => (
            <div>
              <strong>From:</strong>{" "}
              {moment(ts.rentFrom).format("ddd DD.MM.YYYY")}{" "}
              <strong>To:</strong> {moment(ts.rentTo).format("ddd DD.MM.YYYY")}
            </div>
          ))}
          {pickedCarTakenSlots.length === 0 && <div>none</div>}
        </div>
        <div>
          <h3 className="mt-6 mb-4 text-2xl font-medium">Price</h3>
          {isUserVip && (
            <div>
              You have made at least 3 rents in the past 60 days and get a VIP
              discount!
            </div>
          )}
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
