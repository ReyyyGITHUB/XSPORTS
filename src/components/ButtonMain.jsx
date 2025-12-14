import React from "react";

export default function ButtonMain({ placeholder, type = "primary" }) {
  const baseStyle =
    "flex justify-center items-center rounded-md py-4 px-4 w-full text-base font-semibold transition";
  const primaryStyle = "bg-[#5DADE2] text-white hover:bg-[#4c99cd]";
  const secondaryStyle =
    "bg-white text-[#5DADE2] border border-[#5DADE2] hover:bg-[#e9f4fb]";
  const buttonStyle =
    type === "secondary"
      ? `${baseStyle} ${secondaryStyle}`
      : `${baseStyle} ${primaryStyle}`;

  return (
    <button type="button" className={buttonStyle}>
      {placeholder}
    </button>
  );
}
