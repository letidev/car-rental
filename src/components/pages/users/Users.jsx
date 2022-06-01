import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  deleteUser,
  getAllUsersWithoutAdmin,
} from "../../../utils/http-utils/user-requests";
import { MainLayout } from "../../layout";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsersWithoutAdmin().then((response) => setUsers(response.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    getAllUsersWithoutAdmin().then((response) => setUsers(response.data));
  };

  return (
    <MainLayout adminOnly>
      <div className="flex flex-row items-center justify-between mb-10">
        <h3 className="text-4xl font-bold w-fit">All users</h3>
        <Link
          to="/cars/create"
          className="inline-block px-4 py-2 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-opacity-80"
        >
          Create
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-6">
        {users.map((user) => (
          <UserCard user={user} key={user.id} onClickDelete={handleDelete} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Users;
