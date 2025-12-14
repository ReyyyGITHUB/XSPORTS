import React from "react";

export default function Searchbar({placeholder
}) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm w-full max-w-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
      />
      <button
        type="button"
        className="rounded-full bg-blue-500 px-8 py-3 text-xs font-semibold text-white hover:bg-blue-600 transition"
      >
        Cari
      </button>
    </div>
  );
}
