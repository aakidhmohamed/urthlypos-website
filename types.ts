import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Industry {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; 
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}