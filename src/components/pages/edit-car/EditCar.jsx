import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import { getCarById, updateCar } from "../../../utils/http-utils/cars-requests";
import { CarForm } from "../../common";
import { MainLayout } from "../../layout";

const EditCar = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getCarById(id)
      .then((response) => setCar(response.data))
      .catch((e) => setError(e.message));
  }, [id]);

  const onInputChange = (e) => {
    if (e.target.name === "isActive") {
      setCar((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setCar((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateCar(car)
      .then(() => {
        navigate(PATHS.Cars);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <MainLayout role="admin" className="mx-auto max-w-[320px]">
      <CarForm
        fields={car}
        onInputChange={onInputChange}
        error={error}
        onSubmit={onSubmit}
        heading="Edit car"
        ctaText="Update"
      />
    </MainLayout>
  );
};

export default EditCar;
