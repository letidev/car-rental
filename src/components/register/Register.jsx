import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/http-utils/user-requests";
import TextInput from "../common/inputs/TextInput";
import { BasicLayout } from "../layout";

const Register = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "user",
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
    <BasicLayout className="w-[320px] px-5">
      <h2 className="pb-3 mb-5 text-3xl font-semibold text-left border-b">
        Register
      </h2>
      <div className="mb-3 text-base font-semibold text-red-500">{error}</div>
      <form onSubmit={onSubmit}>
        <TextInput
          value={fields.email}
          onChange={onInputChange}
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="you@exmaple.com"
          required
        />
        <TextInput
          value={fields.firstName}
          onChange={onInputChange}
          type="text"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="John"
          required
        />
        <TextInput
          value={fields.lastName}
          onChange={onInputChange}
          type="text"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="Doe"
          required
        />
        <TextInput
          value={fields.password}
          onChange={onInputChange}
          type="password"
          name="password"
          id="password"
          label="Password"
          required
        />
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Register
        </button>
      </form>
    </BasicLayout>
  );
};

export default Register;
