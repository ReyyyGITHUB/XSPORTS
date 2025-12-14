import React from "react";

export default function RatingBadge({
  rating = "4.9",
  label = "5k+ Ulasan",
  accent = "#00e88f",
  image,
  imageAlt = "badge icon",
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur px-4 py-3 shadow-sm">
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-white/50"
        />
      ) : (
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: `${accent}20`, color: accent, boxShadow: `0 0 0 4px ${accent}10` }}
        >
          ⭐
        </span>
      )}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-white">{rating}</span>
        <span className="text-xs text-gray-200">{label}</span>
      </div>
    </div>
  );
}
