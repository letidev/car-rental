import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthenticatedGuard } from "../../../utils/guards";
import { registerUser } from "../../../utils/http-utils/user-requests";
import { SubmitButton, TextInput } from "../../common/inputs";
import { BasicLayout } from "../../layout";

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
    <NonAuthenticatedGuard>
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
          <SubmitButton text="Register" />
        </form>
      </BasicLayout>
    </NonAuthenticatedGuard>
  );
};

export default Register;
