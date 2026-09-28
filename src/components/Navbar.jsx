import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT US', href: '#about' },
    { name: 'CORE EXPORTS', href: '#exports' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'HERITAGE', href: '#heritage' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'REVIEWS', href: '#reviews' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md py-2 border-b border-gray-200/80' : 'py-3 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center group">
            <img 
              src={logo} 
              alt="M. RAM Food Export Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-bold tracking-wider text-gray-800 hover:text-amber-600 transition-colors duration-200 relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTA - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/919833272355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#181818] hover:bg-black text-white px-6 py-3 text-xs xl:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:shadow-lg active:scale-95 border border-transparent"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CONTACT ON WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-black hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-gray-800 hover:text-amber-600 hover:bg-gray-50 transition-colors tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a
              href="https://wa.me/919833272355"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#181818] hover:bg-black text-white px-5 py-3 text-xs font-bold tracking-wider uppercase shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CONTACT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

