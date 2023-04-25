import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen z-40 absolute  left-0 bg-gray-200">
        <div className="container mx-auto py-4 h-full px-5 flex md:flex-row flex-col items-center justify-evenly sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Kaypi Target —
            <a
              href="https://ramiroquiroga.vercel.app"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Ramiro Quiroga{" "}
            </a>
            |
            <a
              href="https://www.linkedin.com/in/ramiro--quiroga/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              {" "}
              RamiroCode
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              target="_blank"
              href="https://www.facebook.com/ramirochangomoreno/"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/ramirochangomoreno/"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ramiro--quiroga/"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
    </footer>
  );
}
