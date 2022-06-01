import axios from "axios";
import moment from "moment";
import { getAllRents } from "./rents-requests";

const apiUrl = "http://localhost:3005/cars";

export const createCar = (car) => {
  return axios.post(apiUrl, car);
};

export const updateCar = (car) => {
  return axios.put(`${apiUrl}/${car.id}`, car);
};

export const getCarById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const getAllCars = () => {
  return axios.get(apiUrl);
};

export const deleteCar = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};

// business logic requests
export const getFreeCars = async () => {
  const cars = (await getAllCars()).data;
  const rents = (await getAllRents()).data;

  const freeCars = cars.filter((car) => {
    const isTaken = rents.some(
      (rent) =>
        rent.carId === car.id && moment().isBetween(rent.rentFrom, rent.rentTo)
    );
    return !isTaken;
  });

  return freeCars;
};
