import React from "react";

export default function MapInfoItem({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm uppercase tracking-wide text-gray-500">{label}</span>
      <p className="text-base font-semibold text-gray-900">{value}</p>
    </div>
  );
}
