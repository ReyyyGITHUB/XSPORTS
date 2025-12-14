import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between p-4 items-center bg-white w-full">
        {/* logo and name */}
        <div className="flex flex-row gap-2">
          <img src="/vite.svg" alt="" className="" />
          <h1 className="text-xl font-bold">XSPORTS</h1>
        </div>
        {/* Menu CIon */}
        <div className="w-8">
          <img src="/vite.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
