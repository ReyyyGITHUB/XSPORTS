import React from "react";
import BadgeHero from "./components/BadgeHero";
import Navbar from "./components/Navbar";
import CategoryDropdown from "./components/CategoryDropdown";
import Searchbar from "./components/Searchbar";
import ButtonMain from "./components/ButtonMain";
import RatingBadge from "./components/RatingBadge";

export default function LandingPage() {
  const categories = ["Sepatu A", "Sepatu B", "Jersey", "Celana"];

  return (
    <div>
      <div className="flex flex-col bg-[#FAFAFA] px-4 h-screen">
        {/* navbar */}
        <div className="w-full my-5">
          <Navbar />
        </div>
        {/* Hero */}
        <div className="flex flex-col">
          {/* badge */}
          <div className="flex justify-center">
            <BadgeHero title={"Test from hello world!"} />
          </div>
          {/* container title */}
          <div className="flex flex-col gap-3 justify-center items-center mt-8">
            <h1 className="text-center text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p className="text-center text-lg font-normal">
              Lorem, ipsum dolor sit amet consectetur,
            </p>
          </div>
          {/* container cta */}
          <div className="flex flex-col bg-white p-4 rounded-2xl shadow-sm mt-6 max-w-2xl w-full mx-auto gap- border-gray-100 border gap-4">
            <CategoryDropdown categories={categories} />
            <Searchbar placeholder={"Cari sepatu / brand / ukuran"} />
          </div>
        </div>

        {/* Button Container */}
        <div className="flex flex-row mt-8 items-center w-full gap-3">
          <ButtonMain placeholder={"Belanja Sekarang"} />
        </div>

        {/* Rating Container */}
        <div className="grid grid-cols-2 gap-3 mt-6 w-full max-w-md mx-auto">
          <RatingBadge rating="4.9" label="5k+ Ulasan" image="/vite.svg" />
          <RatingBadge rating="4.7" label="2k+ Pelanggan" accent="#4C9AFF" image="/vite.svg" />
          <RatingBadge rating="4.8" label="500+ Produk" accent="#34D399" image="/vite.svg" />
          <RatingBadge rating="5.0" label="Pengiriman Cepat" accent="#FF6B6B" image="/vite.svg" />
        </div>
      </div>
    </div>
  );
}
