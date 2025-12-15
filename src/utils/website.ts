/**
 * Get the current website URL from the window object
 * Returns either https://sentinellegal.us or https://sentinelfirm.us
 */
export function getWebsiteUrl(): string {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Check if we're on sentinellegal.us
    if (hostname.includes('sentinellegal.us')) {
      return 'https://sentinellegal.us';
    }
    
    // Check if we're on sentinelfirm.us
    if (hostname.includes('sentinelfirm.us')) {
      return 'https://sentinelfirm.us';
    }
    
    // Default fallback (for localhost/dev)
    return 'https://sentinellegal.us';
  }
  
  // Server-side or non-web environment fallback
  return 'https://sentinellegal.us';
}

/**
 * Get the website domain (without protocol)
 */
export function getWebsiteDomain(): string {
  if (typeof window !== 'undefined') {
    return window.location.hostname;
  }
  return 'sentinellegal.us';
}

