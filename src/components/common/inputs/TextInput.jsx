import React from "react";

const TextInput = ({ label, id, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        id={id}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
