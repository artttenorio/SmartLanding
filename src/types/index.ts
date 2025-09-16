export interface Template {
  id: string;
  name: string;
  category: string;
  highlights: string[];
  price: number;
  thumbnail: string;
  screenshots: string[];
  features: string[];
  includedFiles: string[];
  useCases: string[];
  techStack: string[];
  purchaseUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}