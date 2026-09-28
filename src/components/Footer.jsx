import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const operatingHours = [
    { day: 'Monday:', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday:', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday:', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday:', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday:', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday:', hours: 'Closed' },
    { day: 'Sunday:', hours: 'Closed' },
  ];

  return (
    <footer className="bg-[#111111] text-gray-300 text-xs sm:text-sm py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-12 border-b border-gray-800/80">
          
          {/* Column 1: Brand Info & Social Links */}
          <div className="space-y-5">
            <a href="#" className="inline-block bg-white p-2.5 rounded-lg shadow-sm">
              <img src={logo} alt="Kiran Food Export Logo" className="h-12 w-auto object-contain" />
            </a>
            
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm max-w-sm">
              Based in Maharashtra, India. Exporting high-quality fresh produce, Indian spices, and marine products globally.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/kiranfoodexport"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-600 hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/KIRAN%20FOOD%20EXPORT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-600 hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>


          {/* Column 2: Contact Us */}
          <div>
            <div className="inline-block border-b-2 border-rose-500 pb-1 mb-6">
              <h3 className="text-sm font-serif font-bold text-white tracking-widest uppercase">
                CONTACT US
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href="tel:+919833272355" className="hover:text-amber-400 transition-colors font-semibold">
                  +91 98332 72355
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href="mailto:gkdesai97@gmail.com" className="hover:text-amber-400 transition-colors">
                  gkdesai97@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  20/25/90 Pen-Khopoli Road, Jambhivali Village, Raigad – 402107, Maharashtra, India
                </span>
              </div>

              {/* Chat on WhatsApp */}
              <div className="pt-3">
                <a
                  href="https://wa.me/919833272355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#d9a01c] hover:text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Operating Hours */}
          <div>
            <div className="inline-block border-b-2 border-rose-500 pb-1 mb-6">
              <h3 className="text-sm font-serif font-bold text-white tracking-widest uppercase">
                OPERATING HOURS
              </h3>
            </div>

            <div className="divide-y divide-gray-800/80">
              {operatingHours.map((item, idx) => (
                <div key={idx} className="py-2 flex justify-between items-center text-xs sm:text-sm text-gray-300">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="font-medium text-gray-200">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-gray-400 font-sans">
          &copy; Kiran Food Export. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


