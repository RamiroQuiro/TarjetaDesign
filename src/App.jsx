import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/views/Tarjeta1/Home";
import Login from "../src/views/Login/Login";

import DashboardHome from "./views/dashboard/DashboardHome";
import Private from "./Private";
import Polotno from "./views/EditorGrafico/Polotno";
import DatosPersonales from "./views/DatosPersonales/DatosPersonales";
import NotFound from "./views/NotFound";
import SeccionesACompartir from "./views/Secciones/SeccionesACompartir";
import MiEmpresa from "./views/Secciones/Outlet/MiEmpresa";
import Multimedia from "./views/Secciones/Outlet/Multimedia";
import ProductoServicio from "./views/Secciones/Outlet/ProductoServicio";
import Ubicacion from "./views/Secciones/Outlet/Ubicacion";
export default function App() {
  return (
    <>
      <Routes>
        <Route
        path="/:userName"
        element={<Home/>}
        />
        {/* <Route index element={<Home />} /> */}
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
          <Route path="/datosPersonales" element={<DatosPersonales />} />
          <Route path="/seccionesCompartir" element={<SeccionesACompartir />}>
            <Route path="/seccionesCompartir/miEmpresa" index element={<MiEmpresa />} />
            <Route path="/seccionesCompartir/servicio" element={<ProductoServicio />} />
            <Route path="/seccionesCompartir/ubicacion" element={<Ubicacion />} />
            <Route path="/seccionesCompartir/multimedia" element={<Multimedia />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
