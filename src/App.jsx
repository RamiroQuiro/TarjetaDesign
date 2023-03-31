import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/views/Tarjeta1/Home";
import Login from "../src/views/Login/Login";
import Registrar from "../src/views/Login/Registrar";
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
import HomeTarjeta from "./views/Tarjeta1/component/HomeTarjeta";
import ServiciosTarj from "./views/Tarjeta1/Outlet/Servicios";
import UbicacionTarj from "./views/Tarjeta1/Outlet/Ubicacion";
import EmpresaTarj from "./views/Tarjeta1/Outlet/MiEmpresa";
import MultimediaTarj from "./views/Tarjeta1/Outlet/Multimedia";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route
            path="/:userName"
            index
            element={<HomeTarjeta />}
          />
          <Route
            path="/:userName/servicios"
            element={<ServiciosTarj />}
          />
          <Route
            path="/:userName/empresa"
            element={<EmpresaTarj/>}
          />
          <Route
            path="/:userName/ubicacion"
            element={<UbicacionTarj/>}
          />
          <Route
            path="/:userName/multimedia"
            element={<MultimediaTarj />}
          />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
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
            <Route
              path="/seccionesCompartir/miEmpresa"
              index
              element={<MiEmpresa />}
            />
            <Route
              path="/seccionesCompartir/servicio"
              element={<ProductoServicio />}
            />
            <Route
              path="/seccionesCompartir/ubicacion"
              element={<Ubicacion />}
            />
            <Route
              path="/seccionesCompartir/multimedia"
              element={<Multimedia />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
