import axios from "axios";

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
