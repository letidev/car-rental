import { Navigate, Route, Routes } from "react-router-dom";
import Cars from "./components/pages/cars";
import Homepage from "./components/pages/homepage/Homepage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/cars" element={<Cars />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
