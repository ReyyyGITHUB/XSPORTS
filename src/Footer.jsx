import React from "react";

export default function FooterSection({
  brand = "XSPORTS",
  description = "Marketplace sepatu original: bola, futsal, running, hingga casual. Harga aman, pengiriman cepat, dan size guide dibantu admin.",
  menuLinks = [
    { label: "Home", href: "#home" },
    { label: "Produk", href: "#products" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Lokasi", href: "#lokasi" },
  ],
  helpLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Pengiriman", href: "#shipping" },
    { label: "Retur", href: "#return" },
    { label: "Kontak", href: "#contact" },
  ],
  socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
  contact = {
    phone: "0813-9133-2561",
    email: "cs@kickmarket.id",
    address: "Jl. Simongan, Semarang",
  },
  copyrightText = "© 2025 XSPORTS",
}) {
  return (
    <footer className="w-full bg-gray-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="text-2xl font-bold">{brand}</div>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
          <div className="text-sm text-gray-400 space-y-1">
            <p>{contact.address}</p>
            <p>Telp: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Menu
            </h4>
            <div className="flex flex-col gap-2 text-gray-300">
              {menuLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Bantuan
            </h4>
            <div className="flex flex-col gap-2 text-gray-300">
              {helpLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Sosial
            </h4>
            <div className="flex flex-col gap-2 text-gray-300">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        {copyrightText}
      </div>
    </footer>
  );
}
