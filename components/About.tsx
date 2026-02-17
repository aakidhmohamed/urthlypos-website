
import React from 'react';
import { Target, Zap, Shield, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-10">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                <Target className="w-3 h-3" />
                                Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                                About <span className="text-primary italic">Urthly POS</span>
                            </h2>
                            <p className="text-xl text-text-muted leading-relaxed max-w-xl mt-6">
                                Empowering businesses with reliable <span className="text-text font-bold">offline-first</span> POS technology. Built for the modern entrepreneur.
                            </p>
                        </FadeIn>

                        <div className="space-y-8">
                            <FadeIn delay={100}>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-raised border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text mb-2">Uninterrupted Operations</h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            Built to help retail stores, pharmacies, and restaurants manage daily operations efficiently — even without a constant internet connection.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-raised border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text mb-2">Simplicity & Reliability</h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            We focus on simplicity, reliability, and performance so business owners can reduce manual work and make smarter decisions.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={300}>
                            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
                                Start your journey <ChevronRight className="w-4 h-4" />
                            </a>
                        </FadeIn>
                    </div>

                    {/* Right Side: Visual Mission Card */}
                    <FadeIn delay={400} className="relative">
                        <div className="relative z-10 bg-surface-raised/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-12 shadow-2xl overflow-hidden group">
                            {/* Decorative internal glow */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-glow-primary rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>

                                <blockquote className="text-2xl md:text-3xl font-heading font-medium text-white leading-tight mb-8">
                                    "Our mission is to digitize everyday business operations with <span className="text-primary italic">affordable</span>, easy-to-use tools that improve productivity."
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-primary/50"></div>
                                    <p className="text-sm font-mono text-text-dim tracking-widest uppercase">The Urthly Promise</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements behind the card */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-800 rounded-3xl border border-border/50 -rotate-12 z-0 opacity-50"></div>
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-xl z-0 animate-pulse"></div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default About;
