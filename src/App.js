import { Navigate, Route, Routes } from "react-router-dom";
import Cars from "./components/pages/cars";
import CreateCar from "./components/pages/create-car";
import Homepage from "./components/pages/homepage/Homepage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { PATHS } from "./utils/constants";

function App() {
  return (
    <div>
      <Routes>
        <Route path={PATHS.Register} element={<Register />} />
        <Route path={PATHS.Login} element={<Login />} />

        <Route exact path={PATHS.Home} element={<Homepage />} />

        <Route exact path={PATHS.Cars} element={<Cars />} />
        <Route path={PATHS.CreateCar} element={<CreateCar />} />

        <Route path="*" element={<Navigate replace to={PATHS.Home} />} />
      </Routes>
    </div>
  );
}

export default App;
