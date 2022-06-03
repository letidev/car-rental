import React from "react";
import { Checkbox, SubmitButton, TextInput } from "./inputs";

const UserForm = ({
  fields,
  onSubmit,
  onInputChange,
  ctaText,
  isRegister,
  heading,
  error,
  isEditMe,
  passwordError,
  isAdmin,
}) => {
  return (
    <div>
      <h2 className="pb-3 mb-5 text-3xl font-semibold text-left border-b">
        {heading}
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
        {isAdmin && (
          <Checkbox
            type="checkbox"
            defaultChecked={fields.isActive}
            checked={fields.isActive}
            onChange={onInputChange}
            name="isActive"
            id="isActive"
            label="Is Active"
          />
        )}
        {isRegister && (
          <TextInput
            value={fields.password}
            onChange={onInputChange}
            type="password"
            name="password"
            id="password"
            label="Password"
            required
          />
        )}
        {isEditMe && (
          <>
            <TextInput
              value={fields.oldPassword}
              onChange={onInputChange}
              type="password"
              name="oldPassword"
              id="oldPassword"
              label="Old Password"
            />
            <TextInput
              value={fields.newPassword}
              onChange={onInputChange}
              type="password"
              name="newPassword"
              id="newPassword"
              label="New Password"
            />
            <div className="mb-2 font-semibold text-red-500">
              {passwordError}
            </div>
          </>
        )}
        <SubmitButton text={ctaText} />
      </form>
    </div>
  );
};

export default UserForm;
