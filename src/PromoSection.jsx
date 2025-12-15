import React from "react";
import Reveal from "./components/Reveal";

export default function PromoSection({
  title = "Jangan Ketinggalan Promo",
  subtitle = "Masukkan email untuk dapat info diskon dan produk terbaru.",
  placeholder = "Masukkan email kamu",
  buttonLabel = "Dapetin Promo",
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.target);
      onSubmit(formData.get("email"));
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-14 px-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-xl relative">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
        <Reveal direction="up">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                  <path d="M4 8h5l-1-3 4 6 4-6-1 3h5" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                <p className="text-sm md:text-base text-gray-200">{subtitle}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v3" />
                <path d="M16.2 7.8 18 6" />
                <path d="M21 12h-3" />
                <path d="M18 18l-1.8-1.8" />
                <path d="M12 18v3" />
                <path d="M6 18l1.8-1.8" />
                <path d="M3 12h3" />
                <path d="M6 6l1.8 1.8" />
              </svg>
              <span>Diskon eksklusif mingguan</span>
            </div>
          </div>
        </Reveal>
        <Reveal direction="up" delay={80}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              name="email"
              required
              placeholder={placeholder}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-sm text-white placeholder:text-gray-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/40"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              {buttonLabel}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
