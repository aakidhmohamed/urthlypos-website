import React, { useState } from 'react';
import { Printer, Scan, Monitor, HardDrive, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

interface HardwareCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  specs: string[];
  devices: { title: string; subtitle: string; tag: string }[];
}

const HARDWARE_CATEGORIES: HardwareCategory[] = [
  {
    id: 'printers',
    name: 'Thermal Printers',
    icon: Printer,
    description: 'Direct high-speed ESC/POS driverless printing. Supports 80mm & 58mm thermal receipt printers, kitchen order printers (KOT), and sticker barcode printers.',
    specs: ['250mm/s Print Speed', 'Auto-Cutter Support', 'USB / Ethernet / Serial', 'Zero Driver Installation'],
    devices: [
      { title: 'Xprinter XP-N160II / XP-Q800', subtitle: '80mm USB + LAN Thermal Printer', tag: 'Native Plug & Play' },
      { title: 'Epson TM-T82III / TM-T20', subtitle: 'Industry Standard Heavy-Duty POS Printer', tag: 'Fast KOT Fire' },
      { title: 'Rongta RP326 / RP80', subtitle: 'Compact High-Speed Thermal Receipt Printer', tag: 'Auto Cut Supported' },
    ]
  },
  {
    id: 'scanners',
    name: 'Barcode Scanners',
    icon: Scan,
    description: 'Sub-second 1D & 2D QR barcode reading. Built to scan wrinkled packaging, Sri Lankan pharmacy medicine strips, and fast-moving supermarket items.',
    specs: ['0.05s Instant Decode', 'GS1 DataBar & QR Code', 'Omnidirectional Hands-free', 'USB HID Automatic Mode'],
    devices: [
      { title: 'Honeywell Voyager 1250g / 1470g', subtitle: '1D/2D High-Speed Handheld Scanner', tag: 'Pharmacy Grade' },
      { title: 'Zebra DS2208 / DS9308', subtitle: 'Desktop Hands-Free Supermarket Scanner', tag: 'High Queue Capacity' },
      { title: 'Datalogic QuickScan QW2100', subtitle: 'Wide-angle Barcode Reader for Boutiques', tag: 'Instant Scan' },
    ]
  },
  {
    id: 'terminals',
    name: 'Touch Terminals & PCs',
    icon: Monitor,
    description: 'Runs smoothly on any Windows 10/11 desktop, laptop, or dedicated All-in-One touch POS terminal. Low RAM requirement (<150MB memory footprint).',
    specs: ['Windows 10 / 11 Native', 'Low Memory (<150MB RAM)', 'Dual Customer Screen', 'Touchscreen Optimized'],
    devices: [
      { title: 'Sunmi / POSBANK All-in-One Touch PC', subtitle: 'Dual Screen 15.6" Capacitive Touch Terminal', tag: 'Enterprise Grade' },
      { title: 'Any Windows Desktop / Laptop', subtitle: 'Intel Core i3/i5 or Celeron with 4GB RAM', tag: 'Low Specs Compatible' },
      { title: 'Android Handheld POS Terminals', subtitle: 'Mobile billing for table-side restaurant ordering', tag: 'Wireless Mobility' },
    ]
  },
  {
    id: 'drawers',
    name: 'Cash Drawers & Scales',
    icon: HardDrive,
    description: 'Automatic RJ11 cash drawer kickoff upon payment confirmation. Direct RS232 weighing scale integration for vegetable & meat pricing.',
    specs: ['RJ11 Auto Cash Pop', 'RS-232 Digital Scale Sync', 'Dual Key Lock', 'Heavy Duty Steel'],
    devices: [
      { title: 'Heavy-Duty 4-Note 8-Coin Steel Drawer', subtitle: 'Standard RJ11 connection triggered by printer', tag: 'Auto Open' },
      { title: 'Digital Weight Scale RS232 Module', subtitle: 'Automatic Kg & Price calculation for Supermarkets', tag: 'Weight Auto Sync' },
    ]
  }
];

const HardwareSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('printers');
  const currentCategory = HARDWARE_CATEGORIES.find(c => c.id === activeTab) || HARDWARE_CATEGORIES[0];

  return (
    <section className="py-24 md:py-32 border-b relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                            bg-amber-subtle border border-border-amber text-amber-DEFAULT
                            text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Universal Hardware Support</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight mb-4 leading-tight">
              Plug & Play Compatible With <br />
              <span className="text-gradient-amber">Your Existing POS Hardware</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto font-medium">
              No need to buy expensive proprietary hardware locks. Urthly POS connects natively to all thermal printers, barcode scanners, and cash drawers in Sri Lanka.
            </p>
          </FadeIn>
        </div>

        {/* Tab Navigation */}
        <FadeIn delay={300} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-raised border border-border shadow-card max-w-full overflow-x-auto">
            {HARDWARE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'text-canvas'
                    : 'text-text-secondary hover:text-text hover:bg-white/5'
                }`}
                style={activeTab === cat.id
                  ? { background: 'linear-gradient(135deg, #F5BC4A 0%, #E8A020 100%)' }
                  : {}
                }
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Detail Card */}
        <FadeIn key={activeTab} delay={400}>
          <div className="bg-surface-raised border border-border rounded-3xl p-8 md:p-12 shadow-card-lg hover:border-border-amber transition-colors duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left: Description & Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-subtle border border-border-amber text-amber-DEFAULT font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Driverless Compatibility</span>
                </div>

                <h3 className="text-3xl font-heading font-extrabold text-text tracking-tight">
                  {currentCategory.name}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed font-medium">
                  {currentCategory.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  {currentCategory.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-border text-text">
                      <CheckCircle2 className="w-4 h-4 text-amber-DEFAULT shrink-0" />
                      <span className="font-semibold">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Device List */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-mono text-text-muted uppercase font-bold block mb-2">
                  Popular Tested Devices in Sri Lanka:
                </span>
                {currentCategory.devices.map((dev, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-canvas border border-border hover:border-border-amber transition-all duration-300 flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-heading font-bold text-text text-base group-hover:text-amber-DEFAULT transition-colors">
                        {dev.title}
                      </h4>
                      <p className="text-xs text-text-muted font-medium mt-0.5">{dev.subtitle}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-DEFAULT bg-amber-subtle border border-border-amber px-2.5 py-1 rounded-full shrink-0">
                      {dev.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HardwareSection;
