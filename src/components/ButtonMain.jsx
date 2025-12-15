import React from "react";

export default function ButtonMain({ placeholder, type = "primary", href, onClick }) {
  const baseStyle =
    "flex justify-center items-center rounded-md py-4 px-4 w-full text-base font-semibold transition";
  const primaryStyle = "bg-[#1f6bff] text-white hover:bg-[#1554c4] shadow-md";
  const secondaryStyle =
    "bg-white text-[#1f6bff] border border-[#1f6bff] hover:bg-[#e6f0ff]";
  const buttonStyle =
    type === "secondary"
      ? `${baseStyle} ${secondaryStyle}`
      : `${baseStyle} ${primaryStyle}`;

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      type={href ? undefined : "button"}
      className={buttonStyle}
      onClick={onClick}
    >
      {placeholder}
    </Component>
  );
}
