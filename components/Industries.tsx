import React from 'react';
import { INDUSTRIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
             <FadeIn>
               <div className="inline-block px-4 py-2 rounded-full bg-surface border border-border mb-6">
                  <span className="text-sm font-heading font-bold text-primary tracking-wide uppercase">Tailored Solutions</span>
               </div>
             </FadeIn>
             <FadeIn delay={100}>
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight">
                  Industries We Serve
               </h2>
             </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
                <FadeIn 
                    key={idx} 
                    delay={idx * 100 + 200}
                    className="group relative bg-surface rounded-[2rem] p-10 border border-border hover:border-primary/50 transition-all duration-300 ease-premium flex flex-col hover:-translate-y-2 hover:shadow-lift h-full"
                >
                    {/* Hover Arrow */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-premium transform group-hover:translate-x-0 translate-x-4">
                        <div className="bg-primary rounded-full p-3 shadow-glow">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300 ease-premium group-hover:rotate-6 group-hover:shadow-glow">
                        <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                            {industry.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed mb-8">
                            {industry.description}
                        </p>
                    </div>

                    {/* Footer Numbering */}
                    <div className="pt-8 border-t border-border group-hover:border-primary/20 transition-colors duration-300 flex items-center gap-4">
                        <div className="w-12 h-1 bg-border group-hover:bg-accent transition-colors duration-300 rounded-full group-hover:w-24"></div>
                        <span className="text-xl font-mono font-bold text-text-dim group-hover:text-text transition-colors duration-300">
                            0{idx + 1}
                        </span>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;