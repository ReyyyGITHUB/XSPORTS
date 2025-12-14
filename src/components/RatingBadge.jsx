import React from "react";

export default function RatingBadge({
  rating = "4.9",
  label = "5k+ Ulasan",
  accent = "#F7B733",
  image,
  imageAlt = "badge icon",
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : (
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: `${accent}1a`, color: accent }}
        >
          ★
        </span>
      )}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-gray-800">{rating}</span>
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    </div>
  );
}
