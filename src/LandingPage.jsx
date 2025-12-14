import React from "react";
import BadgeHero from "./components/BadgeHero";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-col bg-[#FAFAFA] px-4 h-screen">
        {/* navbar */}
        <div className="w-full my-5">
          <Navbar />
        </div>
        {/* Hero */}
        <div className="flex flex-col">
          {/* badge */}
          <div className="flex justify-center">
            <BadgeHero title={"Test from hello world!"} />
          </div>
          {/* container title */}
          <div className="flex flex-col gap-3 justify-center items-center mt-8">
            <h1 className="text-center text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p className="text-center text-lg font-normal">
              Lorem, ipsum dolor sit amet consectetur,
            </p>
          </div>
          {/* container cta */}
          <div className="flex flex-col bg-white p-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}
