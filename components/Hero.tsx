
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" 
          alt="Clean basement" 
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 backdrop-blur-sm">
            <i className="fas fa-certificate text-sm"></i>
            <span className="text-sm font-semibold tracking-wide uppercase">Rapid City's Trusted Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Protect Your Foundation <br />
            <span className="text-blue-400">Keep Your Home Dry</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Professional sump pit installations featuring secondary jackhammering, high-capacity basins, and industry-leading Radon-Sealed safety lids.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-emerald-900/20 hover:bg-emerald-600 transition-all hover:-translate-y-1">
              Start Free Quote
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg backdrop-blur-md hover:bg-white/20 transition-all">
              View Our Services
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
            <div className="text-white">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-slate-400 text-sm">Homes Protected</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-white">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-slate-400 text-sm">Radon Sealing</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1">
          <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-emerald-50 text-emerald-600 rounded-bl-3xl font-bold text-xs uppercase tracking-widest">
              Limited Time Offer
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Request a Free Inspection</h3>
            <p className="text-slate-600 text-sm italic">"Don't wait for the next heavy rain. Get your basement protected today."</p>
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
