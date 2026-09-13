import React from 'react';
import { Target, Zap, Shield, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                              bg-amber-subtle border border-border-amber text-amber-DEFAULT
                              text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Target className="w-3 h-3" />
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text tracking-tight leading-[1.1] mt-4">
                About{' '}
                <span className="text-gradient-amber italic">Urthly POS</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed max-w-xl mt-6">
                Empowering businesses with reliable{' '}
                <span className="text-text font-bold">offline-first</span>{' '}
                POS technology. Built for the modern Sri Lankan entrepreneur.
              </p>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={100}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-raised border border-border flex items-center justify-center group-hover:border-border-amber transition-colors">
                    <Zap className="w-6 h-6 text-amber-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-text mb-2">Uninterrupted Operations</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Built to help retail stores, pharmacies, and restaurants manage daily operations efficiently — even without a constant internet connection.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-raised border border-border flex items-center justify-center group-hover:border-border-amber transition-colors">
                    <Shield className="w-6 h-6 text-amber-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-text mb-2">Simplicity & Reliability</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      We focus on simplicity, reliability, and performance so business owners can reduce manual work and make smarter decisions.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <a href="#booking" className="inline-flex items-center gap-2 text-amber-DEFAULT font-bold hover:gap-4 transition-all duration-300">
                Start your journey <ChevronRight className="w-4 h-4" />
              </a>
            </FadeIn>
          </div>

          {/* Right: Mission Card */}
          <FadeIn delay={400} className="relative">
            <div className="relative z-10 bg-surface-raised border border-border rounded-[2.5rem] p-12 shadow-card-lg overflow-hidden group hover:border-border-amber transition-colors duration-500">
              {/* Amber ambient glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-80"
                style={{ background: 'rgba(232,160,32,0.08)' }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 text-canvas"
                  style={{ background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }}
                >
                  <Zap className="w-8 h-8" />
                </div>

                <blockquote className="text-2xl md:text-3xl font-heading font-medium text-text leading-tight mb-8">
                  "Our mission is to digitize everyday business operations with{' '}
                  <span className="text-amber-DEFAULT italic">affordable</span>
                  , easy-to-use tools that improve productivity."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-amber-DEFAULT/50" />
                  <p className="text-sm font-mono text-text-muted tracking-widest uppercase">The Urthly Promise</p>
                </div>
              </div>
            </div>

            {/* Decorative offset box */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-surface rounded-3xl border border-border -rotate-12 z-0 opacity-40" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
