import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import FadeIn from './FadeIn';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'offline' | 'hardware' | 'pricing' | 'compliance';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'offline',
    question: 'How does Urthly POS work 100% offline during internet outages?',
    answer: 'Urthly POS stores all database transactions, stock movements, and customer receipts locally on your device in an embedded high-performance database. It does NOT depend on cloud APIs to issue bills. When your internet connection is restored, background sync automatically backs up data to the cloud seamlessly without slowing down cashiers.'
  },
  {
    category: 'pricing',
    question: 'Are there any monthly subscription fees or hidden costs?',
    answer: 'No! Urthly POS operates on a transparent lifetime license model per terminal. You pay a one-time fee and own the software forever. There are zero monthly charges, zero mandatory subscription updates, and zero per-transaction fees.'
  },
  {
    category: 'compliance',
    question: 'Is Urthly POS compliant with Sri Lanka NMRA rules for Pharmacies?',
    answer: 'Yes! Urthly POS includes dedicated pharmacy features: Batch Number tracking, Expiry Date alerts, Drug Classification, and NMRA Price Cap enforcement. You can scan barcodes or search medicines by generic formula name instantly.'
  },
  {
    category: 'hardware',
    question: 'Can I use my existing thermal printer and barcode scanner?',
    answer: 'Absolutely. Urthly POS supports native ESC/POS thermal printers (80mm & 58mm), standard USB/Bluetooth barcode scanners, and RJ11 cash drawers out of the box without requiring specialized proprietary drivers.'
  },
  {
    category: 'general',
    question: 'Can I monitor my sales remotely from my mobile phone?',
    answer: 'Yes! While the billing counter runs offline, Urthly POS includes an optional Cloud Sync portal. Store owners can log in from their smartphone or home laptop to view live daily sales revenue, top-selling items, and low-stock alerts in real-time.'
  },
  {
    category: 'general',
    question: 'How long does installation and cashier training take?',
    answer: 'Setup takes less than 15 minutes. Our simple and intuitive touchscreen user interface is designed so cashiers can master scanning, billing, and receipt printing in under 10 minutes of training.'
  },
  {
    category: 'offline',
    question: 'What happens if my POS computer crashes or hard drive fails?',
    answer: 'Urthly POS automatically creates encrypted local database backups every day, as well as automatic cloud sync whenever an internet connection is available. You can restore your complete database on a replacement PC in under 5 minutes.'
  },
  {
    category: 'hardware',
    question: 'Does Urthly POS support dual customer display screens?',
    answer: 'Yes, Urthly POS supports secondary customer-facing screens to display live cart items, subtotal, and promotional announcements during billing.'
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'offline', label: 'Offline & Security' },
  { id: 'pricing', label: 'Pricing & Licensing' },
  { id: 'compliance', label: 'Pharmacy & Legal' },
  { id: 'hardware', label: 'Hardware' },
];

const FAQSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = FAQ_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 md:py-32 border-b relative" id="faq" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Instant Answers</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg font-medium">
              Everything you need to know about Urthly POS licensing, offline features, and hardware integration.
            </p>
          </FadeIn>
        </div>

        {/* Search & Filters */}
        <FadeIn delay={300} className="space-y-5 mb-10">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. offline, printer, NMRA, price)..."
              className="w-full bg-surface-raised border border-border rounded-2xl py-4 pl-12 pr-4 text-text placeholder:text-text-muted text-sm font-medium focus:outline-none focus:border-amber-DEFAULT focus:ring-1 focus:ring-amber-DEFAULT/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted hover:text-text"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'text-canvas'
                    : 'bg-surface-raised border border-border text-text-secondary hover:text-text hover:border-border-strong'
                }`}
                style={selectedCategory === cat.id
                  ? { background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }
                  : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <FadeIn key={index} delay={index * 40}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-surface-raised border-border-amber'
                        : 'bg-surface-raised border-border hover:border-border-strong'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-text text-base md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-DEFAULT shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-text-secondary text-sm md:text-base leading-relaxed font-medium border-t border-border pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })
          ) : (
            <div className="text-center py-12 bg-surface-raised border border-border rounded-2xl">
              <p className="text-text-muted font-mono text-sm">No matching questions found for "{searchQuery}".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
