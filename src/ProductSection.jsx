import React from "react";
import BadgeHero from "./components/BadgeHero";
import CardProduct, { products } from "./components/CardProduct";
import CategoryButton from "./components/CategoryButton";

export default function ProductSection() {
  const categories = [
    "Semua",
    "Sepatu Bola",
    "Futsal",
    "Running",
    "Casual",
    "Aksesoris",
  ];

  return (
    <section id="products" className="w-full py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4">
        <BadgeHero title={"Produk Pilihan"} />
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Produk Kami</h1>
          <p className="text-sm text-gray-600">
            Temukan sepatu bola, futsal, running, sampai casual dengan harga
            aman dan ready size.
          </p>
        </div>

        <div className="flex w-full items-center gap-2 justify-start sm:justify-center overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <div key={cat} className="w-auto min-w-[140px] flex-shrink-0">
              <CategoryButton label={cat} active={idx === 0} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
          {products.map((product) => (
            <CardProduct key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
