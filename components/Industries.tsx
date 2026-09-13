import React, { useState } from 'react';
import { INDUSTRIES, WHATSAPP_NUMBER } from '../constants';
import { ArrowRight, CheckCircle2, Building2, Sparkles, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="industries" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Tailored Industry Engines</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4 leading-tight">
              Custom-Built Workflows For <br />
              <span className="text-gradient-amber">Your Specific Business Type</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              Unlike generic point-of-sale software, Urthly POS features specialized modules designed for retail barcodes, NMRA medicine tracking, and instant kitchen printing.
            </p>
          </FadeIn>
        </div>

        {/* Tab Navigation */}
        <FadeIn delay={300} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-raised border border-border shadow-card max-w-full overflow-x-auto">
            {INDUSTRIES.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-heading font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === idx
                    ? 'text-canvas'
                    : 'text-text-secondary hover:text-text hover:bg-white/5'
                }`}
                style={activeTab === idx
                  ? { background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }
                  : {}
                }
              >
                <ind.icon className="w-4 h-4" />
                <span>{ind.title}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active Industry Card */}
        {INDUSTRIES[activeTab] && (
          <FadeIn key={activeTab} delay={400}>
            <div className="bg-surface-raised border border-border rounded-3xl p-8 md:p-12 shadow-card-lg relative overflow-hidden hover:border-border-amber transition-colors duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Text Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-subtle border border-border-amber text-amber-DEFAULT font-mono text-xs font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    {INDUSTRIES[activeTab].subtitle}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-text tracking-tight">
                    {INDUSTRIES[activeTab].title}
                  </h3>

                  <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium">
                    {INDUSTRIES[activeTab].description}
                  </p>

                  {/* Feature chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {INDUSTRIES[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-border">
                        <CheckCircle2 className="w-4 h-4 text-amber-DEFAULT shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am interested in Urthly POS for ${INDUSTRIES[activeTab].title}. Can you send details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all w-fit text-canvas"
                      style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
                    >
                      Get {INDUSTRIES[activeTab].title} Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Terminal Card */}
                <div className="lg:col-span-5 bg-canvas border border-border rounded-2xl p-6 shadow-card relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-DEFAULT" />
                      <span className="text-xs font-mono font-bold text-text uppercase">
                        {INDUSTRIES[activeTab].title} Terminal
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-DEFAULT bg-amber-subtle px-2 py-0.5 rounded border border-border-amber font-bold">
                      OFFLINE-READY
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {INDUSTRIES[activeTab].metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-amber-subtle border border-border-amber text-center">
                        <span className="text-[10px] font-mono text-text-muted block truncate">{m.label}</span>
                        <span className="text-sm sm:text-base font-heading font-extrabold text-amber-DEFAULT font-mono tracking-tight block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Sample Items */}
                  <div className="space-y-2 font-mono text-xs">
                    <span className="text-text-muted text-[10px] uppercase font-bold block mb-1">Live Catalog Shortcuts:</span>
                    {INDUSTRIES[activeTab].sampleItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-border hover:border-border-amber transition-colors">
                        <div className="flex items-center gap-2 text-text font-semibold truncate pr-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-DEFAULT shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </div>
                        <span className="text-amber-DEFAULT font-bold shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Industries;