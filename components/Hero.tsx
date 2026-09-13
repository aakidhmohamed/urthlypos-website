import React from 'react';
import {
  WifiOff,
  Video,
  MessageCircle,
  CheckCircle2,
  Zap,
  Store,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import FadeIn from './FadeIn';
import InteractiveTerminal from './InteractiveTerminal';

const TRUST_BADGES = [
  { icon: CheckCircle2, label: 'One-Time Lifetime License' },
  { icon: CheckCircle2, label: 'Zero Monthly SaaS Fees' },
  { icon: CheckCircle2, label: 'Works 100% Offline' },
];

const STATS = [
  { icon: Store,       value: '500+',  label: 'Sri Lankan Counters' },
  { icon: Clock,       value: '99.9%', label: 'Uptime SLA' },
  { icon: ShieldCheck, value: 'NMRA',  label: 'Pharmacy Verified' },
  { icon: Zap,         value: '< 0.1s', label: 'Local Bill Speed' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#FAF7F5] overflow-hidden border-b border-[#E5E0D8]"
    >
      {/* Subtle background dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Subtle Toast Orange gradient aura */}
      <div
        className="absolute top-0 right-0 w-1/2 h-[500px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 80, 0, 0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Toast-Style High-Impact Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5000]/10 border border-[#FF5000]/20 text-[#FF5000] text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5000] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5000]" />
                </span>
                <WifiOff className="w-3.5 h-3.5" />
                100% Offline POS Engine
              </div>
            </FadeIn>

            {/* Toast Headline */}
            <FadeIn delay={80}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.08] text-[#111827]">
                The Point of Sale Built for{' '}
                <span className="text-[#FF5000]">Sri Lankan Retail & Dining.</span>
              </h1>
            </FadeIn>

            {/* Subhead */}
            <FadeIn delay={160}>
              <p className="text-lg text-[#4B5563] leading-relaxed font-normal max-w-xl">
                Tired of internet dropouts during rush hour and perpetual monthly fees? Urthly POS runs 100% offline on any Windows PC or touch terminal with sub-second billing, NMRA pharmacy compliance, and instant thermal printing.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={240}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#booking"
                  className="px-8 py-4 rounded-xl font-heading font-extrabold text-base text-white bg-[#FF5000] hover:bg-[#E04600] transition-all shadow-lg shadow-[#FF5000]/25 hover:shadow-xl hover:shadow-[#FF5000]/30 flex items-center justify-center gap-3 group active:scale-95"
                >
                  <Video className="w-5 h-5" />
                  Book Free On-Site Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to inquire about Urthly POS for my business.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-heading font-bold text-base text-[#111827] bg-white border border-[#D1D5DB] hover:border-[#FF5000] hover:text-[#FF5000] transition-all flex items-center justify-center gap-2.5 shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF5000]" />
                  WhatsApp Sales
                </a>
              </div>
            </FadeIn>

            {/* Trust Checklist Badges */}
            <FadeIn delay={320}>
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#E5E0D8]">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs font-bold text-[#374151]">
                    <Icon className="w-4 h-4 text-[#FF5000]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Quick Stats Row */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="p-3.5 rounded-xl bg-white border border-[#E5E0D8] shadow-sm text-center card-hover"
                  >
                    <Icon className="w-4 h-4 text-[#FF5000] mx-auto mb-1" />
                    <div className="font-mono font-black text-lg text-[#111827]">{value}</div>
                    <div className="text-[11px] text-[#6B7280] font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Toast Terminal Simulator */}
          <div className="lg:col-span-6">
            <FadeIn delay={200} className="relative">
              
              {/* Toast Terminal Hardware Frame */}
              <div className="bg-[#111827] p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-[#374151] relative">
                
                {/* Hardware Branding Header */}
                <div className="flex items-center justify-between text-white text-xs px-3 py-2 border-b border-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5000]" />
                    <span className="font-bold tracking-wider font-mono uppercase text-[11px]">URTHLY HARDWARE OS</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-bold">
                    ONLINE (LOCAL NETWORK ONLY)
                  </span>
                </div>

                {/* Interactive Terminal Simulator */}
                <InteractiveTerminal />

              </div>

              {/* Toast Feature Floating Pill Overlays */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-[#E5E0D8] p-3 rounded-2xl shadow-xl items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5000] flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">0.08s Local Billing Latency</div>
                  <div className="text-[10px] text-[#6B7280]">Zero cloud delay during checkout</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-5 -right-5 bg-white border border-[#E5E0D8] p-3 rounded-2xl shadow-xl items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  🛡️
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">NMRA Pharmacy Compliant</div>
                  <div className="text-[10px] text-[#6B7280]">Sri Lankan Ministry of Health standard</div>
                </div>
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;