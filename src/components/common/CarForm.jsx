import React from "react";
import { TextInput } from "../common/inputs";

const CarForm = ({ fields, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[320px]">
      <TextInput
        value={fields.brand}
        onChange={onInputChange}
        type="text"
        name="brand"
        id="brand"
        label="Brand"
        placeholder="Toyota"
        required
      />
      <TextInput
        value={fields.model}
        onChange={onInputChange}
        type="text"
        name="model"
        id="model"
        label="Model"
        placeholder="Corolla"
        required
      />
    </form>
  );
};

export default CarForm;
