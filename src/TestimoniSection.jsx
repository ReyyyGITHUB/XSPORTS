import React from "react";

const defaultTestimonials = [
  {
    name: "Rizky Pratama",
    role: "Local Guide",
    message:
      "Pilihan jersey & sepatu banyak, pelayanannya enak. Lokasi gampang dicari dan stafnya sigap.",
    rating: "4.8",
  },
  {
    name: "Nadia Putri",
    role: "Pembeli",
    message: "Tempat bersih, rapi. Barang OK dan cepat sampai, packing aman.",
    rating: "4.9",
  },
  {
    name: "Bagus Saputra",
    role: "Pemain Futsal",
    message: "Sepatu futsalnya mantap, size pas sesuai guide. Adminnya responsif.",
    rating: "4.7",
  },
];

export default function TestimoniSection({
  heading = "Kata Mereka",
  description = "Dengar langsung pengalaman pelanggan setelah belanja di XSPORTS.",
  testimonials = defaultTestimonials,
}) {
  return (
    <section id="testimoni" className="w-full bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Testimoni
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-3xl">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="flex h-full flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl text-blue-500 leading-none">“</div>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.message}
              </p>

              <div className="mt-auto flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-semibold overflow-hidden">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    (item.name || "?").charAt(0)
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500">{item.role}</span>
                </div>
                {item.rating && (
                  <div className="ml-auto flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700">{item.rating}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
