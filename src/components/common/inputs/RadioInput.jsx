import React from "react";

const RadioInput = ({ id, label, ...rest }) => {
  return (
    <div className="flex flex-row items-center my-2">
      <input
        id={id}
        type="radio"
        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
        {...rest}
      />
      <label
        htmlFor={id}
        className="block ml-3 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
