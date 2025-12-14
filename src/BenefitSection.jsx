import React from "react";
import BadgeHero from "./components/BadgeHero";
import CardBenefit from "./components/CardBenefit";
import ContactWa from "./components/ContactWa";

export default function BenefitSection() {
  const benefits = [
    {
      image: "/vite.svg",
      title: "Pilihan Lengkap",
      desc: "Bola, futsal, running, sampai casual. Koleksi update tiap minggu.",
    },
    {
      image: "/vite.svg",
      title: "Harga Masuk Akal",
      desc: "Promo dan diskon rutin, harga aman buat dompet anak muda.",
    },
    {
      image: "/vite.svg",
      title: "Aman & Terpercaya",
      desc: "Pembayaran aman, produk original, retur mudah jika ada kendala.",
    },
    {
      image: "/vite.svg",
      title: "Cepat Sampai",
      desc: "Estimasi pengiriman jelas, opsi same-day untuk area Semarang.",
    },
    {
      image: "/vite.svg",
      title: "Bisa Ambil di Toko",
      desc: "Ambil langsung di store kalau buru-buru butuh sepatu.",
    },
    {
      image: "/vite.svg",
      title: "CS Responsif",
      desc: "Bantu pilih size & rekomendasi model sesuai kebutuhanmu.",
    },
  ];

  return (
    <section id="benefits" className="w-full py-12">
      <div className="flex flex-col justify-center items-center max-w-6xl w-full mx-auto px-4">
        <BadgeHero title={"Keunggulan Kami"} />
        <div className="flex flex-col mt-4 gap-4 items-center justify-center text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Kenapa Belanja di{" "}
            <span className="text-blue-600 font-semibold">XSPORTS?</span>
          </h1>
          <p className="text-sm text-gray-700 max-w-2xl">
            Marketplace sepatu original dengan layanan cepat, stok lengkap, dan tim yang siap bantu pilih size terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full">
          {benefits.map((item) => (
            <CardBenefit
              key={item.title}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        <div className="mt-8 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-5 shadow-sm">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Butuh rekomendasi size?
              </h3>
              <p className="text-sm text-gray-700">
                Konsultasi langsung dengan admin sebelum checkout biar ukuran pas.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <ContactWa />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
