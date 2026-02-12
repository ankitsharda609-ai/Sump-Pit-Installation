
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Common Questions</h2>
          <h3 className="text-4xl font-black text-slate-900">Expert Insights</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <i className={`fas fa-chevron-down text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
