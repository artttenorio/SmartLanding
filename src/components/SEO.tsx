import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SmartLanding — Beautiful Website Templates for Companies',
  description = 'Launch professional company websites in hours — not weeks. High-converting templates, customizable, and battle-tested for businesses of all sizes.',
  keywords = 'website templates, company websites, business templates, landing pages, responsive templates, react templates, tailwind templates',
  image = 'https://smartlanding.com/og-image.jpg',
  url = 'https://smartlanding.com'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SmartLanding" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="SmartLanding" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@smartlanding" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SmartLanding",
          "url": url,
          "description": description,
          "logo": `${url}/logo.png`,
          "sameAs": [
            "https://twitter.com/smartlanding",
            "https://linkedin.com/company/smartlanding",
            "https://github.com/smartlanding"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@smartlanding.com",
            "contactType": "customer service"
          }
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SmartLanding Website Templates",
          "description": description,
          "brand": {
            "@type": "Brand",
            "name": "SmartLanding"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "69",
            "highPrice": "299",
            "offerCount": "50+"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000+"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;