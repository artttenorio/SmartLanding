# SmartLanding

A polished, responsive single-page landing site that advertises and showcases premium website templates for companies. Built with React, TypeScript, and Tailwind CSS.

![SmartLanding Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional aesthetic with a premium feel
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Optimized for speed with lazy loading and efficient code
- 🎭 **Smooth Animations**: Tasteful micro-animations powered by Framer Motion
- ♿ **Accessibility First**: Semantic HTML, keyboard navigation, and ARIA attributes
- 🔍 **SEO Ready**: Pre-configured meta tags and structured data
- 🎯 **Conversion Optimized**: Strategically placed CTAs and trust signals

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/smartlanding.git
   cd smartlanding
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **SEO**: React Helmet Async
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── Templates.tsx    # Template grid
│   ├── TemplateModal.tsx # Template detail modal
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Pricing.tsx      # Pricing tiers
│   ├── FAQ.tsx          # FAQ accordion
│   ├── Footer.tsx       # Footer with links
│   ├── Layout.tsx       # Main layout wrapper
│   └── SEO.tsx          # SEO meta tags
├── data/                # Static data
│   ├── templates.ts     # Template catalog
│   └── index.ts         # Features, testimonials, etc.
├── types/               # TypeScript types
│   └── index.ts         # Type definitions
└── App.tsx              # Main app component
```

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      accent: {
        // Your accent colors
      }
    }
  }
}
```

### Content

- **Templates**: Edit `src/data/templates.ts`
- **Features**: Edit `src/data/index.ts`
- **Testimonials**: Edit `src/data/index.ts`
- **Pricing**: Edit `src/data/index.ts`
- **FAQ**: Edit `src/data/index.ts`

### SEO

Update SEO settings in `src/components/SEO.tsx`:

- Site title and description
- Open Graph images
- Structured data
- Meta tags

## 📦 Available Scripts

### Development

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production

### Production Build

```bash
npm run build
```

Creates a `build` folder with optimized production files.

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your Git repository for continuous deployment

### Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Static Hosting

The build folder can be served by any static hosting service:

- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 🔧 Environment Variables

Create a `.env` file for environment-specific settings:

```env
REACT_APP_SITE_URL=https://yourdomain.com
REACT_APP_CONTACT_EMAIL=hello@yourdomain.com
REACT_APP_GA_TRACKING_ID=your-google-analytics-id
```

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: ~135KB gzipped
- **Load Time**: <2s on 3G

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Heroicons](https://heroicons.com/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Create React App](https://create-react-app.dev/)

## 📞 Support

- **Email**:smartlanding.dev@gmail.com
- **Documentation**: [docs.smartlanding.com](https://docs.smartlanding.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/smartlanding/issues)

---

Made with ❤️ by the SmartLanding Team
