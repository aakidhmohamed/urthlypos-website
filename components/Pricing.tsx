import React from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_NUMBER } from '../constants';
import FadeIn from './FadeIn';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      {/* Section ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,160,32,0.04), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Transparent Lifetime License</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4 leading-tight">
              Pay Once.{' '}
              <span className="text-gradient-amber">Own It Forever.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              No monthly subscriptions. No per-transaction commissions. No forced internet renewals.
            </p>
          </FadeIn>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <FadeIn key={idx} delay={idx * 100 + 300}>
              <div
                className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between h-full ${
                  plan.highlight
                    ? 'bg-surface-raised border-border-amber-strong shadow-amber'
                    : 'bg-surface-raised border-border hover:border-border-strong'
                }`}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-canvas text-xs font-mono font-bold rounded-full tracking-wider uppercase flex items-center gap-1.5"
                    style={{ background: 'linear-gradient(135deg, #F5BC4A, #E8A020)' }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular For Sri Lankan Stores
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono font-bold text-amber-DEFAULT uppercase tracking-wider block mb-1">
                      {plan.tagline}
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-text mb-3">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-text tracking-tight font-mono">
                        {plan.price}
                      </span>
                      <span className="text-text-secondary text-xs font-mono uppercase font-semibold">{plan.period}</span>
                    </div>
                    <p className="text-sm text-text-secondary mt-3 font-medium">{plan.description}</p>
                  </div>

                  <div className="h-px w-full mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <div className={`mt-0.5 rounded-full p-1 shrink-0 ${plan.highlight ? 'bg-amber-glow text-amber-DEFAULT' : 'bg-white/8 text-text-secondary'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-semibold text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello! I want to order the ${plan.name} plan (${plan.price}). Please arrange a demo.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl text-sm font-heading font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${
                      plan.highlight
                        ? 'text-canvas'
                        : 'bg-surface text-text border border-border hover:border-border-strong'
                    }`}
                    style={plan.highlight ? { background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' } : {}}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="mt-4 text-center">
                    <span className="text-[11px] font-mono text-text-muted flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-DEFAULT" />
                      Lifetime License • 0% Renewal Fees
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;