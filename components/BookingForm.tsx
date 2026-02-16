import React, { useState } from 'react';
import { User, Phone, Building2, ArrowRight, MessageCircle, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const BookingForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        alert("Demo request received! We'll contact you shortly.");
        setFormState({ name: '', phone: '', businessType: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
       
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Live Demo Available
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6 leading-tight">
                    See OfflinePOS in Action
                </h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    Don't just take our word for it. Book a personalized 15-minute demo to see how we handle your specific inventory and billing needs.
                </p>

                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/10 text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                        <span className="text-text font-medium">Tailored walk-through for your industry</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/10 text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                        <span className="text-text font-medium">Q&A session with product experts</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/10 text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                        <span className="text-text font-medium">No commitment required</span>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-border/50 backdrop-blur-sm">
                    <p className="text-sm font-bold text-text mb-4 uppercase tracking-wide">Need answers faster?</p>
                    <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-heading font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 focus-ring">
                        <MessageCircle className="w-5 h-5 fill-white text-white" />
                        Chat on WhatsApp
                    </button>
                    <p className="text-xs text-text-dim mt-3 text-center">Typical reply time: &lt; 2 minutes</p>
                </div>
            </FadeIn>

            {/* Right Form */}
            <FadeIn delay={200}>
                <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-2xl relative overflow-hidden group">
                     {/* Urgency Badge */}
                     <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg flex items-center gap-2">
                         <Clock className="w-3 h-3 animate-pulse" />
                         High Demand: 3 slots left
                     </div>

                    <h3 className="text-2xl font-heading font-bold text-text mb-2">Book Your Free Demo</h3>
                    <p className="text-sm text-text-muted mb-8">Fill out the form below and we'll contact you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-text-muted ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
                                <input 
                                    type="text" 
                                    required
                                    className="w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-text placeholder:text-text-dim focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-text-muted ml-1">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
                                <input 
                                    type="tel" 
                                    required
                                    className="w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-text placeholder:text-text-dim focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                    placeholder="+1 (555) 000-0000"
                                    value={formState.phone}
                                    onChange={e => setFormState({...formState, phone: e.target.value})}
                                />
                            </div>
                        </div>

                         <div className="space-y-1.5">
                            <label className="text-sm font-bold text-text-muted ml-1">Business Type</label>
                            <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
                                <select 
                                    required
                                    className="w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-text appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
                                    value={formState.businessType}
                                    onChange={e => setFormState({...formState, businessType: e.target.value})}
                                >
                                    <option value="" disabled>Select your industry</option>
                                    <option value="retail">Retail / Grocery</option>
                                    <option value="pharmacy">Pharmacy / Medical</option>
                                    <option value="restaurant">Restaurant / F&B</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-dim">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-hover text-white font-heading font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed group focus-ring"
                        >
                            {isSubmitting ? 'Scheduling...' : 'Book Free Demo'}
                            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-text-dim font-medium pt-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span>Your data is 100% secure. No spam.</span>
                        </div>
                    </form>
                </div>
            </FadeIn>
         </div>
       </div>
    </section>
  );
};

export default BookingForm;