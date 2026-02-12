
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <i className="fas fa-water text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hidden sm:inline">
            RC Sump Solutions
          </span>
          <span className="text-xl font-bold text-blue-700 sm:hidden">RC Sump</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:8443406413" className="text-emerald-600 font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <i className="fas fa-phone"></i>
            <span className="hidden xs:inline">(844) 340-6413</span>
          </a>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 text-sm sm:text-base">
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
