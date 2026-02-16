import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import Skeleton from './Skeleton';

const Testimonials: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs md:text-sm font-heading font-bold tracking-widest text-accent uppercase mb-3 block">Trusted By Teams</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text max-w-3xl mx-auto leading-tight">
              Customer Success Stories
            </h2>
          </FadeIn>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            /* Loading Skeletons (3 cards) */
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full relative">
                {/* Quote Skeleton */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Skeleton className="w-8 h-8 rounded" />
                </div>

                {/* Header Skeleton */}
                <div className="flex items-center gap-4 mb-6">
                  <Skeleton className="w-14 h-14 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="w-32 h-4 rounded" />
                    <Skeleton className="w-24 h-3 rounded" />
                  </div>
                </div>

                {/* Stars Skeleton */}
                <div className="flex gap-1 mb-6">
                  <Skeleton className="w-24 h-3 rounded" />
                </div>

                {/* Content Skeleton */}
                <div className="space-y-3 flex-grow">
                  <Skeleton className="w-full h-3 rounded" />
                  <Skeleton className="w-full h-3 rounded" />
                  <Skeleton className="w-3/4 h-3 rounded" />
                </div>
              </div>
            ))
          ) : (
            /* Real Content */
            TESTIMONIALS.map((t, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 100}
                className="bg-surface p-8 md:p-10 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-surface flex flex-col h-full relative group"
              >
                <Quote className="absolute top-8 right-8 text-primary/10 w-10 h-10 rotate-180 group-hover:text-primary/20 transition-colors" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 border border-primary/20">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text text-lg leading-tight">{t.name}</h4>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium italic">
                  "{t.content}"
                </p>
              </FadeIn>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;