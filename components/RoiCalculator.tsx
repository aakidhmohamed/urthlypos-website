import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, ShieldCheck, Sparkles, Check } from 'lucide-react';
import FadeIn from './FadeIn';
import { WHATSAPP_NUMBER } from '../constants';

const RoiCalculator: React.FC = () => {
  const [monthlyFee, setMonthlyFee] = useState<number>(15000);
  const [terminalCount, setTerminalCount] = useState<number>(1);

  const urthlyCost = 75000 * terminalCount;
  const yearlySubscription = monthlyFee * 12 * terminalCount;
  const threeYearSubscription = monthlyFee * 36 * terminalCount;
  const fiveYearSubscription = monthlyFee * 60 * terminalCount;
  const threeYearSavings = Math.max(0, threeYearSubscription - urthlyCost);
  const fiveYearSavings = Math.max(0, fiveYearSubscription - urthlyCost);
  const paybackMonths = (urthlyCost / (monthlyFee * terminalCount)).toFixed(1);

  return (
    <section id="calculator" className="py-24 md:py-32 relative border-b overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI Calculator</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4 leading-tight">
              See How Much You Save With <br />
              <span className="text-gradient-amber">Zero Monthly Fees</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              Cloud POS software traps you in endless subscriptions. Calculate your cumulative savings when switching to Urthly POS's single one-time lifetime license.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Controls */}
          <FadeIn delay={300} className="lg:col-span-5 bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between shadow-card-lg relative hover:border-border-amber transition-colors duration-500">
            <div>
              <h3 className="text-xl font-heading font-bold text-text mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-DEFAULT" />
                Input Your Current POS Expenses
              </h3>

              {/* Slider: Monthly Fee */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-text-secondary">Estimated Monthly POS Fee (per counter)</label>
                  <span className="text-amber-DEFAULT font-mono text-base font-bold bg-amber-subtle px-3 py-1 rounded-lg border border-border-amber">
                    LKR {monthlyFee.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range" min={5000} max={40000} step={1000} value={monthlyFee}
                  onChange={e => setMonthlyFee(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: '#E8A020', background: `linear-gradient(to right, #E8A020 ${((monthlyFee - 5000) / 35000) * 100}%, rgba(255,255,255,0.1) 0%)` }}
                />
                <div className="flex justify-between text-[11px] font-mono text-text-muted">
                  <span>LKR 5,000/mo</span>
                  <span>LKR 20,000/mo</span>
                  <span>LKR 40,000/mo</span>
                </div>
              </div>

              {/* Terminal Count Picker */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-text-secondary">Number of POS Counters / Branches</label>
                  <span className="text-amber-DEFAULT font-mono text-base font-bold bg-amber-subtle px-3 py-1 rounded-lg border border-border-amber">
                    {terminalCount} {terminalCount === 1 ? 'Terminal' : 'Terminals'}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => setTerminalCount(num)}
                      className={`py-2.5 rounded-xl font-mono text-sm font-bold border transition-all ${
                        terminalCount === num
                          ? 'border-amber-DEFAULT text-canvas'
                          : 'bg-canvas text-text-muted border-border hover:border-border-strong'
                      }`}
                      style={terminalCount === num
                        ? { background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }
                        : {}
                      }
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* License Info */}
              <div className="p-4 rounded-2xl bg-amber-subtle border border-border-amber space-y-2 text-xs">
                <div className="flex items-center gap-2 text-text font-medium">
                  <Check className="w-4 h-4 text-amber-DEFAULT" /> Urthly POS One-Time License:
                  <span className="font-mono font-bold text-amber-DEFAULT">LKR {urthlyCost.toLocaleString()}</span>
                </div>
                <p className="text-text-muted">Includes complete offline software, lifetime validity, and no hidden server renewals.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I calculated my POS savings on your website (${terminalCount} counter(s), saving LKR ${fiveYearSavings.toLocaleString()} over 5 years). I would like to book a demo!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all text-canvas"
                style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
              >
                Claim Your Savings Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={400} className="lg:col-span-7 bg-surface-raised border border-border rounded-3xl p-8 flex flex-col justify-between shadow-card-lg relative overflow-hidden">
            {/* Decorative watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-amber-DEFAULT pointer-events-none">
              <TrendingUp className="w-64 h-64" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-heading font-bold text-text">Cumulative Cost Comparison</h3>
                <span className="text-xs font-mono font-bold text-amber-DEFAULT bg-amber-subtle px-3 py-1 rounded-full border border-border-amber">
                  ⚡️ Pays for Itself in ~{paybackMonths} Months
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-6 mb-8">
                {[
                  { label: '1 Year Cost', cloud: yearlySubscription },
                  { label: '3 Years Cost', cloud: threeYearSubscription },
                  { label: '5 Years Cumulative', cloud: fiveYearSubscription },
                ].map(({ label, cloud }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs font-mono font-semibold mb-2">
                      <span className="text-text-muted">{label}</span>
                      <span className="text-text">Cloud: LKR {cloud.toLocaleString()} vs Urthly: LKR {urthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden flex gap-1 p-0.5 border border-border" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(100, (cloud / fiveYearSubscription) * 100)}%`, background: 'linear-gradient(to right, #EF4444, #F87171)' }}
                      />
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(100, (urthlyCost / fiveYearSubscription) * 100)}%`, background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Savings Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-canvas border border-border shadow-card">
                  <div className="text-xs font-mono font-semibold text-text-secondary uppercase tracking-wider mb-1">
                    3-Year Net Savings
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-text tracking-tight font-mono">
                    LKR {threeYearSavings.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-text-muted mt-2">Money kept directly inside your business account.</p>
                </div>

                <div className="p-6 rounded-2xl border shadow-card relative overflow-hidden"
                     style={{ background: 'linear-gradient(135deg, rgba(232,160,32,0.08), rgba(21,27,46,1))', borderColor: 'rgba(232,160,32,0.30)' }}>
                  <div className="text-xs font-mono font-semibold text-amber-DEFAULT uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> 5-Year Total Net Savings
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-amber-DEFAULT tracking-tight font-mono">
                    LKR {fiveYearSavings.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-text-muted mt-2">Reinvest in store inventory, expansion, or equipment.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
              <span>* Based on standard cloud POS subscription models with per-counter pricing.</span>
              <span className="font-bold text-amber-DEFAULT flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> No Hidden Fees
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
