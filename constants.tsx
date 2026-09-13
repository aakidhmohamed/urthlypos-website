import {
  WifiOff,
  Store,
  Pill,
  Utensils,
  Zap,
  PackageCheck,
  ScanBarcode,
  TrendingUp,
  Users,
  Printer,
  ShieldCheck,
  Globe,
  BarChart3,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2,
  XCircle,
  Clock,
  Coins
} from 'lucide-react';
import { NavItem, Industry, Feature, PricingPlan, FAQ, Testimonial } from './types';

export const WHATSAPP_NUMBER = '94775364754';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Industries', href: '#industries' },
  { label: 'Features', href: '#features' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585315348826', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const INDUSTRIES: (Industry & { 
  id: string; 
  subtitle: string;
  metrics: { label: string; value: string }[];
  sampleItems: { name: string; category: string; badge: string; price: string }[];
})[] = [
  {
    id: 'retail',
    title: 'Retail & Supermarket POS',
    subtitle: 'High-Speed Queue Management',
    description: 'Designed for supermarkets, grocery stores, and clothing boutiques in Sri Lanka. Process hundreds of customers during rush hours without relying on unstable internet connections.',
    features: [
      'Sub-second barcode scanning queue',
      'Multi-unit pricing (Kg, Pack, Unit)',
      'Customer loyalty & phone lookup',
      'Dual display support for customers'
    ],
    metrics: [
      { label: 'Billing Speed', value: '< 0.5 sec' },
      { label: 'Daily Capacity', value: '10,000+ Items' },
      { label: 'Network Need', value: '0 KB/s (Offline)' }
    ],
    sampleItems: [
      { name: 'Highland Fresh Milk 1L', category: 'Dairy', badge: 'Fast Seller', price: 'LKR 480.00' },
      { name: 'Munchee Super Cream Cracker', category: 'Biscuits', badge: 'In Stock', price: 'LKR 260.00' },
      { name: 'Watawala Tea 500g', category: 'Beverages', badge: 'Low Stock', price: 'LKR 950.00' }
    ],
    icon: Store,
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy & Medical POS',
    subtitle: 'NMRA Compliant & Expiry Guarded',
    description: 'Purpose-built for Sri Lankan pharmacies. Effortlessly manage batch numbers, expiry notifications, brand vs. generic salt composition lookup, and strict health authority guidelines.',
    features: [
      'Automatic 30/60/90 day expiry alerts',
      'Generic active salt chemical search',
      'Batch-wise stock level tracking',
      'Doctor prescription reference tag'
    ],
    metrics: [
      { label: 'Expiry Reduction', value: '98%' },
      { label: 'Compliance', value: 'NMRA Standards' },
      { label: 'Database', value: '50k+ Medicines' }
    ],
    sampleItems: [
      { name: 'Paracetamol 500mg (GSK)', category: 'Analgesic', badge: 'EXP: 45 Days', price: 'LKR 5.00/tab' },
      { name: 'Amoxicillin 250mg Cap', category: 'Antibiotic', badge: 'Prescription Only', price: 'LKR 28.00/tab' },
      { name: 'Omeprazole 20mg Cap', category: 'Gastric', badge: 'Batch #B904', price: 'LKR 18.00/tab' }
    ],
    icon: Pill,
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Cafe POS',
    subtitle: 'Instant Kitchen Order Tickets (KOT)',
    description: 'Accelerate order flow for dine-in, takeaway, and delivery. Fire instant KOTs to thermal printers in the kitchen and manage tables with zero ordering delay.',
    features: [
      'Instant Kitchen Order Ticket (KOT) printing',
      'Interactive visual table floor map',
      'Item add-ons & modification notes',
      'Split bill & payment grouping'
    ],
    metrics: [
      { label: 'Table Turnover', value: '+35% Faster' },
      { label: 'KOT Printing', value: 'Instant' },
      { label: 'Order Mistakes', value: 'Zero' }
    ],
    sampleItems: [
      { name: 'Chicken Kottu (Large)', category: 'Mains', badge: 'Kitchen KOT 1', price: 'LKR 1,450.00' },
      { name: 'Iced Coffee Float', category: 'Beverages', badge: 'Bar Order', price: 'LKR 650.00' },
      { name: 'Egg Fried Rice Special', category: 'Mains', badge: 'Dine-In T-04', price: 'LKR 1,200.00' }
    ],
    icon: Utensils,
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Sales & Profit Reports',
    description: 'Track daily revenue, profit margins, and best-selling items with detailed visual reports helpful for tax and auditing.',
    icon: TrendingUp,
    colSpan: 1,
  },
  {
    title: 'Works 100% Offline',
    description: 'Never stop selling. Our system runs completely independently on your device. No internet required, ever. Your data stays safe locally on your machine.',
    icon: WifiOff,
    colSpan: 2,
  },
  {
    title: 'Smart Inventory',
    description: 'Real-time stock tracking with low-stock alerts and expiry date notifications to prevent wastage.',
    icon: PackageCheck,
    colSpan: 1,
  },
  {
    title: 'Hardware Support',
    description: 'Plug & Play support for Barcode Scanners, Thermal Printers, and Cash Drawers widely available in Sri Lanka.',
    icon: Printer,
    colSpan: 1,
  },
  {
    title: 'Staff Management',
    description: 'Create individual staff accounts with specific permissions and track their sales performance.',
    icon: Users,
    colSpan: 1,
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Internet Requirement',
    urthly: '100% Offline (Zero internet required)',
    others: 'Requires active internet connection',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  },
  {
    feature: 'Pricing Model',
    urthly: 'One-Time Purchase (Lifetime License)',
    others: 'Monthly Subscription (Forever fees)',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  },
  {
    feature: 'Billing Speed',
    urthly: 'Instant local database execution (< 0.1s)',
    others: 'Cloud latency & spinning loaders (2 - 10s)',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  },
  {
    feature: 'Data Ownership & Security',
    urthly: 'Stored locally on your device with encryption',
    others: 'Stored on third-party cloud servers',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  },
  {
    feature: 'Hardware Support',
    urthly: 'Works with any standard PC & USB Thermal Printer',
    others: 'Often forces buying expensive proprietary hardware',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  },
  {
    feature: 'Language & Local Support',
    urthly: 'Dedicated local support in Sinhala & English',
    others: 'Generic overseas email support tickets',
    urthlyIcon: CheckCircle2,
    othersIcon: XCircle
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Lifetime License',
    price: 'LKR 75,000',
    period: '/ one-time payment',
    description: 'Complete software ownership for a single store. No hidden charges or monthly fees ever.',
    features: [
      'Lifetime Software License',
      'Unlimited Products & Categories',
      '100% Offline Database Engine',
      'Thermal Receipt & KOT Printing',
      'Barcode Scanning & Label Printing',
      'Expiry Date & Low Stock Alerts',
      'Staff Role & Cashier Permissions',
      '1 Year Free Software Updates',
      'Priority Local Support (Sinhala/English)'
    ],
    buttonText: 'Get Started Now',
    highlight: true
  },
  {
    name: 'Multi-Store Enterprise',
    price: 'Custom',
    period: ' tailored plan',
    description: 'Designed for chain stores, supermarket franchises, and multi-branch operations.',
    features: [
      'Multi-branch Central Admin Sync',
      'Centralized Inventory Control',
      'Custom ERP & Accounting Integration',
      'Dedicated Account Manager',
      'On-site Hardware Setup & Training',
      'SLA Guaranteed 24/7 Support'
    ],
    buttonText: 'Talk to Enterprise Team',
    highlight: false
  }
];

export const TESTIMONIALS: (Testimonial & { location: string; category: string })[] = [
  {
    name: 'Kasun Perera',
    role: 'Owner',
    location: 'Kandy Fresh Mart',
    category: 'Retail',
    content: "The offline feature is a lifesaver with power fluctuations in Kandy. Billing never stops, cashiers scan without lag, and our customers don't wait in long queues anymore.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Dilani Silva',
    role: 'Managing Pharmacist',
    location: 'City Meds Pharmacy, Colombo',
    category: 'Pharmacy',
    content: "Managing medicine expiry dates was stressful. Urthly POS alerts us 60 days before products expire. The generic chemical search is indispensable for quick substitution.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Mohamed Fazil',
    role: 'General Manager',
    location: 'Spice Garden Restaurant, Galle',
    category: 'Restaurant',
    content: "Kitchen Order Tickets print in 100 milliseconds right inside the hot kitchen. Split billing during weekend tourist rushes saved our staff hours of manual math.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'How does Urthly POS run without an internet connection?',
    answer: 'Urthly POS utilizes a high-performance embedded database stored directly on your computer’s hard drive. All stock transactions, barcode scans, and receipt printouts execute locally at hardware speed with zero dependency on external servers or cloud internet.'
  },
  {
    question: 'Is there really no monthly or annual subscription fee?',
    answer: 'Correct! The Lifetime License is a single one-time payment of LKR 75,000. Once purchased, you own the software license outright without any mandatory monthly subscriptions or recurring fees.'
  },
  {
    question: 'What computer and hardware specifications do I need?',
    answer: 'Urthly POS runs on any standard desktop PC or laptop running Windows 10 or 11 (minimum 4GB RAM). It connects via USB/Bluetooth to standard 80mm/58mm thermal receipt printers, barcode scanners, and automatic cash drawers available across Sri Lanka.'
  },
  {
    question: 'What happens to my data if my computer shuts down or crashes?',
    answer: 'Urthly POS includes an automated background local backup engine that saves encrypted database snapshots to a separate drive or external storage every hour. You can restore your complete database in less than 2 minutes.'
  },
  {
    question: 'How do I get technical support or installation help?',
    answer: 'We provide remote installation assistance, step-by-step video guides, and direct phone/WhatsApp support in Sinhala, Tamil, and English. For Colombo and main city regions, on-site setup is also available.'
  },
  {
    question: 'Can I import my existing product list from Excel?',
    answer: 'Yes! Urthly POS features a 1-click Excel/CSV bulk import tool. You can upload thousands of products, prices, barcodes, and stock quantities in seconds.'
  }
];