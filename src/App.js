import { Route, Routes } from "react-router-dom";
import Register from "./components/register";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
