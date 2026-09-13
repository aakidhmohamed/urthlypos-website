import React, { useState } from 'react';
import { User, Phone, Building2, MapPin, ArrowRight, MessageCircle, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import FadeIn from './FadeIn';

const BookingForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', businessType: '', location: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSuccess(true); }, 1200);
  };

  const inputClass = `w-full bg-canvas border border-border rounded-xl py-3 pl-11 pr-4 text-text text-sm
    placeholder:text-text-muted focus:outline-none focus:border-amber-DEFAULT focus:ring-1
    focus:ring-amber-DEFAULT/30 transition-all`;

  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Context & Trust */}
          <FadeIn className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-DEFAULT animate-pulse" />
              On-Site Sri Lanka Demos Available
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight leading-tight">
              See Urthly POS Live On{' '}
              <span className="text-gradient-amber">Your Own Counter Hardware</span>
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed font-medium">
              We bring our offline POS system directly to your retail store, pharmacy, or restaurant anywhere in Sri Lanka.
              Test barcode speed, printer compatibility, and instant invoice generation with zero obligation.
            </p>

            <div className="space-y-4 pt-2">
              {[
                'On-Site Hardware Test (Printers, Scanners, Cash Drawers)',
                'NMRA Medicine / Retail Inventory Setup Consultation',
                'Same-Day Software Setup & Cashier Staff Training',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-amber-subtle text-amber-DEFAULT shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-text font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Direct */}
            <div className="p-6 rounded-2xl bg-surface-raised border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-text uppercase tracking-wider">
                  Prefer Instant WhatsApp Inquiry?
                </span>
                <span className="text-[10px] text-amber-DEFAULT bg-amber-subtle px-2 py-0.5 rounded border border-border-amber font-mono font-bold">
                  Response &lt; 5 Min
                </span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I would like to schedule a POS demo for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-heading font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-canvas"
                style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat Direct with POS Engineer
              </a>
            </div>
          </FadeIn>

          {/* Right: Booking Form */}
          <FadeIn delay={200} className="lg:col-span-6">
            <div className="bg-surface-raised p-8 md:p-10 rounded-3xl border border-border shadow-card-lg relative overflow-hidden">

              {/* Top badge */}
              <div className="absolute top-0 right-0 bg-amber-subtle border-b border-l border-border-amber text-amber-DEFAULT text-xs font-mono font-bold px-4 py-2 rounded-bl-2xl flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                Next Demo Available Today
              </div>

              <h3 className="text-2xl font-heading font-bold text-text mb-2">Schedule Free Demo</h3>
              <p className="text-sm text-text-secondary mb-6">Enter your details and our team will get in touch immediately.</p>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-text-secondary">Business Owner / Manager Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input type="text" required className={inputClass} placeholder="e.g. Ruwan Silva"
                        value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-text-secondary">Contact Mobile / WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input type="tel" required className={inputClass} placeholder="+94 77 123 4567"
                        value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-text-secondary">Industry Category</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <select required className={`${inputClass} cursor-pointer`}
                        value={formState.businessType} onChange={e => setFormState({ ...formState, businessType: e.target.value })}>
                        <option value="" disabled hidden>Select your business category...</option>
                        <option value="Supermarket / Grocery / Retail">Supermarket / Grocery / Retail</option>
                        <option value="Pharmacy / Healthcare">Pharmacy / Healthcare (NMRA Ready)</option>
                        <option value="Restaurant / Cafe / Bakery">Restaurant / Cafe / Bakery (KOT Ready)</option>
                        <option value="Hardware / Clothing / Boutique">Hardware / Clothing / Boutique</option>
                        <option value="Multi-Branch Enterprise">Multi-Branch Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-text-secondary">Store Location / District</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input type="text" required className={inputClass} placeholder="e.g. Colombo 03, Gampaha, Kandy..."
                        value={formState.location} onChange={e => setFormState({ ...formState, location: e.target.value })} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-heading font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-canvas"
                    style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
                  >
                    {isSubmitting ? 'Confirming Availability...' : 'Book Free Demo Slot'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted font-mono pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-DEFAULT" />
                    <span>No Obligation • On-Site Demo Free of Charge</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-amber-subtle text-amber-DEFAULT border border-border-amber rounded-2xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-text mb-2">Request Ready!</h4>
                    <p className="text-text-secondary text-sm max-w-sm mx-auto">
                      Click below to send your reservation directly to our lead deployment engineer on WhatsApp for instant confirmation.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello! I registered for a free Urthly POS demo.\n\n*Name:* ${formState.name}\n*Phone:* ${formState.phone}\n*Business Type:* ${formState.businessType}\n*Location:* ${formState.location}\n\nPlease confirm my demo slot.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 text-canvas"
                    style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Confirm Demo on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;