
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { BLOG_POST } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <Services />

        {/* Informational Section / Blog Style */}
        <section id="about" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">
                  Professional Sump Pit Installation in Rapid City, SD
                </h2>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Keeping your basement dry is not just about comfort—it's about protecting your home's foundation and your family's health. At <strong>RC Sump Solutions</strong>, we specialize in high-end sump pit installations featuring advanced concrete work and safety sealing.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">1</span>
                      Secondary Jackhammering
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Unlike standard installations, our team utilizes specialized equipment for secondary jackhammering. This allows us to cut through thick existing basement slabs with precision, creating a custom-sized cavity for high-capacity basins while minimizing dust and structural impact.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">2</span>
                      Radon Sealed Lids
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Radon gas is a serious concern in South Dakota. Our installations include Radon Sealed Lids as a standard. These lids feature airtight gaskets, Lexan construction, and sealed cord grommets to ensure air safety.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-blue-600 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-blue-100 font-medium mb-1 uppercase tracking-wider text-xs">Black Hills Service Area</p>
                    <p className="text-xl font-bold">Ready to secure your home?</p>
                  </div>
                  <a href="tel:8443406413" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                    (844) 340-6413
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* Social Proof / Trust Indicators */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">We follow all local and safety codes</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
              <i className="fas fa-shield-alt text-4xl"></i>
              <i className="fas fa-industry text-4xl"></i>
              <i className="fas fa-home text-4xl"></i>
              <i className="fas fa-check-circle text-4xl"></i>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <AIChat />
    </div>
  );
};

export default App;
