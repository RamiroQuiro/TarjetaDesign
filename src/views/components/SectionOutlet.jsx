import React from "react";

export default function SectionOutlet({ children }) {
  return (
    <div className="w-full min-h-screen  bg-gray-100 pb-20 ">
      <div className="md:w-10/12 w-11/12 mx-auto text-zinc-700 animate-[aparecer_1s] flex  flex-col justify-center gap-20 items-center md:pt-5 pt-24 md:pl-10">
        {children}
      </div>
    </div>
  );
}
