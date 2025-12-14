import React from "react";

export default function BadgeHero({title}) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-2 border px-4 py-1 border-blue-400 rounded-full bg-blue-200 w-fit">
        <img src="/vite.svg" alt="" className="w-5" />
        <h1 className="text-blue-500 text-lg">{title}</h1>
      </div>
    </div>
  );
}
