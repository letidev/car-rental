import React from "react";

const TextInput = ({ label, ...rest }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
