import React from "react";
import ButtonMain from "./ButtonMain";

export const products = [
  {
    image: "/vite.svg",
    title: "ProSpeed Bola Elite FG",
    price: "Rp 899.000",
    rating: "4.8",
    reviews: "124 ulasan",
    sizes: ["41", "42", "43", "44"],
    badgeText: "Best Seller",
    badgeTone: "emerald",
    category: "Sepatu Bola",
  },
  {
    image: "/vite.svg",
    title: "StreetFutsal Grip IC",
    price: "Rp 599.000",
    rating: "4.7",
    reviews: "98 ulasan",
    sizes: ["39", "40", "41", "42"],
    badgeText: "Diskon",
    badgeTone: "red",
    category: "Futsal",
  },
  {
    image: "/vite.svg",
    title: "RunFlow Tempo",
    price: "Rp 749.000",
    rating: "4.6",
    reviews: "150 ulasan",
    sizes: ["40", "41", "42", "43"],
    badgeText: "Baru",
    badgeTone: "blue",
    category: "Running",
  },
  {
    image: "/vite.svg",
    title: "Classic Court Low",
    price: "Rp 499.000",
    rating: "4.5",
    reviews: "75 ulasan",
    sizes: ["39", "40", "41", "42"],
    badgeText: "Best Seller",
    badgeTone: "emerald",
    category: "Casual",
  },
  {
    image: "/vite.svg",
    title: "AeroKnit Running Pro",
    price: "Rp 1.199.000",
    rating: "4.9",
    reviews: "210 ulasan",
    sizes: ["40", "41", "42", "43"],
    badgeText: "Baru",
    badgeTone: "blue",
    category: "Running",
  },
  {
    image: "/vite.svg",
    title: "Futsal Control Max",
    price: "Rp 649.000",
    rating: "4.7",
    reviews: "130 ulasan",
    sizes: ["39", "40", "41", "42"],
    badgeText: "Diskon",
    badgeTone: "red",
    category: "Futsal",
  },
];

const badgeStyles = {
  red: "bg-red-100 text-red-600",
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
};

export default function CardProduct({
  image = "/vite.svg",
  title = "ProSpeed Bola Elite FG",
  price = "Rp 899.000",
  rating = "4.8",
  reviews = "124 ulasan",
  sizes = ["41", "42", "43", "44"],
  badgeText = "Diskon",
  badgeTone = "red",
}) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
          badgeStyles[badgeTone] || badgeStyles.red
        }`}
      >
        {badgeText}
      </div>

      <div className="relative w-full overflow-hidden bg-gray-50">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>

      <div className="flex flex-col gap-3 px-4 py-4">
        <div className="flex flex-row items-center gap-3 text-sm text-gray-600">
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-gray-800">{rating}</span>
          </div>
          <span className="text-gray-400">({reviews})</span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          <h2 className="text-lg font-bold text-blue-600">{price}</h2>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {sizes.map((size) => (
            <div
              key={size}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
            >
              {size}
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-2">
          <ButtonMain placeholder={"Beli Sekarang"} />
        </div>
      </div>
    </div>
  );
}
