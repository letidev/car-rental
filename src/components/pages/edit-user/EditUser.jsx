import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import { getUserById, saveUser } from "../../../utils/http-utils/user-requests";
import { UserForm } from "../../common";
import { MainLayout } from "../../layout";

const EditUser = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getUserById(id)
      .then((response) => setUser(response.data))
      .catch((e) => setError(e.message));
  }, [id]);

  const onInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    saveUser(user)
      .then(() => {
        navigate(PATHS.Users);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <MainLayout adminOnly className="mx-auto max-w-[320px]">
      <UserForm
        fields={user}
        onInputChange={onInputChange}
        error={error}
        onSubmit={onSubmit}
        heading="Edit user"
        ctaText="Update"
      />
    </MainLayout>
  );
};

export default EditUser;
