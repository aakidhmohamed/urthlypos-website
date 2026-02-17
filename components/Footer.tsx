import React, { useState } from 'react';
import { Monitor, Heart } from 'lucide-react';
import FadeIn from './FadeIn';
import LegalModal from './LegalModal';
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from '../data/legalContent';

const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

    return (
        <footer className="bg-surface text-text-muted py-16 border-t border-border relative z-10">
            <LegalModal
                isOpen={activeModal === 'privacy'}
                onClose={() => setActiveModal(null)}
                document={PRIVACY_POLICY}
            />
            <LegalModal
                isOpen={activeModal === 'terms'}
                onClose={() => setActiveModal(null)}
                document={TERMS_AND_CONDITIONS}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <FadeIn delay={0} className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 group cursor-default">
                            <div className="bg-primary/10 p-0.5 rounded-full border border-primary/20 transition-colors group-hover:bg-primary/20 overflow-hidden">
                                <img src="/logo.png" alt="Urthly POS" className="h-8 w-8 rounded-full object-cover" />
                            </div>
                            <span className="font-heading font-bold text-lg text-text">Urthly POS</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering businesses with reliable, offline-first technology. Built for speed, security, and peace of mind.
                        </p>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#about" className="hover:text-primary transition-colors focus-ring rounded-sm">About</a></li>
                            <li><a href="#features" className="hover:text-primary transition-colors focus-ring rounded-sm">Features</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors focus-ring rounded-sm">Pricing</a></li>
                        </ul>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <button
                                    onClick={() => setActiveModal('privacy')}
                                    className="hover:text-primary transition-colors focus-ring rounded-sm text-left"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveModal('terms')}
                                    className="hover:text-primary transition-colors focus-ring rounded-sm text-left"
                                >
                                    Terms & Conditions
                                </button>
                            </li>
                        </ul>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <h4 className="text-text font-heading font-bold text-sm uppercase tracking-wider mb-6">Address</h4>
                        <ul className="space-y-4 text-sm">
                            <li><span className="text-text-muted">No. 122, Kandy Road, Weweldeniya.</span></li>
                            <li><a href="tel:+94775364754" className="hover:text-primary transition-colors focus-ring rounded-sm">+94 77 536 4754</a></li>
                            <li><a href="tel:+94726294115" className="hover:text-primary transition-colors focus-ring rounded-sm">+94 72 629 4115</a></li>
                        </ul>
                    </FadeIn>
                </div>

                <FadeIn delay={400} className="flex flex-col md:flex-row justify-between items-center text-xs border-t border-border pt-8 gap-4 font-medium">
                    <div>© Copyright 2026, All Rights Reserved by Urthly</div>
                    <div>Made by Urthly</div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;