import React from "react";
import TextInput from "../common/inputs/TextInput";
import { BasicLayout } from "../layout";

const Register = () => {
  return (
    <BasicLayout className="w-[320px] px-5">
      <h2 className="text-left font-semibold text-3xl mb-5 border-b pb-3">
        Register
      </h2>
      <form>
        <TextInput
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="you@exmaple.com"
        />
        <TextInput
          type="text"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="John"
        />
        <TextInput
          type="text"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="Doe"
        />
        <TextInput
          type="password"
          name="password"
          id="password"
          label="Password"
        />
      </form>
    </BasicLayout>
  );
};

export default Register;
