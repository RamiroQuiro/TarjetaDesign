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
      link: "#",
      icon: faUserTag,
      className: "",
    },
    {
      id: 2,
      link: "#",
      icon: faBriefcase,
      className: "",
    },
    {
      id: 3,
      link: "#",
      icon: faMapLocationDot,
      className: "",
    },
    {
      id: 4,
      link: "#",
      icon: faPhotoVideo,
      className: "",
    },
  ];

  return (
    <div className="w-full bg-orange-400 py-2">
      <ul className="w-full flex items-center text-xl justify-evenly text-gray-600">
        {linkDeMenu.map((link) => (
          <li 
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
