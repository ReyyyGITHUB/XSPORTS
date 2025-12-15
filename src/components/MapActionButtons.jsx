import React from "react";

export default function MapActionButtons({
  mapsLink = "https://goo.gl/maps/6VDZ5qxG1Jw6m7er9",
  sendToPhoneLink = "https://wa.me/6285799799857?text=Halo%20saya%20mau%20konsul",
  pickupNote = "Tersedia Ambil di Toko & Pesan Antar",
  contact = "0813-9133-2561",
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <a
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
        >
          Buka di Google Maps
        </a>
        <a
          href={sendToPhoneLink}
          className="inline-flex items-center justify-center rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition"
        >
          Simpan via WhatsApp
        </a>
        <a
          href={`tel:${contact}`}
          className="inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          Hubungi: {contact}
        </a>
      </div>
      <p className="text-sm text-gray-600">{pickupNote}</p>
    </div>
  );
}
