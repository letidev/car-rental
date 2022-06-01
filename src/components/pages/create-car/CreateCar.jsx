import React, { useState } from "react";
import { VehicleTypes } from "../../../utils/constants";
import { CarForm } from "../../common";
import { MainLayout } from "../../layout";

const CreateCar = () => {
  const [fields, setFields] = useState({
    brand: "",
    model: "",
    buildYear: "",
    vehicleType: VehicleTypes.ECONOMY,
    fuelType: "",
    numberOfSeats: "",
    pricePerDay: "",
  });

  const onInputChange = (e) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(fields);
  };

  return (
    <MainLayout adminOnly>
      <CarForm
        fields={fields}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      />
    </MainLayout>
  );
};

export default CreateCar;
