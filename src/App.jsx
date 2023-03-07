import { Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/views/Tarjeta1/Home";
import Login from "../src/views/Login/Login";
export default function App() {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
    </>
  );
}
