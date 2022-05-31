import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import { NonAuthenticatedGuard } from "./utils/guards";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/register"
          element={
            <NonAuthenticatedGuard>
              <Register />
            </NonAuthenticatedGuard>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
