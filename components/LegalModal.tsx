
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { LegalDocument } from '../data/legalContent';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    document: LegalDocument;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, document: doc }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 animate-in fade-in duration-300"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-[#0A0A0A] rounded-[2rem] w-full max-w-3xl max-h-[90vh] shadow-[0_0_50px_-12px_rgba(34,197,94,0.15)] flex flex-col animate-in scale-in-95 duration-300 border border-white/10 overflow-hidden"
            >
                {/* Header Section */}
                <div className="relative p-8 md:p-10 border-b border-white/5 bg-gradient-to-br from-zinc-900 to-black">
                    {/* Decorative glow */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                                <Info className="w-3 h-3" />
                                Official Document
                            </div>
                            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight mb-2">
                                {doc.title}
                            </h3>
                            <p className="text-text-dim text-sm font-medium">
                                Last Updated: <span className="text-primary/80">{doc.lastUpdated}</span>
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar bg-black/40">
                    <div className="max-w-prose mx-auto space-y-12">
                        {doc.sections.map((section, index) => (
                            <div key={index} className="group">
                                {section.title && (
                                    <div className="flex items-center gap-4 mb-4">
                                        <h4 className="text-lg md:text-xl font-heading font-bold text-white tracking-wide flex-shrink-0">
                                            {section.title}
                                        </h4>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                    </div>
                                )}
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIndex) => (
                                        <div key={pIndex} className={`flex gap-3 ${paragraph.startsWith('•') ? 'items-start' : ''}`}>
                                            {paragraph.startsWith('•') ? (
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            ) : null}
                                            <p className={`text-text-muted leading-[1.8] text-[15px] md:text-base selection:bg-primary/20 selection:text-primary ${paragraph.startsWith('•') ? 'font-medium' : ''}`}>
                                                {paragraph.startsWith('•') ? paragraph.substring(2) : paragraph}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* End Note */}
                        <div className="pt-10 border-t border-white/5">
                            <div className="p-6 rounded-2xl bg-surface-raised/30 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-sm text-text-dim text-center md:text-left">
                                    Have questions about our legal policies? <br className="hidden md:block" />
                                    Our team is here to help clarify any details.
                                </p>
                                <a href="#contact" onClick={onClose} className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-4 transition-all duration-300">
                                    Contact Support <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Action Footer */}
                <div className="p-8 border-t border-white/5 bg-zinc-950/50 backdrop-blur-xl flex justify-center md:justify-end">
                    <button
                        onClick={onClose}
                        className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-heading font-bold transition-all duration-300 shadow-glow-primary hover:scale-[1.02] active:scale-[0.98] text-sm tracking-wide"
                    >
                        I Understand
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default LegalModal;
