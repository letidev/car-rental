import React from "react";
import { FuelTypes, VehicleTypes } from "../../utils/constants";
import { TextInput, RadioInput, SubmitButton } from "../common/inputs";

const CarForm = ({
  fields,
  onInputChange,
  onSubmit,
  error,
  heading,
  ctaText,
}) => {
  return (
    <div>
      <h3 className="mb-5 text-4xl font-semibold">{heading}</h3>
      <form onSubmit={onSubmit} className="">
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
          label="Build year"
          placeholder="2011"
          min={1980}
          required
        />
        <div className="flex flex-row justify-between">
          <div className="max-w-[50%] w-fit">
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
          <div className="max-w-[50%] w-fit">
            <label className="block text-sm font-medium text-gray-700">
              Fuel Type
            </label>
            <div>
              {Object.values(FuelTypes).map((ft) => (
                <RadioInput
                  name="fuelType"
                  key={ft}
                  id={ft}
                  label={ft}
                  value={ft}
                  checked={ft === fields.fuelType}
                  onChange={onInputChange}
                />
              ))}
            </div>
          </div>
        </div>
        <TextInput
          value={fields.numberOfSeats}
          onChange={onInputChange}
          type="number"
          name="numberOfSeats"
          id="numberOfSeats"
          label="Number of seats"
          placeholder="2"
          min={2}
          required
        />
        <TextInput
          value={fields.pricePerDay}
          onChange={onInputChange}
          type="number"
          name="pricePerDay"
          id="pricePerDay"
          label="Price per day"
          placeholder="5"
          min={5}
          step={0.01}
          required
        />
        <div className="my-3 font-semibold text-red-500">{error}</div>
        <SubmitButton text={ctaText} />
      </form>
    </div>
  );
};

export default CarForm;
