
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-water text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white">RC Sump Solutions</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in professional sump pit installations and basement waterproofing for the Black Hills region. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sump Pit Installation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Radon Safety Lids</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Secondary Jackhammering</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Basement Drainage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#faqs" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
                <span>500 Main St<br />Rapid City, SD 57701</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-blue-500 mt-1"></i>
                <a href="tel:8443406413" className="hover:text-white transition-colors">(844) 340-6413</a>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-envelope text-blue-500 mt-1"></i>
                <span>service@rcsumpsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 RC Sump Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Serving Rapid City, SD</span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
