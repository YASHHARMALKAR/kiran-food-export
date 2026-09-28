import React from 'react';
import coreExport1 from '../assets/coreExport1.png';
import coreExport2 from '../assets/coreExport2.png';
import coreExport3 from '../assets/coreExport3.png';

export default function CoreExports() {
  return (
    <section id="exports" className="scroll-mt-16 bg-white overflow-hidden">
      
      {/* Row 1: Fresh Regional Produce & Ratnagiri Alphonso */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[520px]">
        {/* Left Content Box */}
        <div className="bg-[#e2a917] px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center text-gray-900">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 leading-[1.18] mb-6 tracking-tight">
              Fresh Regional Produce &amp; Ratnagiri Alphonso
            </h2>
            <p className="text-gray-900/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Our signature offering. We export the finest seasonal fruits, highlighted by the world-renowned Ratnagiri Alphonso mangoes, ensuring a taste of authentic Indian orchards reaches your destination.
            </p>
          </div>
        </div>
        {/* Right Image Box */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-auto overflow-hidden bg-gray-900">
          <img
            src={coreExport1}
            alt="Fresh Regional Produce & Ratnagiri Alphonso Mangoes"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Row 2: Traditional Spices & Authentic Masalas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[520px]">
        {/* Left Image Box */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-auto overflow-hidden bg-gray-900 order-2 lg:order-1">
          <img
            src={coreExport2}
            alt="Traditional Spices & Authentic Masalas"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
        {/* Right Content Box */}
        <div className="bg-[#e31e24] px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center text-white order-1 lg:order-2">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-[1.18] mb-6 tracking-tight">
              Traditional Spices &amp; Authentic Masalas
            </h2>
            <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              The essence of the Spice Route. A vibrant, exotic collection of high-quality whole and ground spices, meticulously sourced to deliver intense aromas and robust flavors.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3: Premium Frozen Seafood & Marine Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[520px]">
        {/* Left Content Box */}
        <div className="bg-[#c8e217] px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center text-gray-900">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 leading-[1.18] mb-6 tracking-tight">
              Premium Frozen Seafood &amp; Marine Products
            </h2>
            <p className="text-gray-900/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Pristine catches from coastal waters. We supply top-tier frozen seafood, including raw shrimp and prawns, processed with functional utility to guarantee unmatched freshness upon arrival.
            </p>
          </div>
        </div>
        {/* Right Image Box */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-auto overflow-hidden bg-gray-900">
          <img
            src={coreExport3}
            alt="Premium Frozen Seafood & Marine Products"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

    </section>
  );
}
