import { Outlet, Link, useNavigate } from "react-router-dom";
import { supabaseClient } from "../backend/client";
import NavBar from "./views/NavBar/NavBar";
import Sidebar from "./views/sidebar/Sidebar";
export default function Layout() {
 
  return (
    <div className="relative">
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
    <NavBar/>

<Sidebar/>
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
