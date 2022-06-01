import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import Login from "./components/pages/login";
import Register from "./components/pages/register";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<MainLayout>the homepage</MainLayout>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
