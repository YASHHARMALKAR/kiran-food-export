import React from 'react';
import heritageBg from '../assets/Heritagebgimg.png';
import heritageBanner from '../assets/Heritagebanner.png';

export default function Heritage() {
  return (
    <section id="heritage" className="relative py-24 md:py-32 overflow-hidden scroll-mt-16 text-white bg-gray-900">
      
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heritageBg})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-xl">
            {/* Tagline */}
            <span className="block italic font-serif text-[#c8e217] text-xl sm:text-2xl mb-4 tracking-wide">
              Trust in Heritage
            </span>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#d9a01c] leading-[1.08] mb-6 tracking-tight">
              Rooted in the Soil. Dedicated to the World.
            </h2>

            {/* Paragraph */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              Our foundation is built on deep relationships with the farmers of Maharashtra. We bridge the gap between local, time-honored agricultural traditions and the selective global market, ensuring that every shipment is a testament to India's rich, saturated harvest.
            </p>
          </div>

          {/* Right Column: Image Wrapper */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Lime/Chartreuse Offset Frame Accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#c8e217] rounded-none z-0" />

              {/* Main Image with White Frame */}
              <div className="relative z-10 border-4 border-white bg-white shadow-2xl overflow-hidden">
                <img
                  src={heritageBanner}
                  alt="Harvesting local Indian produce"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

