import axios from "axios";

const apiUrl = "http://localhost:3005/cars";

export const createCar = async (car) => {
  return axios.post(apiUrl, car);
};

export const updateCar = async (car) => {
  return axios.post(`${apiUrl}/${car.id}`, car);
};

export const getCarById = async (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const getAllCars = async () => {
  return axios.get(apiUrl);
};

export const deleteCar = async (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
