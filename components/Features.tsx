import React from 'react';
import { FEATURES } from '../constants';
import { WifiOff, Printer, PackageCheck, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Built For High Performance</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4 leading-tight">
              Architected For{' '}
              <span className="text-gradient-amber">100% Uninterrupted Sales</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              Every detail of Urthly POS is engineered for speed, accuracy, and absolute offline independence.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Hero Bento: Offline-First — spans 2 cols */}
          <FadeIn delay={200} className="md:col-span-2">
            <div className="h-full bg-surface-raised border border-border rounded-3xl p-8 relative overflow-hidden card-hover flex flex-col justify-between">
              {/* Subtle corner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(232,160,32,0.07), transparent 70%)' }}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-amber-subtle border border-border-amber rounded-2xl text-amber-DEFAULT">
                    <WifiOff className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-DEFAULT bg-amber-subtle px-3 py-1 rounded-full border border-border-amber">
                    ZERO DOWNTIME GUARANTEE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-text mb-4 tracking-tight">
                  100% Offline-First Core Architecture
                </h3>
                <p className="text-text-secondary text-base leading-relaxed max-w-xl mb-8 font-medium">
                  Your checkout counters never pause or freeze. Bills are processed locally in sub-seconds with zero dependency on Dialog, SLT, or cloud web servers.
                </p>
              </div>

              {/* Live status indicator */}
              <div className="p-4 rounded-2xl bg-canvas border border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-amber-DEFAULT rounded-full animate-pulse" />
                  <span className="text-text font-bold">LOCAL_DATABASE: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span>Latency:</span>
                  <span className="text-amber-DEFAULT font-bold">0.04ms</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span>Cloud:</span>
                  <span className="text-text font-semibold">Independent</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Analytics & Reports */}
          <FadeIn delay={300} className="md:col-span-1">
            <div className="h-full bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between card-hover">
              <div>
                <div className="p-3 bg-amber-subtle border border-border-amber rounded-2xl text-amber-DEFAULT w-fit mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text mb-3">Instant Profit & Sales Reports</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium">
                  Real-time margin tracking, daily cash drawer balance, and automated Z-Report exports for store owners.
                </p>
              </div>

              {/* Mini bar chart */}
              <div className="h-20 w-full bg-canvas rounded-2xl px-4 pt-3 pb-0 border border-border flex items-end gap-1.5">
                {[35, 50, 40, 75, 60, 90, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t transition-all duration-500 hover:opacity-90"
                    style={{
                      height: `${h}%`,
                      background: h === 100
                        ? 'linear-gradient(180deg, #F5BC4A, #E8A020)'
                        : `rgba(232,160,32,${0.25 + h * 0.004})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Inventory & Expiry */}
          <FadeIn delay={400} className="md:col-span-1">
            <div className="h-full bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between card-hover">
              <div>
                <div className="p-3 bg-amber-subtle border border-border-amber rounded-2xl text-amber-DEFAULT w-fit mb-6">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text mb-3">Inventory & Expiry Control</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium">
                  Automatic re-order thresholds, batch/lot tracking for medicines, and advance expiry date warnings.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 flex justify-between items-center">
                  <span>Panadol 500mg (Batch #402)</span>
                  <span className="font-bold">EXP: 5 DAYS</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-subtle border border-border-amber text-amber-DEFAULT flex justify-between items-center">
                  <span>Anchor Powder 400g</span>
                  <span className="font-bold">LOW STOCK</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Hardware Support */}
          <FadeIn delay={500} className="md:col-span-1">
            <div className="h-full bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between card-hover">
              <div>
                <div className="p-3 bg-amber-subtle border border-border-amber rounded-2xl text-amber-DEFAULT w-fit mb-6">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text mb-3">Plug & Play Hardware Support</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium">
                  Connect thermal printers, Honeywell 1D/2D barcode scanners, digital weighing scales, and cash drawers effortlessly.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-text-secondary">
                {['ESC/POS Printers', 'Serial Scales', 'USB Scanners', 'Cash Drawers', 'Honeywell 1D/2D'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-surface border border-border">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Role-Based Security */}
          <FadeIn delay={600} className="md:col-span-1">
            <div className="h-full bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between card-hover">
              <div>
                <div className="p-3 bg-amber-subtle border border-border-amber rounded-2xl text-amber-DEFAULT w-fit mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text mb-3">Role-Based Cashier Security</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium">
                  Prevent theft with strict permissions for discounts, bill cancellations, stock adjustments, and cash drawer openings.
                </p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-canvas border border-border text-xs font-mono">
                <span className="text-text font-bold">Admin / Manager / Cashier</span>
                <span className="text-amber-DEFAULT flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Granular Logs
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Features;