import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'agency-pro',
    name: 'Agency Pro',
    category: 'Agency',
    highlights: ['Modern Design', 'Fully Responsive', 'Dark Mode'],
    price: 89,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ],
    features: ['Landing Page', 'Portfolio Section', 'Contact Forms', 'Team Showcase', 'Services Grid'],
    includedFiles: ['HTML/CSS', 'React Components', 'Figma Design', 'Documentation'],
    useCases: ['Marketing Agencies', 'Design Studios', 'Freelancers'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    purchaseUrl: 'https://example.com/purchase/agency-pro'
  },
  {
    id: 'saas-starter',
    name: 'SaaS Starter',
    category: 'SaaS',
    highlights: ['Conversion Optimized', 'Payment Ready', 'Analytics'],
    price: 129,
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
    ],
    features: ['Pricing Tables', 'Feature Comparison', 'Testimonials', 'FAQ Section', 'CTA Optimization'],
    includedFiles: ['HTML/CSS', 'React Components', 'Stripe Integration', 'Analytics Setup'],
    useCases: ['SaaS Companies', 'Software Products', 'App Launches'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
    purchaseUrl: 'https://example.com/purchase/saas-starter'
  },
  {
    id: 'consulting-elite',
    name: 'Consulting Elite',
    category: 'Consultancy',
    highlights: ['Professional', 'Trust Building', 'Lead Generation'],
    price: 99,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    ],
    features: ['Case Studies', 'Expertise Showcase', 'Booking System', 'Blog Integration', 'Client Portal'],
    includedFiles: ['HTML/CSS', 'React Components', 'CMS Integration', 'SEO Setup'],
    useCases: ['Business Consultants', 'Strategy Firms', 'Professional Services'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Headless CMS'],
    purchaseUrl: 'https://example.com/purchase/consulting-elite'
  },
  {
    id: 'ecommerce-store',
    name: 'E-commerce Store',
    category: 'E-commerce',
    highlights: ['Mobile First', 'Cart Integration', 'SEO Ready'],
    price: 149,
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
    ],
    features: ['Product Catalog', 'Shopping Cart', 'Checkout Flow', 'User Accounts', 'Inventory Management'],
    includedFiles: ['HTML/CSS', 'React Components', 'API Integration', 'Payment Gateway'],
    useCases: ['Online Stores', 'Product Launches', 'Retail Businesses'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Commerce.js'],
    purchaseUrl: 'https://example.com/purchase/ecommerce-store'
  },
  {
    id: 'portfolio-creative',
    name: 'Portfolio Creative',
    category: 'Portfolio',
    highlights: ['Visual Impact', 'Gallery Focus', 'Fast Loading'],
    price: 69,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop'
    ],
    features: ['Image Gallery', 'Project Showcase', 'About Section', 'Contact Form', 'Social Links'],
    includedFiles: ['HTML/CSS', 'React Components', 'Image Optimization', 'Animation Library'],
    useCases: ['Designers', 'Photographers', 'Artists', 'Creatives'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purchaseUrl: 'https://example.com/purchase/portfolio-creative'
  },
  {
    id: 'startup-launch',
    name: 'Startup Launch',
    category: 'Startup',
    highlights: ['MVP Ready', 'Investor Friendly', 'Growth Focused'],
    price: 119,
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=600&fit=crop'
    ],
    features: ['Pitch Deck', 'Product Demo', 'Team Section', 'Investor Info', 'Roadmap'],
    includedFiles: ['HTML/CSS', 'React Components', 'Presentation Kit', 'Pitch Deck'],
    useCases: ['Startups', 'Product Launches', 'Fundraising'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    purchaseUrl: 'https://example.com/purchase/startup-launch'
  }
];