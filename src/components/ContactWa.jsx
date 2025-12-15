import React from "react";

export default function ContactWa({
  image = "/vite.svg",
  subtitle = "Tanyakan stok atau konsultasi produk langsung dengan admin.",
  phone = "6285799799857",
  message = "Halo saya mau konsul",
}) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 rounded-2xl border border-[#25D366] px-5 py-4 text-[#0f8f6a] shadow-lg bg-white">
        {/* image */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#25D366] bg-white shadow-sm">
          <img src={image} alt="WhatsApp" className="h-8 w-8" />
        </div>
        {/* container text */}
        <div className="flex flex-col gap-2 w-full">
          <a
            href={waLink}
            className="ml-auto w-full rounded-xl border border-[#25D366] px-4 py-3 text-base font-bold text-[#0f8f6a] hover:bg-[#f3fff8] transition text-center shadow-sm"
          >
            Hubungi Via Whatsapp
          </a>
          <p className="text-sm text-[#0f8f6a]/80 leading-snug text-center md:text-left">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
