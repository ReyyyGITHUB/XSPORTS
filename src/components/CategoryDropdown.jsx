import React, { useState } from "react";

export default function CategoryDropdown({ categories = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0] || "Select category");

  const handleSelect = (category) => {
    setSelected(category);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-500">Kategori</span>
      <div className="relative">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selected}
          <span className={`transform transition ${isOpen ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50"
                onClick={() => handleSelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
