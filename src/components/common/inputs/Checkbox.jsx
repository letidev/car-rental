import React from "react";

const Checkbox = ({ label, id, ...rest }) => {
  return (
    <div className="relative flex items-start my-3">
      <div className="flex items-center h-5">
        <input
          id={id}
          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          {...rest}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
