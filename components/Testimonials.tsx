import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import Skeleton from './Skeleton';

const Testimonials: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-DEFAULT uppercase mb-3 block">
              Trusted Across Sri Lanka
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text max-w-3xl mx-auto leading-tight tracking-tight">
              What Business Owners Say
            </h2>
          </FadeIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-surface-raised p-8 rounded-2xl border border-border flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="w-32 h-4 rounded" />
                      <Skeleton className="w-24 h-3 rounded" />
                    </div>
                  </div>
                  <Skeleton className="w-24 h-3 rounded mb-6" />
                  <div className="space-y-3 flex-grow">
                    <Skeleton className="w-full h-3 rounded" />
                    <Skeleton className="w-full h-3 rounded" />
                    <Skeleton className="w-3/4 h-3 rounded" />
                  </div>
                </div>
              ))
            : TESTIMONIALS.map((t, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 80}
                  className="bg-surface-raised p-8 md:p-9 rounded-2xl border border-border hover:border-border-amber transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative group"
                >
                  {/* Decorative quote */}
                  <Quote
                    className="absolute top-8 right-8 w-8 h-8 rotate-180 transition-colors duration-300 pointer-events-none"
                    style={{ color: 'rgba(232,160,32,0.08)' }}
                  />

                  {/* Reviewer */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-full p-[1.5px] shrink-0"
                      style={{ background: 'linear-gradient(135deg, #E8A020, #C4820A)' }}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full rounded-full object-cover bg-canvas"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text leading-tight">{t.name}</h4>
                      <p className="text-text-muted text-xs font-medium uppercase tracking-wide mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-amber-DEFAULT text-amber-DEFAULT" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-text-secondary leading-relaxed font-medium italic flex-grow">
                    "{t.content}"
                  </p>
                </FadeIn>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;