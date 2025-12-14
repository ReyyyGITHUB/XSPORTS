import React from "react";
import MapInfoItem from "./components/MapInfoItem";
import MapActionButtons from "./components/MapActionButtons";

const defaultMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.456123!2d110.392086!3d-6.990422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4f4f9a6c4b%3A0x7d8c2c34a35c9b85!2sSemarang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

export default function MapsSections({
  heading = "Temukan Kami",
  subheading = "Lokasi & Jam Operasional",
  storeName = "XSPORTS Store (Semarang)",
  city = "Semarang",
  address = "Jl. Simongan, Manyaran, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50147",
  hours = "Buka — Tutup pukul 18.00",
  contact = "0813-9133-2561",
  mapsLink = "https://goo.gl/maps/6VDZ5qxG1Jw6m7er9",
  sendToPhoneLink = "#",
  pickupNote = "Tersedia Ambil di Toko & Pesan Antar",
  mapUrl = defaultMapUrl,
}) {
  return (
    <section id="lokasi" className="w-full bg-[#FAFAFA] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {heading}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{subheading}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              title="Lokasi Toko"
              src={mapUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-gray-900">
                {storeName}
              </h3>
              <p className="text-base text-gray-700">{city}</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <MapInfoItem label="Alamat" value={address} />
              <MapInfoItem label="Jam Operasional" value={hours} />
              <MapInfoItem label="Kontak" value={contact} />
            </div>

            <MapActionButtons
              mapsLink={mapsLink}
              sendToPhoneLink={sendToPhoneLink}
              pickupNote={pickupNote}
              contact={contact}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
