import React from 'react';
import heroImg from '../assets/heroimg.png';

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 bg-white min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[550px] lg:min-h-[620px]">
        
        {/* Left Column: Terracotta/Warm Content Box */}
        <div className="bg-[#c86518] px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center text-white">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Tagline */}
            <span className="block italic font-serif text-amber-100/90 text-sm sm:text-base md:text-lg mb-3 tracking-wide">
              Authentic Indian Produce
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-[1.12] mb-6 tracking-tight">
              Exporting India's Finest to the World.
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg font-normal">
              Exporting high-quality fresh produce, Indian spices, and marine products globally. Rooted in heritage tradition, delivered with practical purpose.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="https://wa.me/919833272355"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#181818] hover:bg-black text-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:shadow-lg active:scale-95 border border-transparent"
              >
                ENQUIRE NOW
              </a>

            </div>
          </div>
        </div>

        {/* Right Column: Hero Showcase Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto min-h-full overflow-hidden bg-gray-900">
          <img
            src={heroImg}
            alt="Authentic Indian produce, Alphonso mangoes and Indian spices"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}

