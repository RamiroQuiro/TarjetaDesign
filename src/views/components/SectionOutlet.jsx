import React from "react";

export default function SectionOutlet({ children }) {
  return (
    <div className="w-full min-h-screen  bg-zinc-50 pb-20 ">
      <div className="md:w-10/12 w-11/12 mx-auto text-zinc-700 animate-[aparecer_1s] flex md:flex-row flex-col justify-center gap-20 items-center md:pt-10 pt-24 md:pl-36">
        {children}
      </div>
    </div>
  );
}
