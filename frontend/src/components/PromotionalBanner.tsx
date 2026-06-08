import React from "react";

const PromotionalBanner = () => {
  return (
    <section className="w-full max-w-6xl m-auto pb-10 px-4">
      <p className="uppercase tracking-[0.3em] text-sm text-orange-900 mb-4 pl-2">
        Promotional Banner
      </p>

      <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#1a0a00] via-[#3b1200] to-[#5b1f00] px-6 md:px-12 py-8">
        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              50% off your first order 🎉
            </h2>

            <p className="mt-3 text-gray-300 text-lg">
              Valid today only · Min order ₹199
            </p>
          </div>

          <div className="self-start md:self-center">
            <div className="border border-dashed border-orange-500/40 bg-orange-500/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <span className="text-orange-500 text-xl font-bold tracking-wider">
                FEAST50
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-32 w-32 rounded-full bg-orange-600/10 blur-3xl" />
      </div>
    </section>
  );
};

export default PromotionalBanner;