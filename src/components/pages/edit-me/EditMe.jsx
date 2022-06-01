import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import {
  getUserById,
  saveUser,
  getLoggedUser,
} from "../../../utils/http-utils/user-requests";
import { UserForm } from "../../common";
import { MainLayout } from "../../layout";

const EditMe = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setPasswordError("");
    const logged = getLoggedUser();
    getUserById(logged.id)
      .then((response) =>
        setUser({
          ...response.data,
          oldPassword: "",
          newPassword: "",
        })
      )
      .catch((e) => setError(e.message));
  }, []);

  const onInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, ...userToSave } = user;

    if (oldPassword) {
      if (oldPassword !== user.password) {
        setPasswordError("Password is incorrect.");
        return;
      }

      setPasswordError("");
      if (newPassword) {
        if (user.password === newPassword) {
          setPasswordError("Old password can't be new password");
          return;
        }

        setPasswordError("");
        userToSave.password = newPassword;
        saveUser(userToSave)
          .then(() => {
            navigate(PATHS.Users);
          })
          .catch((e) => setError(e.message));
      } else {
        setPasswordError("Provide a new password.");
        return;
      }
    }
    setPasswordError("");

    saveUser(userToSave)
      .then(() => {
        navigate(PATHS.Users);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <MainLayout role="user" className="mx-auto max-w-[320px]">
      <UserForm
        fields={user}
        onInputChange={onInputChange}
        error={error}
        onSubmit={onSubmit}
        heading="Edit your account"
        ctaText="Save"
        passwordError={passwordError}
        isEditMe
      />
    </MainLayout>
  );
};

export default EditMe;
