import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants";

const UserCard = ({ user, onClickDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 p-5 border border-teal-400 rounded-xl w-fit">
      <div>Email: {user.email}</div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>
        <strong className={`${!user.isActive && "text-red-500"}`}>
          Is Active: <span>{user.isActive.toString()}</span>
        </strong>
      </div>
      <button
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        onClick={() => navigate(`${PATHS.Users}/edit/${user.id}`)}
      >
        Edit
      </button>
      <button
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => onClickDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
