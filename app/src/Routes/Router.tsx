import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
