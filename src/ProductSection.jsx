import React, { useMemo, useState, useEffect } from "react";
import BadgeHero from "./components/BadgeHero";
import CardProduct, { products } from "./components/CardProduct";
import CategoryButton from "./components/CategoryButton";
import Reveal from "./components/Reveal";

export default function ProductSection({
  selectedCategory = "Semua",
  searchTerm = "",
}) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm]);

  const categories = [
    "Semua",
    "Sepatu Bola",
    "Futsal",
    "Running",
    "Casual",
    "Aksesoris",
  ];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === "Semua" || p.category === activeCategory;
      const matchTerm =
        term.trim() === "" ||
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.category.toLowerCase().includes(term.toLowerCase());
      return matchCat && matchTerm;
    });
  }, [activeCategory, term]);

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
          {categories.map((cat) => (
            <div key={cat} className="w-auto min-w-[140px] flex-shrink-0">
              <CategoryButton
                label={cat}
                active={cat === activeCategory}
                onClick={() => setActiveCategory(cat)}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
          {filtered.map((product, idx) => (
            <Reveal
              key={product.title}
              className="h-full"
              delay={idx * 50}
              direction={idx % 2 === 0 ? "up" : "right"}
            >
              <CardProduct {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
