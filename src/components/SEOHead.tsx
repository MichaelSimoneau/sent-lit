import React from 'react';
import Head from 'expo-router/head';
import { Platform } from 'react-native';
import { getWebsiteUrl } from '../utils/website';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

// Helper to truncate description for social media (max 200 chars recommended)
const truncateDescription = (desc: string, maxLength: number = 200): string => {
  if (desc.length <= maxLength) return desc;
  return desc.substring(0, maxLength - 3).trim() + '...';
};

export const SEOHead = ({ 
  title = 'Sentinel Litigation | Consumer Fraud Protection', 
  description = 'Leading consumer rights law firm specializing in fraud protection.', 
  image = '/assets/icon.png',
  url,
  type = 'website' 
}: SEOHeadProps) => {
  const baseUrl = getWebsiteUrl();
  
  // Construct full URL - use provided URL or construct from current pathname
  let fullUrl: string;
  if (url) {
    // If URL is provided, use it (assuming it's already absolute or relative)
    fullUrl = url.startsWith('http') ? url : `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
  } else if (Platform.OS === 'web' && typeof window !== 'undefined') {
    // Use current pathname if no URL provided
    fullUrl = `${baseUrl}${window.location.pathname}`;
  } else {
    // Fallback to base URL
    fullUrl = baseUrl;
  }
  
  // Convert image to absolute URL if it's a relative path
  let imageUrl: string;
  if (image) {
    if (image.startsWith('http://') || image.startsWith('https://')) {
      // Already absolute URL
      imageUrl = image;
    } else {
      // Relative path - make it absolute
      imageUrl = `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`;
    }
  } else {
    // Default image
    imageUrl = `${baseUrl}/assets/icon.png`;
  }
  
  const fullTitle = title.includes('Sentinel') ? title : `${title} | Sentinel Litigation`;
  // Truncate descriptions for optimal social media display
  const metaDescription = truncateDescription(description, 160); // Meta description limit
  const ogDescription = truncateDescription(description, 200); // Open Graph limit
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sentinel Litigation" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Head>
  );
};

