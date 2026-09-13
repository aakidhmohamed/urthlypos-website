import React from 'react';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import FadeIn from './FadeIn';

const CTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Ambient amber radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,160,32,0.06), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="relative bg-surface-raised border border-border-amber rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden shadow-amber">

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-subtle border border-border-amber text-amber-DEFAULT text-xs font-bold uppercase tracking-wider mb-6 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-DEFAULT animate-pulse" />
              Limited Time Offer
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6 tracking-tight leading-tight">
              Start Your <span className="text-gradient-amber">Offline-First</span>{' '}
              <br className="hidden md:block" />
              Journey Today
            </h2>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop losing sales to internet outages. Get the POS system that guarantees 100% uptime, detailed analytics, and complete data ownership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to schedule a free demo of Urthly POS.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-canvas"
                style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Get Free Demo
              </a>
              <a
                href="#comparison"
                className="w-full sm:w-auto px-8 py-4 bg-surface text-text border border-border hover:border-border-amber rounded-xl font-heading font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                See Comparison
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-text-muted font-medium">
              {['14-Day Free Trial', 'No Credit Card Required', '0% Commission Per Bill'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-DEFAULT" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;