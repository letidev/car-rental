import { Navigate, Route, Routes } from "react-router-dom";
import Cars from "./components/pages/cars";
import CreateCar from "./components/pages/create-car";
import { CreateRent } from "./components/pages/create-rent";
import { EditCar } from "./components/pages/edit-car";
import { EditMe } from "./components/pages/edit-me";
import { EditUser } from "./components/pages/edit-user";
import { Homepage } from "./components/pages/homepage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { Rents } from "./components/pages/rents";
import { Users } from "./components/pages/users";
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
        <Route path={PATHS.EditCar} element={<EditCar />} />

        <Route exact path={PATHS.Users} element={<Users />} />
        <Route path={PATHS.EditUser} element={<EditUser />} />
        <Route path={PATHS.EditMe} element={<EditMe />} />

        <Route exact path={PATHS.Rents} element={<Rents />} />
        <Route path={PATHS.CreateRent} element={<CreateRent />} />

        <Route path="*" element={<Navigate replace to={PATHS.Home} />} />
      </Routes>
    </div>
  );
}

export default App;
