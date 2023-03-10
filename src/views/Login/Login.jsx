import React from "react";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-red-500 flex items-center justify-center overflow-hidden absolute">
      <section
        className="bg-white h-[400px] w-[400px]  relative flex items-center justify-center before:content-[' '] before:absolute before:top-0 before:left-0 before:w-6 before:h-full before:bg-gradient-to-t before:to-gray-50 before:from-slate-400 before:backdrop-blur-sm before:z-10
     after:content-[' '] after:absolute after:top-0 after:right-0 after:w-6 after:h-full after:bg-gradient-to-t after:to-gray-50 after:from-slate-400 after:backdrop-blur-sm after:z-10 
     "
      >
        <div
          className="absolute w-full h-full bg-gray-50
      before:content-[' '] before:absolute before:top-0 before:left-[calc(100%+100px)] before:w-[120%] before:h-[240%] before:bg-gradient-to-b before:to-black/75 before:from-transparent before:skew-x-[45deg]
      after:content-[' '] after:absolute after:bottom-[-200%] after:left-[calc(100%+0px)] after:w-[100%] after:h-[200%] after:bg-gradient-to-t after:to-black/30 after:from-transparent after:skew-x-[45deg]
      "
        >
          shadow
        </div>
        <div> </div>
      </section>
    </div>
  );
}
