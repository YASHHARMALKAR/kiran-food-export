import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = "Kiran Food Export — Exporting India's Finest to the World",
  description = "Kiran Food Export is a trusted India-based sourcing and export partner delivering premium Ratnagiri Alphonso mangoes, fresh produce, spices, and marine products globally.",
  canonical = "https://kiranfoodexport.com/",
  ogImage = "/favicon.png",
  keywords = "Kiran Food Export, Indian spices exporter, Ratnagiri Alphonso mangoes export, Indian fresh produce, marine products exporter, agricultural goods exporter, India food sourcing"
}) {
  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Kiran Food Export" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
