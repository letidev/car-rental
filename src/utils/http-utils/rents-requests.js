import axios from "axios";
import moment from "moment";

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

export const getAllRentsForCar = (id) => {
  return axios.get(`${apiUrl}?carId=${id}`);
};

export const getOngoingAndFutureRentsForCar = async (id) => {
  const allRents = (await getAllRentsForCar(id)).data;

  const filteredRents = allRents.filter(
    (r) =>
      moment().isBetween(r.rentFrom, r.rentTo) ||
      moment().isSameOrBefore(r.rentFrom)
  );
  return filteredRents;
};
