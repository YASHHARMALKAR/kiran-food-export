import React from 'react';

import agroProducts from '../assets/Product/agro_products.png';
import herbsAndPowder from '../assets/Product/herbs_and_powder.png';
import grainsAndFlour from '../assets/Product/grains_and_flour.png';
import riceAndPulses from '../assets/Product/rice_and_pulses.png';
import dryFruitsAndNuts from '../assets/Product/dry_fruits_and_nuts.png';
import teaAndCoffee from '../assets/Product/tea_and_coffee.png';
import sugarJaggery from '../assets/Product/sugar_jaggery.png';
import vegetable from '../assets/Product/vegetable.png';
import fruits from '../assets/Product/fruits.png';
import nutraceutical from '../assets/Product/nutraceutical.png';
import organicExtracts from '../assets/Product/natural_and_organic_extracts.png';
import spices from '../assets/Product/spices.png';
import handicrafts from '../assets/Product/handicrafts.png';
import textile from '../assets/Product/textile.png';
import household from '../assets/Product/household.png';
import personalCare from '../assets/Product/personal_care.png';
import packaging from '../assets/Product/packaging.png';
import traditionalSnack from '../assets/Product/traditionalSnack.png';

export default function Products() {
  const productsList = [
    { title: 'AGRO PRODUCTS', img: agroProducts },
    { title: 'HERBS & POWDERS', img: herbsAndPowder },
    { title: 'GRAINS & FLOUR', img: grainsAndFlour },
    { title: 'RICE & PULSES', img: riceAndPulses },
    { title: 'DRY FRUITS & NUTS', img: dryFruitsAndNuts },
    { title: 'TEA & COFFEE', img: teaAndCoffee },
    { title: 'SUGAR & JAGGERY', img: sugarJaggery },
    { title: 'VEGETABLES', img: vegetable },
    { title: 'FRUITS', img: fruits },
    { title: 'NUTRACEUTICALS', img: nutraceutical },
    { title: 'NATURAL & ORGANIC EXTRACTS', img: organicExtracts },
    { title: 'SPICES', img: spices },
    { title: 'HANDICRAFTS', img: handicrafts },
    { title: 'TEXTILES', img: textile },
    { title: 'HOUSEHOLD', img: household },
    { title: 'PERSONAL CARE', img: personalCare },
    { title: 'PACKAGING', img: packaging },
    { title: 'TRADITIONAL SNACKS ', img: traditionalSnack },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-[#faf8f5] text-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header Tagline */}
        <span className="block italic font-serif text-[#c86518] text-sm sm:text-base md:text-lg mb-2">
          Functional &amp; Utilitarian
        </span>

        {/* Main Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-gray-900 mb-4 tracking-tight">
          Products
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-16 font-sans">
          Beyond our core specialties, we provide a wide array of high-quality Indian goods, answering practical global demands with an unwavering commitment to quality.
        </p>

        {/* Products Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between group transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full h-44 sm:h-48 bg-white flex items-center justify-center p-1 sm:p-1.5 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>




              {/* Title Strip at bottom */}
              <div className="py-3.5 px-4 bg-white border-t-2 border-amber-500/60 text-center">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-gray-800 uppercase font-sans group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
