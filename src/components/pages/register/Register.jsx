import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NonAuthenticatedGuard } from "../../../utils/guards";
import { registerUser } from "../../../utils/http-utils/user-requests";
import { UserForm } from "../../common";
import { BasicLayout } from "../../layout";

const Register = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "user",
    isActive: true,
  });
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    registerUser(fields)
      .then(() => {
        navigate("/");
      })
      .catch((e) => setError(e.message));
  };

  return (
    <NonAuthenticatedGuard>
      <BasicLayout className="w-[320px] px-5">
        <UserForm
          fields={fields}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          isRegister
          ctaText="Register"
          error={error}
          heading="Register"
        />
        <div className="mt-4">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-teal-800 underline cursor-pointer hover:text-teal-600"
          >
            Log in here!
          </Link>
        </div>
      </BasicLayout>
    </NonAuthenticatedGuard>
  );
};

export default Register;
