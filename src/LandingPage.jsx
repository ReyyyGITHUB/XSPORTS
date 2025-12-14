import React from "react";
import Navbar from "./components/Navbar";
import BadgeHero from "./components/BadgeHero";
import CategoryDropdown from "./components/CategoryDropdown";
import Searchbar from "./components/Searchbar";
import ButtonMain from "./components/ButtonMain";
import RatingBadge from "./components/RatingBadge";
import BenefitSection from "./BenefitSection";
import ProductSection from "./ProductSection";
import TestimoniSection from "./TestimoniSection";
import MapsSections from "./MapsSections";
import PromoSection from "./PromoSection";
import FooterSection from "./Footer";

export default function LandingPage() {
  const categories = [
    "Sepatu Bola",
    "Futsal",
    "Running",
    "Casual",
    "Aksesoris",
  ];

  return (
    <div className="scroll-smooth">
      <Navbar />

      <main
        id="home"
        className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-28 pb-16 px-4"
      >
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_25%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 relative z-10">
            <BadgeHero title={"Marketplace Sepatu Original"} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Cari Sepatu Idaman,{" "}
                  <span className="text-blue-400">Gas Checkout!</span>
                </h1>
                <p className="text-base text-gray-200 max-w-xl">
                  Marketplace sepatu original & pilihan terbaik.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="w-full md:w-auto md:min-w-[180px]">
                    <ButtonMain placeholder={"Belanja Sekarang"} />
                  </div>
                  <div className="w-full md:w-auto md:min-w-[160px]">
                    <ButtonMain placeholder={"Lihat Produk"} type="secondary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  <RatingBadge
                    rating="4.7"
                    label="Rating 4.7/5"
                    accent="#34D399"
                  />
                  <RatingBadge
                    rating="13+"
                    label="13+ Ulasan"
                    accent="#38BDF8"
                  />
                  <RatingBadge
                    rating="Ambil"
                    label="Ambil di Toko"
                    accent="#F59E0B"
                  />
                  <RatingBadge
                    rating="Antar"
                    label="Pesan Antar"
                    accent="#A855F7"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-5 shadow-lg">
                <span className="text-sm text-gray-300">Cari cepat</span>
                <CategoryDropdown categories={categories} />
                <Searchbar placeholder={"Cari sepatu / brand / ukuran"} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-white">
        <BenefitSection />
        <ProductSection />
        <TestimoniSection />
        <MapsSections />
        <PromoSection />
      </section>

      <FooterSection />
    </div>
  );
}
