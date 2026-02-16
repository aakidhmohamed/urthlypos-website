import React from 'react';
import { FEATURES } from '../constants';
import { WifiOff, Printer, PackageCheck, TrendingUp, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 relative bg-surface-base">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4 block opacity-80">Capabilities</span>
                    </FadeIn>
                    <FadeIn delay={100}>
                        <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight text-pretty">
                            Everything You Need to <br />
                            <span className="text-primary">Run Your Shop Professionally</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Sales Reports */}
                    <FadeIn delay={200} className="bg-surface-raised p-8 rounded-2xl border border-border md:col-span-1 group hover:border-border-premium transition-all duration-300 ease-premium hover:shadow-premium h-full">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-text flex items-center gap-3">
                                <div className="p-2 bg-primary/10 border border-border-premium rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                Sales Reports
                            </h3>
                        </div>
                        {/* Abstract Graph */}
                        <div className="h-40 w-full flex items-end justify-between gap-1 mb-6">
                            <div className="w-full relative h-full">
                                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#22C55E', stopOpacity: 0.2 }} />
                                            <stop offset="100%" style={{ stopColor: '#22C55E', stopOpacity: 0 }} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 40 Q 20 10 40 30 T 80 20 T 100 35" fill="url(#grad1)" stroke="#22C55E" strokeWidth="3" className="drop-shadow-md" />
                                    <circle cx="80" cy="20" r="4" fill="#22C55E" className="animate-pulse" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-text mb-2">Detailed Analytics</h4>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">
                            Track daily revenue, profit margins, and best-selling items with detailed visual reports.
                        </p>
                    </FadeIn>

                    {/* Card 2: Offline First (Hero Feature) */}
                    <FadeIn delay={300} className="bg-surface-raised p-8 rounded-2xl border border-border md:col-span-2 relative overflow-hidden group hover:border-border-premium transition-all duration-300 ease-premium hover:shadow-premium h-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-background border border-border rounded-lg group-hover:border-border-premium transition-colors"><WifiOff className="w-6 h-6 text-text" /></div>
                                    <h4 className="text-2xl font-bold text-text tracking-tight">Works 100% Offline</h4>
                                </div>

                                <p className="text-text-muted text-lg leading-relaxed max-w-lg mb-8 font-medium">
                                    Never stop selling. Our system runs completely independently on your device. No internet required, ever. Your data stays safe locally.
                                </p>
                            </div>

                            {/* Visual Representation */}
                            <div className="flex gap-4 items-center self-start">
                                <div className="bg-surface-base border border-border-premium text-text px-6 py-3 rounded-xl shadow-premium flex items-center gap-3 group-hover:border-primary/50 transition-colors">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-glow-primary"></div>
                                    <span className="font-mono font-bold text-sm">SYSTEM_ONLINE</span>
                                </div>
                                <div className="w-16 h-[1px] bg-border group-hover:bg-primary/30 transition-colors"></div>
                                <div className="bg-background text-text-dim px-6 py-3 rounded-xl border border-border flex items-center gap-3 grayscale opacity-70">
                                    <WifiOff className="w-4 h-4" />
                                    <span className="font-mono font-medium text-sm line-through">INTERNET</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Card 3: Inventory */}
                    <FadeIn delay={400} className="bg-surface p-8 rounded-3xl border border-border md:col-span-1 group hover:border-primary/50 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift h-full">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-heading font-bold text-text flex items-center gap-2">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <PackageCheck className="w-5 h-5 text-primary" />
                                </div>
                                Inventory
                            </h3>
                        </div>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center bg-background border border-border p-3 rounded-xl group-hover:border-error/30 transition-colors">
                                <span className="text-xs font-semibold text-text">Paracetamol 500mg</span>
                                <span className="text-[10px] font-mono font-bold text-error bg-error/10 px-2 py-1 rounded-full">EXP: 2 DAYS</span>
                            </div>
                            <div className="flex justify-between items-center bg-background border border-border p-3 rounded-xl group-hover:border-warning/30 transition-colors">
                                <span className="text-xs font-semibold text-text">Milk 1L Carton</span>
                                <span className="text-[10px] font-mono font-bold text-warning bg-warning/10 px-2 py-1 rounded-full">LOW STOCK</span>
                            </div>
                        </div>
                        <h4 className="text-xl font-heading font-bold text-text mb-2">Smart Inventory</h4>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Real-time stock tracking with low-stock alerts and expiry date notifications.
                        </p>
                    </FadeIn>

                    {/* Card 4: Hardware Support */}
                    <FadeIn delay={500} className="bg-surface p-8 rounded-3xl border border-border md:col-span-1 flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift h-full">
                        <div className="relative w-32 h-32 mb-6">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 bg-background border-2 border-border rounded-2xl flex items-center justify-center z-10 relative group-hover:border-primary/30 transition-colors">
                                    <Printer className="w-7 h-7 text-primary" />
                                </div>
                            </div>
                            {/* Orbiting Icons */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center animate-bounce duration-1000"><span className="text-[9px] font-mono font-bold text-primary">SCAN</span></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center animate-bounce duration-1000 delay-100"><span className="text-[9px] font-mono font-bold text-primary">PRNT</span></div>
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center animate-bounce duration-1000 delay-200"><span className="text-[9px] font-mono font-bold text-primary">CASH</span></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-9 h-9 bg-background border border-border rounded-full flex items-center justify-center animate-bounce duration-1000 delay-300"><span className="text-[9px] font-mono font-bold text-text-muted">SCLE</span></div>
                        </div>
                        <h4 className="text-xl font-heading font-bold text-text mb-2">Hardware Ready</h4>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Plug & play support for scanners, printers, and cash drawers.
                        </p>
                    </FadeIn>

                    {/* Card 5: Staff Management */}
                    <FadeIn delay={600} className="bg-surface p-8 rounded-3xl border border-border md:col-span-1 group hover:border-primary/50 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift h-full">
                        <div className="flex -space-x-4 mb-6 justify-center">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-border overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-all duration-300">
                                    <img src={`https://picsum.photos/100/100?random=${i + 50}`} alt="Staff" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary/20 text-primary flex items-center justify-center text-xs font-bold relative z-0 hover:z-10 hover:scale-110 transition-all duration-300 font-mono group-hover:bg-primary group-hover:text-white">+2</div>
                        </div>
                        <h4 className="text-xl font-heading font-bold text-text mb-2">Staff Management</h4>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Create individual staff accounts with specific permissions and sales tracking.
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default Features;