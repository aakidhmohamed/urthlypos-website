import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  return (
    <>
      <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`pointer-events-auto w-full max-w-6xl bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pl-4 pr-2 py-2 flex items-center justify-between transition-all duration-500 ease-premium ${scrolled ? 'bg-[#0c0c0e]/95 border-white/5 shadow-black/50' : ''}`}>
            
            {/* Logo */}
            <button 
              className="flex items-center gap-3 cursor-pointer group focus-ring rounded-full pl-2 pr-4" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-2 rounded-full group-hover:border-primary/40 transition-all duration-300">
                <Monitor className="h-4 w-4 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg text-text tracking-tight group-hover:text-white transition-colors">
                Offline<span className="font-normal text-text-muted">POS</span>
              </span>
            </button>
            
            {/* Center Navigation Container - The "Pill inside Pill" */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full p-1.5 shadow-inner">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-text-muted hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 focus-ring"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
               <a href="#" className="hidden md:block text-sm font-bold text-text-muted hover:text-white transition-colors font-heading focus-ring px-5 py-2.5">
                  Sign in
               </a>
               <a 
                href="#contact"
                className="hidden md:block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold transition-all duration-300 ease-premium text-sm shadow-glow transform hover:scale-105 active:scale-95 focus-ring border border-transparent hover:border-white/20"
              >
                Book a demo
              </a>
              <button
                onClick={openMenu}
                className="md:hidden text-text hover:text-primary p-3 transition-colors focus-ring rounded-full relative group hover:bg-white/5"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Portal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={closeMenu}
            ></div>

            {/* Drawer */}
            <div 
                className={`absolute right-4 top-4 bottom-4 w-[85%] max-w-xs bg-surface/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] transform transition-transform duration-300 ease-out flex flex-col ${isVisible ? 'translate-x-0' : 'translate-x-[110%]'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <span className="font-heading font-bold text-lg text-text">Menu</span>
                    <button onClick={closeMenu} className="p-2 hover:bg-white/10 rounded-full transition-colors text-text-muted hover:text-text">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                    {NAV_ITEMS.map((item, idx) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-center justify-between p-4 rounded-2xl text-base font-medium text-text-muted hover:text-white hover:bg-white/5 font-heading transition-all duration-200 group border border-transparent hover:border-white/5"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.label}
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 space-y-3">
                    <a href="#" className="flex items-center justify-center w-full p-4 rounded-2xl border border-white/10 text-text font-bold font-heading hover:bg-white/5 transition-colors">
                        Sign in
                    </a>
                    <a href="#contact" onClick={closeMenu} className="flex items-center justify-center w-full p-4 rounded-2xl bg-primary text-white font-bold font-heading shadow-glow hover:bg-primary-hover transition-colors">
                        Book a demo
                    </a>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;