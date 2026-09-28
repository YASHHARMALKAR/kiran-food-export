import React from 'react';

export default function Certifications() {
  const certsList = [
    { name: 'ALIBABA GOLD SUPPLIER' },
    { name: 'FDA CERTIFIED' },
    { name: 'FSSAI CERTIFIED' },
    { name: 'GMP CERTIFIED' },
    { name: 'GPSR COMPLIANT' },
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#faf8f5] text-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tagline */}
        <span className="block italic font-serif text-[#c86518] text-sm sm:text-base md:text-lg mb-2">
          Quality Assured
        </span>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-gray-900 mb-4 tracking-tight">
          Certifications
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16 font-sans">
          Our commitment to global standards is validated by our comprehensive range of certifications.
        </p>

        {/* Certifications Row (5 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certsList.map((cert, index) => (
            <div
              key={index}
              className="bg-[#faf8f4] hover:bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-[#d9a01c] border-x border-b border-gray-100 p-6 flex items-center justify-center min-h-[100px] group transform hover:-translate-y-1"
            >
              <span className="text-xs sm:text-sm font-bold tracking-wider text-gray-900 uppercase font-sans text-center group-hover:text-amber-700 transition-colors">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
