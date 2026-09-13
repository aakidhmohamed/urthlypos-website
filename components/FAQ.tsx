import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative bg-canvas">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <FadeIn className="bg-surface-raised rounded-[2.5rem] p-10 md:p-14 border border-border relative overflow-hidden shadow-card-lg">
                     {/* Decor */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-amber-subtle rounded-full blur-3xl -mr-10 -mt-10"></div>

                     <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 relative z-10">
                         <div className="md:w-1/3">
                            <span className="text-sm font-heading font-bold tracking-widest text-amber-DEFAULT uppercase mb-4 block">FAQS</span>
                            <h2 className="text-4xl font-heading font-extrabold text-text mb-4 italic">Frequently Asked Questions</h2>
                         </div>
                         <div className="md:w-2/3 space-y-4">
                             {FAQS.map((faq, idx) => (
                                 <FadeIn key={idx} delay={idx * 100}>
                                     <div className="border-b border-border pb-4">
                                         <button 
                                            className="w-full flex items-center justify-between text-left py-4 rounded-lg group transition-all duration-200"
                                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                         >
                                             <span className={`font-heading font-semibold transition-colors duration-300 ${openIndex === idx ? 'text-amber-DEFAULT' : 'text-text group-hover:text-amber-DEFAULT'}`}>
                                                 {faq.question}
                                             </span>
                                             <div className={`p-1 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-amber-subtle text-amber-DEFAULT rotate-180' : 'bg-canvas text-text-muted group-hover:text-text group-hover:bg-surface-card'}`}>
                                                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                             </div>
                                         </button>
                                         <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                             <p className="text-text-secondary text-sm leading-relaxed pb-4 pr-4">
                                                 {faq.answer}
                                             </p>
                                         </div>
                                     </div>
                                 </FadeIn>
                             ))}
                         </div>
                     </div>
                 </FadeIn>
            </div>
        </section>
    );
};

export default FAQ;