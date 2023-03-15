import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/views/Tarjeta1/Home";
import Login from "../src/views/Login/Login";

import DashboardHome from "./views/dashboard/DashboardHome";
import Private from "./Private";
import Polotno from "./views/EditorGrafico/Polotno";
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Private>
              <Layout />
            </Private>
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/polotno" element={<Polotno />} />
        </Route>
      </Routes>
    </>
  );
}
