import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight, Zap } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Toast Top Announcement Bar */}
      <div className="bg-[#FF5000] text-white py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2 tracking-wide shadow-sm">
        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
          <Zap className="w-3 h-3 fill-current" /> Special Sri Lanka Offer
        </span>
        <span>Get Urthly POS with 0% Monthly Fees — LKR 75,000 Lifetime License</span>
        <a href="#pricing" className="underline hover:text-amber-100 font-bold ml-1 hidden sm:inline-block">
          See Plans &rarr;
        </a>
      </div>

      {/* Main Sticky Toast Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-md py-3'
            : 'bg-white border-b border-[#E5E0D8]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 rounded-xl bg-[#FF5000] text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-[#111827] flex items-center gap-1">
              Urthly
              <span className="bg-[#FF5000] text-white text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                POS
              </span>
            </span>
          </button>

          {/* Center Links (Toast Style) */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-[#374151] hover:text-[#FF5000] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Urthly POS team, I want to talk to sales.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#111827] border border-[#D1D5DB] hover:border-[#FF5000] hover:text-[#FF5000] transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5000]" />
              Talk to Sales
            </a>

            <a
              href="#booking"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF5000] hover:bg-[#E04600] transition-all shadow-md hover:shadow-lg hover:shadow-[#FF5000]/20 active:scale-95"
            >
              Get Started
            </a>

            <button
              onClick={openMenu}
              className="lg:hidden text-[#111827] hover:text-[#FF5000] p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <span className="font-heading font-black text-xl text-[#111827]">
                  Urthly <span className="text-[#FF5000]">POS</span>
                </span>
                <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-black">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between p-3 rounded-xl font-bold text-gray-800 hover:text-[#FF5000] hover:bg-orange-50 transition-all"
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4 text-[#FF5000]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100">
              <a
                href="#booking"
                onClick={closeMenu}
                className="w-full py-3 rounded-xl font-bold text-center text-white bg-[#FF5000] hover:bg-[#E04600] block shadow-md"
              >
                Book Free On-Site Demo
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-center text-[#111827] border border-gray-300 block hover:bg-gray-50"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;