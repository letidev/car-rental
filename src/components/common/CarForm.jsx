import React from "react";
import { VehicleTypes } from "../../utils/constants";
import { TextInput, RadioInput, SubmitButton } from "../common/inputs";

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
      <TextInput
        value={fields.buildYear}
        onChange={onInputChange}
        type="number"
        name="buildYear"
        id="buildYear"
        label="Build Year"
        placeholder="2011"
        min={1980}
        required
      />
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vehicle Type
        </label>
        <div>
          {Object.values(VehicleTypes).map((vt) => (
            <RadioInput
              name="vehicleType"
              key={vt}
              id={vt}
              label={vt}
              value={vt}
              checked={vt === fields.vehicleType}
              onChange={onInputChange}
            />
          ))}
        </div>
      </div>
      <SubmitButton text="Create" />
    </form>
  );
};

export default CarForm;
