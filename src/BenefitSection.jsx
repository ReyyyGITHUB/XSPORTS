import React from "react";
import BadgeHero from "./components/BadgeHero";
import CardBenefit from "./components/CardBenefit";
import ContactWa from "./components/ContactWa";
import Reveal from "./components/Reveal";
import {
  Layers,
  BadgePercent,
  ShieldCheck,
  Truck,
  Store,
  Headset,
} from "lucide-react";

export default function BenefitSection() {
  const benefits = [
    {
      title: "Pilihan Lengkap",
      desc: "Bola, futsal, running, sampai casual. Koleksi update tiap minggu.",
      icon: Layers,
    },
    {
      title: "Harga Masuk Akal",
      desc: "Promo dan diskon rutin, harga aman buat dompet anak muda.",
      icon: BadgePercent,
    },
    {
      title: "Aman & Terpercaya",
      desc: "Pembayaran aman, produk original, retur mudah jika ada kendala.",
      icon: ShieldCheck,
    },
    {
      title: "Cepat Sampai",
      desc: "Estimasi pengiriman jelas, opsi same-day untuk area Semarang.",
      icon: Truck,
    },
    {
      title: "Bisa Ambil di Toko",
      desc: "Ambil langsung di store kalau buru-buru butuh sepatu.",
      icon: Store,
    },
    {
      title: "CS Responsif",
      desc: "Bantu pilih size & rekomendasi model sesuai kebutuhanmu.",
      icon: Headset,
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
            Marketplace sepatu original dengan layanan cepat, stok lengkap, dan
            tim yang siap bantu pilih size terbaik.
          </p>
        </div>

        <div className="w-full mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
            {benefits.map((item, idx) => (
              <Reveal
                key={item.title}
                className="min-w-[260px] md:min-w-0"
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 40}
              >
                <CardBenefit
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-5 shadow-sm transition hover:border-blue-400">
            <Reveal className="flex-1" direction="left">
              <h3 className="text-lg font-semibold text-gray-900">
                Butuh rekomendasi size?
              </h3>
              <p className="text-sm text-gray-700">
                Konsultasi langsung dengan admin sebelum checkout biar ukuran
                pas.
              </p>
            </Reveal>
            <Reveal className="w-full md:w-auto" direction="right">
              <ContactWa />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
