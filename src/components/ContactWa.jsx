import React from "react";

export default function ContactWa({
  image = "/vite.svg",
  subtitle = "Tanyakan stok atau konsultasi produk langsung dengan admin.",
}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 rounded-xl border border-[#25D366] px-4 py-3 text-[#128C7E] shadow-sm">
        {/* image */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366] bg-white">
          <img src={image} alt="WhatsApp" className="h-7 w-7" />
        </div>
        {/* container text */}
        <div className="flex flex-col gap-2 w-full">
          <button
            type="button"
            className="ml-auto w-full rounded-xl border border-[#25D366] px-3 py-2 text-base font-bold text-[#128C7E] hover:bg-[#f3fff8] transition"
          >
            Hubungi Via Whatsapp
          </button>
          <p className="text-sm text-[#128C7E]/80 leading-snug text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
