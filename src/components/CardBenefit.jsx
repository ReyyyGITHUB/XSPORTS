import React from "react";

export default function CardBenefit({
  image = "/vite.svg",
  title = "Lorem ipsum dolor sit.",
  desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam aliquid a.",
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
          <img src={image} alt="" className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
