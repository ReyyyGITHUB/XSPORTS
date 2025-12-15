import React, { useState } from "react";
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
import Reveal from "./components/Reveal";

export default function LandingPage() {
  const categories = [
    "Sepatu Bola",
    "Futsal",
    "Running",
    "Casual",
    "Aksesoris",
  ];
  const [productCategory, setProductCategory] = useState("Semua");
  const [productSearch, setProductSearch] = useState("");

  const scrollToProducts = () => {
    const el = document.querySelector("#products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <Navbar />

      <main
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-28 pb-16 px-4"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/hero-pattern.png')] bg-cover bg-center opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_25%)]" />
        </div>
        <section className="relative overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 relative z-10">
            <Reveal direction="down">
              <BadgeHero title={"Marketplace Sepatu Original"} />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <Reveal className="flex flex-col gap-6" direction="left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Cari Sepatu Idaman,{" "}
                  <span className="text-blue-400">Gas Checkout!</span>
                </h1>
                <p className="text-base text-gray-200 max-w-xl">
                  Marketplace sepatu original & pilihan terbaik.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="w-full md:w-auto md:min-w-[180px]">
                    <ButtonMain
                      placeholder={"Belanja Sekarang"}
                      href="https://shopee.co.id/radhian99?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnO9Jm_aNal34FqapdBo1tVRX3dKLoz20hFHFwDTz7qcEe235PedN11LZ-TRk_aem_rgrVtdlBUT0ZeQUdNBDX4w&uls_trackid=54e9m26401e5&utm_content=3oM6USyZTVmcpFNvWXAUVUidPV11"
                    />
                  </div>
                  <div className="w-full md:w-auto md:min-w-[160px]">
                    <ButtonMain
                      placeholder={"Lihat Sekarang"}
                      type="secondary"
                      onClick={() => {
                        const el = document.querySelector("#products");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    />
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
              </Reveal>

              <Reveal
                className="flex flex-col gap-4 bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-5 shadow-lg"
                direction="right"
              >
                <span className="text-sm text-gray-300">Cari cepat</span>
                <CategoryDropdown
                  categories={["Semua", ...categories]}
                  value={productCategory}
                  onSelect={(cat) => {
                    setProductCategory(cat);
                    scrollToProducts();
                  }}
                />
                <Searchbar
                  placeholder={"Cari sepatu / brand / ukuran"}
                  onSearch={(term) => {
                    setProductSearch(term);
                    scrollToProducts();
                  }}
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-white">
        <BenefitSection />
        <ProductSection
          selectedCategory={productCategory}
          searchTerm={productSearch}
        />
        <TestimoniSection />
        <MapsSections />
        <PromoSection />
      </section>

      <FooterSection />
    </div>
  );
}
