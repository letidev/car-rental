import React from "react";

const TextInput = ({ name, id, label, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
