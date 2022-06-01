import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
