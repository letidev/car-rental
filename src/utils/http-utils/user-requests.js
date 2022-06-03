import axios from "axios";
import { getAllRentsForUser } from "./rents-requests";
import moment from "moment";

const apiUrl = "http://localhost:3005/users";
const loggedUserKey = "loggedUser";

export const getIsAdmin = () => {
  const user = getLoggedUser();
  return user?.role === "admin";
};

export const getAllUsersWithoutAdmin = () => {
  return axios.get(`${apiUrl}?role=user`);
};

const getAllUsers = () => {
  return axios.get(`${apiUrl}?isActive=true`);
};

export const getUserById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const deleteUser = async (id) => {
  const user = (await getUserById(id)).data;

  return axios.put(`${apiUrl}/${id}`, { ...user, isActive: false });
};

export const saveUser = (user) => {
  if (user?.role === "admin") {
    throw new Error("Cannot edit admin account!");
  }

  if (user?.id) {
    return axios.put(`${apiUrl}/${user.id}`, user);
  }

  return axios.post(apiUrl, { ...user, role: "user" });
};

// registration and login logic
export const registerUser = async (user) => {
  const existingUsers = (await axios.get(`${apiUrl}?email=${user.email}`)).data;

  if (existingUsers.length > 0) {
    throw new Error("This email has already been used");
  }

  return saveUser(user);
};

export const login = async (user) => {
  const allUsers = (await getAllUsers()).data;

  const foundUser = allUsers.find(
    (u) => u.email === user.email && u.password === user.password
  );

  if (!foundUser) throw new Error("Invalid username/password");

  const { password, ...userWithoutPassword } = foundUser;

  sessionStorage.setItem(loggedUserKey, JSON.stringify(userWithoutPassword));

  return foundUser;
};

export const logout = () => {
  sessionStorage.removeItem(loggedUserKey);
};

export const getLoggedUser = () => {
  return JSON.parse(sessionStorage.getItem(loggedUserKey));
};

//business logic requests
export const getIsUserVip = async (id) => {
  const rents = (await getAllRentsForUser(id)).data;

  const recentRents = rents.filter((rent) =>
    moment().subtract(60, "days").isBefore(moment(rent.rentFrom))
  );

  return recentRents.length >= 3;
};
