import React from 'react';

export default function AboutUs() {
  const pillars = [
    {
      number: '01',
      title: 'Quality',
      description: 'Premium selection ensuring the highest standard for global markets.'
    },
    {
      number: '02',
      title: 'Local Sourcing',
      description: 'Direct partnerships with regional farmers in Maharashtra.'
    },
    {
      number: '03',
      title: 'Freshness',
      description: 'Meticulous handling to preserve peak flavor and nutritional value.'
    },
    {
      number: '04',
      title: 'Authenticity',
      description: 'True Indian flavors, uncompromised and true to tradition.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5] text-gray-800 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#c86518] leading-tight tracking-tight max-w-3xl mx-auto mb-6">
          Passionate. Welcoming. Authentic. Proud.
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-14 font-sans">
          Kiran Food Export is an India-based sourcing and export partner built to make global buyers' access to Indian supply simple, reliable and commercially sound. We work across food, agriculture, packaging, medical consumables, nutraceuticals, frozen foods, dry fruits, nuts and marine products — connecting international buyers with the right products, the right suppliers, and the right process to get shipments moving.
        </p>

        {/* Leadership Section */}
        <div className="mb-16">
          <span className="block italic font-serif text-[#c86518] text-sm sm:text-base mb-6">
            Our Leadership
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Leadership Card 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-[#c86518] hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-1">
                Ganesh Kamlakar Desai
              </h3>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">
                PROPRIETOR
              </span>
            </div>

            {/* Leadership Card 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-[#c86518] hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-1">
                Tejas Santosh Chavan
              </h3>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">
                EXPORT MANAGER
              </span>
            </div>
          </div>
        </div>

        {/* Mission Box */}
        <div className="max-w-3xl mx-auto mb-20 bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-2 border-rose-400">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#c86518] mb-4">
            Our Mission
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg italic font-sans leading-relaxed">
            To make India-origin sourcing simpler, transparent and commercially practical — matching buyers with the right products, specifications and supply partners, every time.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-lime-400 flex flex-col justify-start items-center text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl md:text-4xl font-serif text-[#d99043] font-normal mb-3">
                {pillar.number}
              </span>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
