import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NonAuthenticatedGuard } from "../../utils/guards";
import { login } from "../../utils/http-utils/user-requests";
import TextInput from "../common/inputs/TextInput";
import { BasicLayout } from "../layout";

const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
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

    login(fields)
      .then(() => {
        navigate("/");
      })
      .catch((e) => setError(e.message));
  };
  return (
    <NonAuthenticatedGuard>
      <BasicLayout className="w-[320px] px-5">
        <h2 className="pb-3 mb-5 text-3xl font-semibold text-left border-b">
          Login
        </h2>
        <div className="mb-3 text-base font-semibold text-red-500">{error}</div>
        <form onSubmit={onSubmit}>
          <TextInput
            value={fields.email}
            onChange={onInputChange}
            type="text"
            name="email"
            id="email"
            label="Email"
            placeholder="you@exmaple.com"
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
            Sign in
          </button>
        </form>
        <div className="mt-4">
          Don't have an account?&nbsp;
          <Link
            to="/register"
            className="underline cursor-pointer hover:text-teal-600"
          >
            Sing up here!
          </Link>
        </div>
      </BasicLayout>
    </NonAuthenticatedGuard>
  );
};

export default Login;
