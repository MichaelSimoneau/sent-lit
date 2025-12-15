import React from 'react';
import Head from 'expo-router/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({ 
  title = 'Sentinel Litigation | Consumer Fraud Protection', 
  description = 'Leading consumer rights law firm specializing in fraud protection.', 
  image = '/assets/icon.png', // Fallback or absolute URL
  url = 'https://sentinel-litigation.web.app',
  type = 'website' 
}: SEOHeadProps) => {
  const fullTitle = title.includes('Sentinel') ? title : `${title} | Sentinel Litigation`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sentinel Litigation" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

