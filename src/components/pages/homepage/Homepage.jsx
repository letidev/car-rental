import React from "react";
import { MainLayout } from "../../layout";

const Homepage = () => {
  return (
    <MainLayout>
      <h1 className="font-bold text-center text-7xl">Car rental</h1>
      <div className="mx-auto mt-5 w-fit">
        <p>
          This is Car Rental. We are a small company that rents cars per day. We
          offer a wide range of vehicles for you to choose.
          <br />
          <br />
          <strong>Our price list:</strong>
          <br />
          <br />
          Price per day is $20. When the rental period is:
          <ul className="list-disc list-inside marker:text-teal-600">
            <li>more than 3 days - 5% discount</li>
            <li>more than 5 days - 7% discount</li>
            <li>more than 10 days - 10% discount</li>
          </ul>
          <br />
          If you've rented a vehicle more than 3 times in the last 60 days, you
          are designated as VIP customer and get a 15% discount!
        </p>
      </div>
    </MainLayout>
  );
};

export default Homepage;
