import React from "react";

export default function CategoryButton({
  label = "Semua",
  active = false,
  onClick,
}) {
  const baseClass =
    "w-full px-6 py-3 rounded-full text-base font-medium flex items-center justify-center border transition";
  const activeClass =
    "bg-blue-500 text-white border-blue-500 shadow-sm hover:bg-blue-600";
  const inactiveClass =
    "bg-white text-blue-500 border-blue-400 hover:bg-blue-50";

  return (
    <button
      type="button"
      className={`${baseClass} ${active ? activeClass : inactiveClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
