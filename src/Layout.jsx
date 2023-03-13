import { Outlet, Link, useNavigate } from "react-router-dom";
import { supabaseClient } from "../backend/client";
export default function Layout() {
  const navigate = useNavigate();
  const logOut = () => {
    supabaseClient.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
        <button onClick={logOut}>LogOut</button>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
