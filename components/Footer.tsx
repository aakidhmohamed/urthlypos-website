import React from 'react';
import { Monitor, Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-text-muted py-16 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <FadeIn delay={0} className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6 group cursor-default">
                    <div className="bg-primary/10 p-1.5 rounded-lg border border-primary/20 transition-colors group-hover:bg-primary/20">
                        <Monitor className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-heading font-bold text-lg text-text">OfflinePOS</span>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                   Empowering businesses with reliable, offline-first technology. Built for speed, security, and peace of mind.
                </p>
            </FadeIn>

            <FadeIn delay={100}>
                <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
                <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">About</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Features</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Works</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Career</a></li>
                </ul>
            </FadeIn>

            <FadeIn delay={200}>
                <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Help</h4>
                <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Customer Support</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Delivery Details</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors focus-ring rounded-sm">Privacy Policy</a></li>
                </ul>
            </FadeIn>

             <FadeIn delay={300}>
                <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
                <div className="flex flex-col gap-3">
                    <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 ease-premium shadow-inner"
                    />
                    <button className="bg-primary text-white font-heading font-bold py-3 rounded-xl text-sm hover:bg-primary-hover transition-all duration-300 ease-premium shadow-glow hover:shadow-glow-lg hover:scale-105 active:scale-95 focus-ring">
                        Subscribe Now
                    </button>
                </div>
            </FadeIn>
        </div>
        
        <FadeIn delay={400} className="flex flex-col md:flex-row justify-between items-center text-xs border-t border-border pt-8 gap-4 font-medium">
             <div>© Copyright 2026, All Rights Reserved by Urthly</div>
             <div className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> by Designers</div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;