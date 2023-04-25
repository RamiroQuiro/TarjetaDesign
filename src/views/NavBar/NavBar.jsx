import { faCar, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  useNavigate } from "react-router-dom";
import { supabaseClient } from "../../../backend/client";

export default function NavBar({userData}) {
  const navigate = useNavigate();
  const logOut = () => {
    supabaseClient.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className=" sticky bg-gradient-to-l from-primary-200 via-primary-200 to-primary-100  text-sky-50 flex w-screen z-30 items-center md:justify-between justify-around md:px-16 mx-auto py-4">
      <div 
      onClick={()=>navigate(`/${userData?.razonSocial}`)}
      className="flex items-center justify-evenly gap-4 cursor-pointer">
        <FontAwesomeIcon icon={faIdCard} className=" text-3xl"/>
        <span className="  font-thin" >KAYPI DESIGN</span>
      </div>
      <button onClick={logOut}>LogOut</button>
    </nav>
  );
}
