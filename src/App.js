import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
