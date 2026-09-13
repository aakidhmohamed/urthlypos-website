import React, { useState } from 'react';
import FadeIn from './FadeIn';
import LegalModal from './LegalModal';
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from '../data/legalContent';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-surface text-text-secondary py-16 border-t border-border relative z-10">
      <LegalModal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} document={PRIVACY_POLICY} />
      <LegalModal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} document={TERMS_AND_CONDITIONS} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <FadeIn delay={0} className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-default">
              <div
                className="p-[1.5px] rounded-full overflow-hidden transition-opacity group-hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #E8A020, #C4820A)' }}
              >
                <img src="/logo.png" alt="Urthly POS" className="h-8 w-8 rounded-full object-cover bg-canvas" />
              </div>
              <span className="font-heading font-bold text-lg text-text">Urthly<span className="text-amber-DEFAULT font-semibold">POS</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering Sri Lankan businesses with reliable, offline-first technology. Built for speed, security, and peace of mind.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full border border-border hover:border-border-amber text-text-secondary hover:text-amber-DEFAULT transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Company */}
          <FadeIn delay={100}>
            <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-amber-DEFAULT transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-amber-DEFAULT transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-amber-DEFAULT transition-colors">Pricing</a></li>
              <li><a href="#industries" className="hover:text-amber-DEFAULT transition-colors">Industries</a></li>
            </ul>
          </FadeIn>

          {/* Legal */}
          <FadeIn delay={200}>
            <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => setActiveModal('privacy')} className="hover:text-amber-DEFAULT transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveModal('terms')} className="hover:text-amber-DEFAULT transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </FadeIn>

          {/* Address */}
          <FadeIn delay={300}>
            <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li><span className="text-text-secondary">No. 122, Kandy Road, Weweldeniya.</span></li>
              <li><a href="tel:+94775364754" className="hover:text-amber-DEFAULT transition-colors">+94 77 536 4754</a></li>
              <li><a href="tel:+94726294115" className="hover:text-amber-DEFAULT transition-colors">+94 72 629 4115</a></li>
            </ul>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={400} className="flex flex-col md:flex-row justify-between items-center text-xs border-t border-border pt-8 gap-4 font-medium text-text-muted">
          <div>© Copyright 2026, All Rights Reserved by Urthly</div>
          <div>Made with care in Sri Lanka 🇱🇰</div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;