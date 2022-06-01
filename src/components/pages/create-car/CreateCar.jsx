import React, { useState } from "react";
import { CarForm } from "../../common";
import { MainLayout } from "../../layout";

const CreateCar = () => {
  const [fields, setFields] = useState({
    brand: "",
    model: "",
    buildYear: "",
    vehicleType: "",
    fuelType: "",
    numberOfSeats: "",
    pricePerDay: "",
  });

  return (
    <MainLayout adminOnly>
      <CarForm fields={fields} />
    </MainLayout>
  );
};

export default CreateCar;
