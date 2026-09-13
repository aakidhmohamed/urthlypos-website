import React from 'react';
import { COMPARISON_DATA, WHATSAPP_NUMBER } from '../constants';
import { CheckCircle2, XCircle, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import FadeIn from './FadeIn';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Comparison</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4">
              Why Traditional Cloud POS <br />
              <span className="text-gradient-amber">Fails Sri Lankan Retailers</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              Internet disruptions, server outages, and recurring monthly fees slow down your business. See how Urthly POS compares.
            </p>
          </FadeIn>
        </div>

        {/* Table */}
        <FadeIn delay={300}>
          <div className="bg-surface-raised border border-border rounded-3xl overflow-hidden shadow-card-lg">

            {/* Header Row */}
            <div className="grid grid-cols-12 bg-white/[0.03] border-b border-border p-6 md:p-8 text-sm items-center">
              <div className="col-span-5 md:col-span-4 text-text-muted uppercase font-mono text-xs tracking-wider">
                Feature / Capability
              </div>
              <div className="col-span-4 md:col-span-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider
                              bg-amber-subtle px-4 py-2 rounded-xl border border-border-amber text-amber-DEFAULT justify-center">
                <ShieldCheck className="w-4 h-4" />
                Urthly POS
              </div>
              <div className="col-span-3 md:col-span-4 text-text-muted text-center uppercase font-mono text-xs tracking-wider">
                Generic Cloud POS
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              {COMPARISON_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-6 md:p-8 items-center hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="col-span-5 md:col-span-4 font-heading font-bold text-text text-sm md:text-base pr-4">
                    {item.feature}
                  </div>

                  {/* Urthly column — amber-toned */}
                  <div className="col-span-4 md:col-span-4 px-2 md:px-4">
                    <div className="flex items-center gap-3 bg-amber-subtle border border-border-amber p-3 rounded-2xl text-amber-DEFAULT text-xs md:text-sm font-semibold group-hover:border-amber-DEFAULT/50 transition-colors">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>{item.urthly}</span>
                    </div>
                  </div>

                  {/* Others column — red-toned */}
                  <div className="col-span-3 md:col-span-4 px-2 md:px-4 text-center">
                    <div className="flex items-center gap-2 md:gap-3 bg-red-500/5 border border-red-500/10 p-3 rounded-2xl text-red-400/80 text-xs md:text-sm font-medium justify-center">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 hidden md:block" />
                      <span>{item.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="p-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
                 style={{ background: 'linear-gradient(to right, rgba(232,160,32,0.05), transparent)' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-subtle border border-border-amber text-amber-DEFAULT flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-text font-heading font-bold text-lg">Ready to eliminate POS headaches forever?</h4>
                  <p className="text-text-secondary text-xs font-medium">Switch today and get your store running offline in under 30 minutes.</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I saw the comparison on your site and want to learn more about switching to Urthly POS!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3.5 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shrink-0 text-canvas"
                style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
              >
                Book Your Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ComparisonTable;
