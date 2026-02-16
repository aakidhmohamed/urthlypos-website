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
  BarChart3
} from 'lucide-react';
import { NavItem, Industry, Feature, PricingPlan, FAQ, Testimonial } from './types';

export const WHATSAPP_NUMBER = '94775364754';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Industries', href: '#industries' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

export const INDUSTRIES: Industry[] = [
  {
    title: 'Retail POS',
    description: 'Perfect for supermarkets and grocery stores in Sri Lanka. Manage high-volume billing queues during busy hours without internet.',
    features: ['Fast billing queue', 'Inventory tracking', 'Customer loyalty'],
    icon: Store,
  },
  {
    title: 'Pharmacy POS',
    description: 'Specialized for pharmacies. Handle expiry dates, NMRA regulations, batch numbers, and salt composition searches easily.',
    features: ['Expiry alerts', 'Batch management', 'Generic name search'],
    icon: Pill,
  },
  {
    title: 'Restaurant POS',
    description: 'Streamline kitchen operations. Print KOTs instantly and manage tables for faster turnover in busy cafes and restaurants.',
    features: ['KOT printing', 'Table management', 'Recipe costing'],
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

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Lifetime License',
    price: '75,000',
    period: '/one-time',
    description: 'Complete ownership. No monthly fees.',
    features: [
      'Lifetime Validity',
      'Unlimited Products',
      'Offline Capability',
      'Free Updates (1 Year)',
      'Priority Support (Sinhala/English)',
      'No Monthly Fees'
    ],
    buttonText: 'Buy Now',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For multi-location chains.',
    features: [
      'Multi-store Sync',
      'Central Admin Dashboard',
      'API Access',
      'Dedicated Account Manager',
      'On-site Training'
    ],
    buttonText: 'Contact Sales',
    highlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Kasun Perera',
    role: 'Owner, Kandy Fresh Mart',
    content: "The offline feature is a lifesaver with the frequent power fluctuations. Billing never stops, and customers don't have to wait.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Dilani Silva',
    role: 'Pharmacist, City Meds Colombo',
    content: "Managing expiry dates was a nightmare before. This POS alerts me 30 days in advance. Compliant with local regulations too.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Mohamed Fazil',
    role: 'Owner, Spice Garden Galle',
    content: "Kitchen Order Tickets (KOT) print instantly. The table management feature helped us manage our weekend tourist rush efficiently.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'How secure is my data?',
    answer: 'Your data is stored locally on your device with military-grade encryption. You retain full control of your business data, safe from external breaches.'
  },
  {
    question: 'Is there really no monthly fee?',
    answer: 'Yes! The Lifetime License is a one-time purchase. You own the software forever without any recurring subscription fees, perfect for cost-conscious businesses.'
  },
  {
    question: 'What hardware do I need?',
    answer: 'Urthly POS runs on any standard Windows PC or Laptop. It supports most thermal printers and barcode scanners available in the Sri Lankan market.'
  },
  {
    question: 'How do I get updates?',
    answer: 'We release regular updates with new features. Your license includes 1 year of free updates, which can be extended optionally.'
  },
  {
    question: 'Can I try before I buy?',
    answer: 'We offer a personalized live demo where our experts show you exactly how the system works. We can conduct the demo in English or Sinhala.'
  }
];