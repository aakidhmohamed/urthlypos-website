import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import FadeIn from './FadeIn';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-heading font-bold tracking-widest text-primary uppercase mb-4 block">Simple Pricing</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6">
              Pay Once, <br />
              <span className="italic">Own it Forever</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              Stop paying monthly subscriptions. Get the full power of Urthly POS with a single one-time payment.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 100 + 300}
              className={`p-10 rounded-3xl border transition-all duration-300 ease-premium relative flex flex-col h-full
                    ${plan.highlight
                  ? 'bg-surface border-primary shadow-glow hover:shadow-glow-lg scale-105 z-10 hover:-translate-y-2'
                  : 'bg-surface border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-lift'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-white text-xs font-mono font-bold rounded-full tracking-wide uppercase shadow-lg shadow-primary/20 flex gap-2 items-center">
                  <span>✨ Best Value</span>
                </div>
              )}

              <div className="mb-8 text-center md:text-left">
                <h3 className={`text-xl font-heading font-bold mb-2 ${plan.highlight ? 'text-primary' : 'text-text'}`}>{plan.name}</h3>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  {plan.price !== 'Custom' && <span className="text-2xl font-medium text-text-dim">Rs.</span>}
                  <span className="text-6xl font-heading font-bold text-text tracking-tighter">{plan.price}</span>
                  <span className="text-text-dim text-sm font-medium font-mono">{plan.period}</span>
                </div>
                <p className="text-sm text-text-muted mt-4 font-medium">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <div className="h-px bg-border w-full mb-8"></div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-text-muted">
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.highlight ? 'bg-primary/10 text-primary' : 'bg-background text-text-dim'}`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl text-sm font-heading font-bold transition-all duration-300 ease-premium transform hover:-translate-y-1 active:scale-95 focus-ring
                  ${plan.highlight
                  ? 'bg-primary text-white hover:bg-primary-hover shadow-glow hover:shadow-glow-lg'
                  : 'bg-background text-text hover:bg-white/5 border border-border'
                }`}
              >
                {plan.buttonText}
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;