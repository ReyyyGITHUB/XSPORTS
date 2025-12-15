import React, { useState } from "react";

export default function Searchbar({
  placeholder = "Cari sepatu / brand / ukuran",
  onSearch,
}) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(term);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm sm:flex-row sm:items-center sm:rounded-full"
    >
      <div className="flex items-center gap-2 flex-1">
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
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto rounded-full bg-blue-600 px-5 py-3 text-xs font-semibold text-white hover:bg-blue-700 transition"
      >
        Cari
      </button>
    </form>
  );
}
