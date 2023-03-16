import { faCar, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabaseClient } from "../../../backend/client";

export default function NavBar() {
  const navigate = useNavigate();
  const logOut = () => {
    supabaseClient.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className=" sticky bg-zinc-800  text-zinc-100 flex w-full z-20 items-center justify-between px-28 mx-auto py-3">
      <div className="flex items-center justify-evenly gap-5">
        <FontAwesomeIcon icon={faIdCard} className=" text-3xl"/>
        <span className="  font-thin">KAYPI DESIGN</span>
      </div>
      <button onClick={logOut}>LogOut</button>
    </nav>
  );
}
