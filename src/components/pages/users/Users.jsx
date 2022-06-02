import React, { useState, useEffect } from "react";
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
    <MainLayout role="admin">
      <h3 className="text-4xl font-bold w-fit">All users</h3>

      <div className="flex flex-row flex-wrap gap-6 mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id} onClickDelete={handleDelete} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Users;
