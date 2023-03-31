import {
  faBriefcase,
  faLocation,
  faMapLocationDot,
  faPhotoVideo,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarTarjeta() {
  const linkDeMenu = [
    {
      id: 1,
      link: ":userName",
      icon: faUserTag,
      className: "",
    },
    {
      id: 2,
      link: "/:userName/servicios",
      icon: faBriefcase,
      className: "",
    },
    {
      id: 3,
      link: "/:userName/ubicacion",
      icon: faMapLocationDot,
      className: "",
    },
    {
      id: 4,
      link: "/:userName/multimedia",
      icon: faPhotoVideo,
      className: "",
    },
  ];

  return (
    <div className="w-full bg-neutral-100 py-2">
      <ul className="w-full flex items-center text-xl justify-evenly text-neutral-600">
        {linkDeMenu.map((link) => (
          <li 
          className="hover:text-sky-900 hover:-translate-y-1 duration-200"
          key={link.id}
          >
            <Link to={link.link}>
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
