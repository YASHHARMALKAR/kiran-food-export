import React from 'react';

export default function Reviews() {
  const reviewsList = [
    {
      quote: "Kiran Food Export has been a dependable partner for sourcing quality Indian food products. Their product quality, packaging, and professional communication have made the entire export process smooth and efficient.",
      author: "Rajiv Mehta"
    },
    {
      quote: "We have been impressed with the quality and freshness of the products supplied by Kiran Food Export. Their team is responsive, professional, and committed to maintaining high standards.",
      author: "Daniel Wilson"
    },
    {
      quote: "Kiran Food Export provides excellent service and consistent product quality. Their attention to packaging and shipment coordination makes them a reliable choice for international food sourcing.",
      author: "Ahmed Khan"
    },
    {
      quote: "Working with Kiran Food Export has been a positive experience. The team understands international buyer requirements and ensures that orders are handled professionally from product selection through shipment.",
      author: "Michael Thompson"
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#faf8f5] text-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tagline */}
        <span className="block italic font-serif text-[#c86518] text-sm sm:text-base md:text-lg mb-2">
          Client Testimonials
        </span>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-gray-900 mb-4 tracking-tight">
          Trusted Globally
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16 font-sans">
          Hear what our international partners have to say about our commitment to quality and seamless export processes.
        </p>

        {/* Reviews Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {reviewsList.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-rose-600 p-6 md:p-8 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Gold Quote Icon */}
                <div className="text-[#d9a01c] font-serif text-4xl leading-none mb-3 font-bold select-none">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed font-sans mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Name */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-serif font-bold text-[#c86518] block">
                  — {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
