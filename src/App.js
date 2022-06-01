import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import Login from "./components/login";
import Register from "./components/register";
import { AuthenticatedGuard, NonAuthenticatedGuard } from "./utils/guards";

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
        <Route
          exact
          path="/login"
          element={
            <NonAuthenticatedGuard>
              <Login />
            </NonAuthenticatedGuard>
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <AuthenticatedGuard>
              <MainLayout>the homepage</MainLayout>
            </AuthenticatedGuard>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
