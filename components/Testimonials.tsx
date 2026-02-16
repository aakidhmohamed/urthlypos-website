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
    <section className="py-12 relative bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <FadeIn>
            <span className="text-[10px] font-heading font-bold tracking-widest text-accent uppercase mb-2 block">Trusted By Teams</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text max-w-xl mx-auto leading-tight">
              Customer Success Stories
            </h2>
          </FadeIn>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading ? (
                /* Loading Skeletons (3 cards) */
                Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="bg-surface p-5 rounded-xl border border-border shadow-sm flex flex-col h-full relative">
                         {/* Quote Skeleton */}
                         <div className="absolute top-5 right-5 opacity-10">
                             <Skeleton className="w-5 h-5 rounded" />
                         </div>
                         
                         {/* Header Skeleton */}
                         <div className="flex items-center gap-3 mb-3">
                             <Skeleton className="w-10 h-10 rounded-full" />
                             <div className="space-y-1.5">
                                 <Skeleton className="w-20 h-3 rounded" />
                                 <Skeleton className="w-14 h-2 rounded" />
                             </div>
                         </div>

                         {/* Stars Skeleton */}
                         <div className="flex gap-1 mb-3">
                             <Skeleton className="w-16 h-2 rounded" />
                         </div>

                         {/* Content Skeleton */}
                         <div className="space-y-2 flex-grow">
                             <Skeleton className="w-full h-2 rounded" />
                             <Skeleton className="w-full h-2 rounded" />
                             <Skeleton className="w-3/4 h-2 rounded" />
                         </div>
                    </div>
                ))
            ) : (
                /* Real Content */
                TESTIMONIALS.map((t, idx) => (
                    <FadeIn 
                        key={idx} 
                        delay={idx * 100}
                        className="bg-surface p-5 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-surface flex flex-col h-full relative group"
                    >
                        <Quote className="absolute top-5 right-5 text-primary/10 w-6 h-6 rotate-180 group-hover:text-primary/20 transition-colors" />
                        
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full p-0.5 border border-primary/20">
                                <img 
                                    src={t.image} 
                                    alt={t.name}
                                    className="w-full h-full rounded-full object-cover" 
                                />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-text text-sm leading-tight">{t.name}</h4>
                                <p className="text-text-muted text-[10px] font-medium uppercase tracking-wide">{t.role}</p>
                            </div>
                        </div>

                        <div className="flex gap-0.5 mb-3">
                            {[1,2,3,4,5].map(i => (
                                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                            ))}
                        </div>

                        <p className="text-xs text-text-muted leading-relaxed">
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