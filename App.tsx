import React, { useEffect, useState } from 'react';
import {
  ArrowRight, BadgeCheck, Check, ChevronDown, Clock3, Database, Menu,
  MessageCircle, MonitorSmartphone, PackageSearch, Pill, Printer, ScanLine,
  ShieldCheck, Store, UtensilsCrossed, X, Zap,
} from 'lucide-react';
import { WHATSAPP_NUMBER } from './constants';

const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const industries = [
  {
    title: 'Retail & supermarkets',
    formValue: 'Retail or supermarket',
    copy: 'Scan, bill, and keep shelves under control through every rush.',
    icon: Store,
    points: ['Fast barcode billing', 'Low-stock visibility', 'Cashier permissions'],
    item: 'Highland Milk 1L',
    price: 480,
  },
  {
    title: 'Pharmacies',
    formValue: 'Pharmacy',
    copy: 'Keep batches, expiry dates, and product details easy to find.',
    icon: Pill,
    points: ['Batch-wise stock', 'Expiry reminders', 'Medicine lookup'],
    item: 'Paracetamol 500mg',
    price: 120,
  },
  {
    title: 'Restaurants & cafés',
    formValue: 'Restaurant or café',
    copy: 'Take an order, send it to the kitchen, and close the table simply.',
    icon: UtensilsCrossed,
    points: ['Kitchen order tickets', 'Table management', 'Split billing'],
    item: 'Chicken Kottu',
    price: 1450,
  },
];

const faqs = [
  ['Does Urthly POS require internet to make a sale?', 'The core billing workflow is designed to run at the counter without an active internet connection. Ask during your demo about the connectivity needs of optional services.'],
  ['Can I keep my current printer and scanner?', 'We review your current hardware before installation and confirm what can be reused. Common USB barcode scanners and thermal printers are part of that conversation.'],
  ['How is the one-time price applied?', 'The displayed core license is LKR 75,000 per counter. Hardware, migration work, optional cloud services, and additional terminals are quoted for your actual store before purchase.'],
  ['Will you help my staff get started?', 'Yes. The setup discussion includes installation, importing existing product data where applicable, and practical cashier training.'],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [demoBusiness, setDemoBusiness] = useState(industries[0].formValue);
  const [showPricingNote, setShowPricingNote] = useState(false);
  const current = industries[activeIndustry];
  const IndustryIcon = current.icon;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const chooseIndustry = (index: number) => {
    setActiveIndustry(index);
    setDemoBusiness(industries[index].formValue);
  };
  const moveIndustry = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const last = industries.length - 1;
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? last : ['ArrowDown', 'ArrowRight'].includes(event.key) ? (index + 1) % industries.length : (index + last) % industries.length;
    chooseIndustry(next);
    document.getElementById(`industry-tab-${next}`)?.focus();
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Urthly POS home"><img src="/logo.png" alt="" /><span>urthly<span>POS</span></span></a>
          <div className="nav-links">
            <a href="#industries">For your business</a><a href="#product">Product tour</a><a href="#setup">Your setup</a><a href="#pricing">Pricing</a><a href="#faq">FAQs</a>
          </div>
          <div className="nav-actions">
            <a className="nav-phone" href={`tel:+${WHATSAPP_NUMBER}`}>+94 77 536 4754</a>
            <a className="button button-small nav-demo" href="#demo">Book a demo <ArrowRight size={16} /></a>
            <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}<span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span></button>
          </div>
        </nav>
        {menuOpen && <div className="mobile-menu" id="mobile-menu"><a href="#industries" onClick={() => setMenuOpen(false)}>For your business</a><a href="#product" onClick={() => setMenuOpen(false)}>Product tour</a><a href="#setup" onClick={() => setMenuOpen(false)}>Your setup</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a><a className="button" href="#demo" onClick={() => setMenuOpen(false)}>Book a demo <ArrowRight size={16} /></a></div>}
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> Built for everyday selling in Sri Lanka</p>
            <h1>Your shop. <em>Running smoothly.</em></h1>
            <p>Bill customers, stay on top of stock, and review the day with a workspace built for the rhythm of your counter.</p>
            <div className="hero-actions"><a className="button" href="#demo">Book a free demo <ArrowRight size={18} /></a><a className="text-link" href="#product">Try a sample sale <ArrowRight size={17} /></a></div>
            <ul className="hero-proof"><li><ShieldCheck size={16} /> Offline billing at the counter</li><li><Printer size={16} /> Compatible hardware checked with you</li></ul>
          </div>
          <div className="hero-visual" aria-label="Illustrative Urthly POS checkout preview">
            <div className="counter-scene">
              <div className="counter-tag"><Zap size={14} /> Illustrative workspace preview</div>
              <CheckoutPreview item="Highland Milk 1L" price={480} />
              <div className="receipt-card"><span>SAMPLE RECEIPT</span><strong>LKR 1,910.00</strong><small>Ready to print</small><Check size={16} /></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Urthly POS qualities"><p>Made for the real rhythm of a Sri Lankan shop.</p><span><BadgeCheck /> Local setup guidance</span><span><BadgeCheck /> Clear one-time licensing</span><span><BadgeCheck /> Sinhala &amp; English support</span></section>

        <section className="section industries-section" id="industries">
          <div className="section-intro"><p className="eyebrow">A workspace that fits your day</p><h2>Start with the way <em>you</em> sell.</h2><p>Choose your business to see the day-to-day tools that matter most. Your selection carries through to the product tour and demo request.</p></div>
          <div className="industry-layout">
            <div className="industry-tabs" role="tablist" aria-label="Business type">
              {industries.map((item, index) => { const Icon = item.icon; return <button id={`industry-tab-${index}`} type="button" role="tab" aria-selected={activeIndustry === index} aria-controls="industry-panel" tabIndex={activeIndustry === index ? 0 : -1} key={item.title} onClick={() => chooseIndustry(index)} onKeyDown={(event) => moveIndustry(event, index)}><Icon /><span>{item.title}</span><ArrowRight size={17} /></button>; })}
            </div>
            <article className="industry-detail" id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${activeIndustry}`}>
              <div className="industry-icon"><IndustryIcon /></div><p className="eyebrow">{current.title}</p><h3>{current.copy}</h3><ul>{current.points.map(point => <li key={point}><Check size={16} /> {point}</li>)}</ul><a className="text-link" href="#product">Try the {current.title.toLowerCase()} flow <ArrowRight size={17} /></a><div className="industry-surface" aria-hidden="true"><div><span>SAMPLE SUMMARY</span><strong>One clear view</strong><small>For the end of a busy day</small></div><Database size={30} /></div>
            </article>
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="section-intro centered"><p className="eyebrow">A guided product tour</p><h2>See one sale from <em>start to finish.</em></h2><p>This is a working demonstration of a common counter flow. It uses the business type you selected above.</p></div>
          <SaleDemo industry={current} />
          <div className="workflow">{[['01', 'Find the item', 'Scan a barcode or search the product list.'], ['02', 'Finish the sale', 'Review a clear total and choose how to complete it.'], ['03', 'Know what changed', 'Use sales and stock information after closing.']].map(([number, title, copy]) => <article className="workflow-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="section setup-section" id="setup">
          <div className="setup-panel"><div><p className="eyebrow">How getting started works</p><h2>Bring the hardware you have. We’ll help map the rest.</h2><p>We start with a practical conversation about your counter, products, and current equipment. Then we plan the setup around your store.</p><a className="button button-light" href="#demo">Discuss my setup <ArrowRight size={18} /></a></div><div className="setup-list"><SetupRow number="01" icon={MonitorSmartphone} title="Review your counter" detail="Check your computer, printer, scanner, and workflow." /><SetupRow number="02" icon={Database} title="Prepare your data" detail="Discuss products, prices, and any migration work." /><SetupRow number="03" icon={Printer} title="Install and train" detail="Set up the workspace and get your staff ready." /></div></div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="pricing-copy"><p className="eyebrow">Straightforward pricing</p><h2>Buy the core software once. <em>Know what’s included.</em></h2><p>Start with the software your counter needs. We discuss hardware, optional services, and multi-location setups before you commit.</p></div>
          <article className="pricing-card"><span className="pricing-label">Core license</span><p className="price">LKR 75,000 <small>per counter</small></p><p>For one Windows counter with the core offline POS experience.</p><ul><li><Check /> Billing and inventory workspace</li><li><Check /> Receipt and barcode hardware review</li><li><Check /> Installation and cashier training discussion</li></ul><button type="button" className="text-link price-toggle" aria-expanded={showPricingNote} onClick={() => setShowPricingNote(!showPricingNote)}>What else should I budget for? <ChevronDown size={17} /></button>{showPricingNote && <p className="price-note">Hardware, migration work, cloud services, and additional terminals are quoted separately based on your store. Ask for a full setup estimate before purchase.</p>}<a className="button" href="#demo">Get my setup estimate <ArrowRight size={18} /></a></article>
        </section>

        <section className="section faq-section" id="faq"><div className="section-intro centered"><p className="eyebrow">Questions before you decide</p><h2>Clear answers, before a sales call.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>

        <section className="section demo-section" id="demo"><div className="demo-copy"><p className="eyebrow"><Clock3 size={16} /> See it on your own terms</p><h2>Let’s look at your counter together.</h2><p>We’ll use the {current.title.toLowerCase()} workflow in your demo and discuss your hardware and setup questions.</p><ul><li><Check /> A short, practical walkthrough</li><li><Check /> No commitment required</li><li><Check /> Speak with the local team on WhatsApp</li></ul></div><DemoForm selectedBusiness={demoBusiness} onBusinessChange={setDemoBusiness} /></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#top"><img src="/logo.png" alt="" /><span>urthly<span>POS</span></span></a><p>Practical point-of-sale software for Sri Lankan businesses.</p></div><div><strong>Explore</strong><a href="#industries">For your business</a><a href="#product">Product tour</a><a href="#pricing">Pricing</a><a href="#faq">FAQs</a></div><div><strong>Talk to us</strong><a href={`tel:+${WHATSAPP_NUMBER}`}>+94 77 536 4754</a><a href={whatsapp('Hello Urthly POS, I have a question.')}>WhatsApp the team</a><a href="mailto:privacy@urthly.com">Privacy questions</a><span>Weweldeniya, Sri Lanka</span></div><small>© {new Date().getFullYear()} Urthly POS. By contacting us, you agree that your information will be used to respond to your inquiry.</small></footer>
    </div>
  );
}

function CheckoutPreview({ item, price }: { item: string; price: number }) {
  return <div className="pos-screen" aria-hidden="true"><div className="pos-topbar"><span className="pos-logo">U</span><span>URTHLY POS</span><span className="status-pill"><i /> Offline ready</span></div><div className="pos-content"><div className="pos-products"><span className="screen-label">SAMPLE SALE</span><strong>Counter 01</strong><div className="search-field"><PackageSearch size={16} /> Scan barcode or search products</div><Product name={item} price={price} tone="orange" /><Product name="Customer note" price={0} tone="green" /></div><div className="pos-ticket"><span className="screen-label">CURRENT SALE</span><Ticket name={`1× ${item}`} price={price} /><div className="ticket-total"><span>Total</span><strong>LKR {price.toLocaleString()}</strong></div><span className="preview-action">Receipt available after payment</span></div></div></div>;
}

function SaleDemo({ industry }: { industry: typeof industries[number] }) {
  const [step, setStep] = useState(0);
  const labels = ['1. Add item', '2. Review sale', '3. Receipt ready'];
  const messages = [`${industry.item} added to the sale.`, `The total is LKR ${industry.price.toLocaleString()}. Review it before completing payment.`, 'The sample receipt is ready. In a live setup, this is where compatible hardware prints it.'];
  return <div className="sale-demo"><div className="sale-demo-copy"><span className="feature-kicker"><ScanLine size={16} /> {industry.title}</span><h3>{messages[step]}</h3><p>Use the steps to explore the demonstration. No payment, printing, or customer data is involved.</p><div className="demo-steps" role="group" aria-label="Sample sale steps">{labels.map((label, index) => <button type="button" key={label} aria-pressed={step === index} onClick={() => setStep(index)}>{label}</button>)}</div></div><div className="sale-demo-screen" aria-live="polite"><span className="screen-label">ILLUSTRATIVE WORKFLOW</span><div className="sale-demo-item"><span>{step === 0 ? 'Barcode found' : industry.item}</span><strong>{step === 0 ? 'Ready to add' : `LKR ${industry.price.toLocaleString()}`}</strong></div><div className={`sale-demo-total ${step > 0 ? 'is-visible' : ''}`}><span>{step === 2 ? 'Receipt status' : 'Sale total'}</span><strong>{step === 2 ? 'Ready to print' : `LKR ${industry.price.toLocaleString()}`}</strong></div><div className={`sale-demo-receipt ${step === 2 ? 'is-visible' : ''}`}><Check size={16} /> Sample sale recorded locally</div></div></div>;
}

function Product({ name, price, tone }: { name: string; price: number; tone: string }) { return <div className="product-row"><span className={`product-dot ${tone}`} /><span>{name}</span><b>{price ? `LKR ${price}` : 'Optional'}</b></div>; }
function Ticket({ name, price }: { name: string; price: number }) { return <div className="ticket-item"><span>{name}</span><b>{price.toLocaleString()}</b></div>; }
function SetupRow({ number, icon: Icon, title, detail }: { number: string; icon: React.ComponentType<{ size?: number }>; title: string; detail: string }) { return <div><span className="setup-number">{number}</span><Icon size={20} /><span><b>{title}</b><small>{detail}</small></span><Check size={18} /></div>; }
function DemoForm({ selectedBusiness, onBusinessChange }: { selectedBusiness: string; onBusinessChange: (value: string) => void }) { return <form className="demo-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); window.open(whatsapp(`Hello Urthly POS, I would like a demo.\n\nName: ${data.get('name')}\nBusiness: ${data.get('business')}\nLocation: ${data.get('location')}`), '_blank', 'noopener,noreferrer'); }}><h3>Request a free demo</h3><p>Your selection is included below. Submitting opens a WhatsApp message for the Urthly team; sending that message completes your inquiry.</p><label htmlFor="name">Your name<input id="name" name="name" required placeholder="e.g. Nadeesha Perera" /></label><label htmlFor="business">Business type<select id="business" name="business" required value={selectedBusiness} onChange={(event) => onBusinessChange(event.target.value)}><option>Retail or supermarket</option><option>Pharmacy</option><option>Restaurant or café</option><option>Other</option></select></label><label htmlFor="location">Store location<input id="location" name="location" required placeholder="e.g. Kandy" /></label><button className="button" type="submit">Continue on WhatsApp <MessageCircle size={18} /></button></form>; }
