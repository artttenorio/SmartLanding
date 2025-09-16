import { Feature, Testimonial, PricingTier } from '../types';

export const features: Feature[] = [
  {
    id: 'responsive',
    title: 'Fully Responsive',
    description: 'Beautiful designs that work perfectly on desktop, tablet, and mobile devices.',
    icon: 'DevicePhoneMobileIcon'
  },
  {
    id: 'best-practices',
    title: 'Built with Best Practices',
    description: 'Clean, semantic code following industry standards and accessibility guidelines.',
    icon: 'CodeBracketIcon'
  },
  {
    id: 'performance',
    title: 'Fast Performance',
    description: 'Optimized for speed with lazy loading, compressed images, and efficient code.',
    icon: 'BoltIcon'
  },
  {
    id: 'customization',
    title: 'Easy Customization',
    description: 'Simple to modify colors, fonts, and layouts to match your brand perfectly.',
    icon: 'PaintBrushIcon'
  },
  {
    id: 'seo',
    title: 'SEO Ready',
    description: 'Pre-configured for search engines with proper meta tags and structured data.',
    icon: 'MagnifyingGlassIcon'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: 'SmartLanding templates saved us months of development time. Our new site converts 40% better than our old one!'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Creative Agency',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: 'The quality and attention to detail in these templates is outstanding. Highly recommended for any business.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Startup Founders',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: 'We launched our product site in just 2 days using SmartLanding. The results speak for themselves.'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: 'Single Site License',
    price: 89,
    features: [
      'Use on 1 website',
      'HTML/CSS files',
      'React components',
      'Basic documentation',
      '6 months support'
    ]
  },
  {
    id: 'business',
    name: 'Business License',
    price: 149,
    popular: true,
    features: [
      'Use on 5 websites',
      'HTML/CSS files',
      'React components',
      'Figma design files',
      'Advanced documentation',
      '12 months support',
      'Commercial use rights'
    ]
  },
  {
    id: 'agency',
    name: 'Agency License',
    price: 299,
    features: [
      'Unlimited websites',
      'HTML/CSS files',
      'React components',
      'Figma design files',
      'Source files included',
      'Priority support',
      'Commercial use rights',
      'Resale rights'
    ]
  }
];

export const faqData = [
  {
    question: 'What licenses are available?',
    answer: 'We offer three license types: Single Site (1 website), Business (5 websites), and Agency (unlimited websites with resale rights).'
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Absolutely! All templates come with full source code and are designed to be easily customizable. You can modify colors, fonts, layouts, and content to match your brand.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us for a full refund.'
  },
  {
    question: 'What file formats are included?',
    answer: 'Each template includes HTML/CSS files, React components, and documentation. Business and Agency licenses also include Figma design files.'
  },
  {
    question: 'Do you provide support?',
    answer: 'Yes! Single Site licenses include 6 months of support, Business licenses include 12 months, and Agency licenses include priority support.'
  },
  {
    question: 'Can I see a live demo?',
    answer: 'Yes, you can preview each template by clicking the "Preview" button on any template card. This will show you the live demo and all included features.'
  }
];