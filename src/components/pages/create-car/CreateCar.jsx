import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FuelTypes, PATHS, VehicleTypes } from "../../../utils/constants";
import { createCar } from "../../../utils/http-utils/cars-requests";
import { CarForm } from "../../common";
import { MainLayout } from "../../layout";

const CreateCar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    brand: "",
    model: "",
    buildYear: "",
    vehicleType: VehicleTypes.ECONOMY,
    fuelType: FuelTypes.PETROL,
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

    createCar(fields)
      .then(() => {
        navigate(PATHS.Cars);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <MainLayout role="admin" className="mx-auto max-w-[320px]">
      <CarForm
        fields={fields}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        error={error}
        heading="Create a car"
        ctaText="Update"
      />
    </MainLayout>
  );
};

export default CreateCar;
