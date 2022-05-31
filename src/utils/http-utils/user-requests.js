import axios from "axios";

const apiUrl = "http://localhost:3005/users";
const loggedUserKey = "loggedUser";

export const logout = async () => {
  localStorage.removeItem(loggedUserKey);
};

export const getAllUsers = () => {
  return axios.get(apiUrl);
};

export const getUserById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const deleteUser = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};

export const saveUser = (user) => {
  if (user?.id) {
    return axios.put(`${apiUrl}/${user.id}`, user);
  }

  return axios.post(apiUrl, user);
};

export const registerUser = async (user) => {
  const existingUsers = (await axios.get(`${apiUrl}?email=${user.email}`)).data;

  if (existingUsers.length > 0) {
    throw new Error("This email has already been used");
  }

  return saveUser(user);
};
