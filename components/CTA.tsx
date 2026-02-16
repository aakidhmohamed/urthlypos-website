import React from 'react';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="relative bg-surface/50 backdrop-blur-md border border-border rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden shadow-2xl">
            {/* Decorative Border Gradient */}
            <div className="absolute inset-0 border-[1px] border-primary/20 rounded-[2.5rem] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Limited Time Offer
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6 tracking-tight leading-tight">
                    Start Your <span className="text-primary">Offline-First</span> <br className="hidden md:block" /> Journey Today
                </h2>
                
                <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                    Stop losing sales to internet outages. Get the POS system that guarantees 100% uptime, detailed analytics, and complete data ownership.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-heading font-bold transition-all duration-300 ease-premium shadow-glow hover:shadow-glow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group focus-ring">
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        Download Free Trial
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-text border border-border hover:border-primary/50 rounded-xl font-heading font-bold transition-all duration-300 ease-premium flex items-center justify-center gap-2 group focus-ring">
                        View Live Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-text-dim font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>14-Day Free Trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Cancel Anytime</span>
                    </div>
                </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;