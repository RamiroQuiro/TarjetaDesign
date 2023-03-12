import { Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/views/Tarjeta1/Home";
import Login from "../src/views/Login/Login";
import { useEffect } from "react";
import DashboardHome from "./views/dashboard/DashboardHome";
export default function App() {


  useEffect(() => {

  
    return () => {
      
    }
  }, [])
  
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<DashboardHome />} />

        </Route>
      </Routes>
    </>
  );
}
