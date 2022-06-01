import axios from "axios";

const apiUrl = "http://localhost:3005/rents";

export const createRent = (rent) => {
  return axios.post(apiUrl, rent);
};

export const getAllRents = () => {
  return axios.get(apiUrl);
};

export const getAllRentsForUser = (id) => {
  return axios.get(`${apiUrl}?userId=${id}`);
};
