import React from "react";
import { NavLink } from "react-router-dom";

export default function TabsSeccion() {
  return (
    <div className="w-full px-5">
      <ul className="flex border-b border-gray-100">
        <li className="flex-1">
          <NavLink
            to={"/seccionesCompartir/miEmpresa"}
            className={({ isActive }) =>
              isActive
                ? " relative block p-4 border-b-2 duration-200 border-blue-500/70"
                : "block p-4 "
            }
          >
            {/* <span className="absolute inset-x-0 -bottom-px h-px w-full bg-blue-500"></span> */}

            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>

              <span className="text-sm font-medium text-gray-900">
                {" "}
                Mi Empresa{" "}
              </span>
            </div>
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " relative block p-4 border-b-2 duration-200 border-blue-500/70"
                : "block p-4 "
            }
            to={"/seccionesCompartir/servicio"}
          >
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>

              <span className="text-sm font-medium text-gray-900">
                {" "}
                Producto o Servicio{" "}
              </span>
            </div>
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " relative block duration-200 p-4 border-b-2  border-blue-500/70"
                : "block p-4 "
            }
            to={"/seccionesCompartir/ubicacion"}
          >
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>

              <span className="text-sm font-medium text-gray-900">
                {" "}
                Ubicación{" "}
              </span>
            </div>
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " relative block p-4 border-b-2 duration-200 border-blue-500/70"
                : "block p-4 "
            }
            to={"/seccionesCompartir/multimedia"}
          >
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span className="text-sm font-medium text-gray-900">
                {" "}
                Video o Imagen{" "}
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
