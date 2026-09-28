import React from 'react';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CoreExports from './components/CoreExports';
import Products from './components/Products';
import Heritage from './components/Heritage';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Dynamic SEO Meta */}
      <SEOHead />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <CoreExports />
        <Products />
        <Heritage />
        <Certifications />
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
