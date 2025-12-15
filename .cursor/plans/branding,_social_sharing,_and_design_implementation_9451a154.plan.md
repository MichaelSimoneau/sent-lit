---
name: Branding, Social Sharing, and Design Implementation
overview: Implement professional branding (logo, metadata), social sharing (Open Graph, Twitter Cards), and design improvements from INSPIRATION.md and the vision plan. Transform the app from "temp_app" to a polished "Sentinel Litigation" brand presence.
todos:
  - id: logo_generation
    content: Create SVG logo component with legal symbol (shield + scales) and generate logo asset files
    status: pending
  - id: app_metadata
    content: "Update app.json: change name from 'temp_app' to 'Sentinel Litigation', add web metadata, update icons"
    status: pending
    dependencies:
      - logo_generation
  - id: seo_component
    content: Create SEOHead component for managing meta tags (title, description, Open Graph, Twitter Cards)
    status: pending
  - id: social_sharing_component
    content: Create SocialShare component with buttons for Facebook, Twitter, LinkedIn, email, copy link
    status: pending
  - id: integrate_seo
    content: Integrate SEOHead component into _layout.tsx and add page-specific meta tags to index.tsx
    status: pending
    dependencies:
      - seo_component
  - id: add_social_share_blog
    content: Add social sharing buttons to blog post pages
    status: pending
    dependencies:
      - social_sharing_component
  - id: typography_spacing
    content: Refine typography and spacing system in tailwind.config.js per INSPIRATION.md
    status: pending
  - id: component_polish
    content: Enhance Button, Card, Navigation components with better hover states, transitions, and accessibility
    status: pending
  - id: layout_improvements
    content: Improve hero, statistics, practice areas, and testimonials sections with better spacing and visual hierarchy
    status: pending
  - id: footer_enhancement
    content: Enhance Footer component with logo, better layout, and social links
    status: pending
    dependencies:
      - logo_generation
---

# Branding, Social Sharing, and Design Implementation Plan

## Overview

Transform Sentinel Litigation from a placeholder app to a professional, branded legal firm website with proper metadata, social sharing capabilities, a custom logo, and design improvements aligned with INSPIRATION.md principles.

## Phase 1: Logo Generation and Brand Assets

### 1.1 Create SVG Logo Component

**File**: `src/components/Logo.tsx`

- Create a React component that renders an SVG logo
- Design: Legal symbol combining shield and scales of justice
- Color scheme: Primary dark (#0f172a) with accent blue (#2563eb)
- Responsive sizing with props for different contexts (header, footer, favicon)
- Export as both React component and standalone SVG file

**Logo Design Elements**:

- Shield shape (protection/defense theme)
- Scales of justice integrated into shield
- "SENTINEL" text below or integrated
- Professional, minimalist aesthetic
- Works at multiple sizes (16px favicon to full header)

### 1.2 Generate Logo Assets

**Files**: `assets/logo.svg`, `assets/logo-icon.svg`, `assets/logo-wordmark.svg`

- Create multiple logo variants:
- Full logo (shield + text)
- Icon only (shield symbol)
- Wordmark only (text)
- Export optimized SVG files
- Generate PNG fallbacks at standard sizes (512x512, 256x256, 128x128, 64x64, 32x32, 16x16)

### 1.3 Update App Icons

**File**: `app.json`

- Replace placeholder icons with generated logo assets
- Update `icon`, `splash.image`, `android.adaptiveIcon.foregroundImage`
- Ensure proper sizing and format for each platform

## Phase 2: App Metadata and Branding

### 2.1 Update App Configuration

**File**: `app.json`

- Change `name` from "temp_app" to "Sentinel Litigation"
- Change `slug` from "temp_app" to "sentinel-litigation"
- Add proper `description`: "Consumer fraud protection and legal advocacy"
- Update `web` section with:
- `name`: "Sentinel Litigation"
- `shortName`: "Sentinel"
- `description`: "Leading consumer rights law firm specializing in fraud protection"
- `themeColor`: "#0f172a" (primary color)
- `backgroundColor`: "#ffffff"
- `display`: "standalone"
- `startUrl`: "/"
- `scope`: "/"
- `orientation`: "portrait"

### 2.2 Create SEO and Meta Tags Component

**File**: `src/components/SEOHead.tsx`

- Create component for managing meta tags
- Support for:
- Title tags (dynamic per page)
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- Keywords
- Accept props: `title`, `description`, `image`, `url`, `type` (article, website, etc.)

### 2.3 Integrate SEO Component

**File**: `app/_layout.tsx`

- Import and use `SEOHead` component
- Set default meta tags for the site
- Use `expo-head` or `react-helmet` for web platform
- Configure default Open Graph image (logo or hero image)

**File**: `app/index.tsx`

- Add page-specific SEO meta tags
- Title: "Sentinel Litigation | Consumer Fraud Protection"
- Description: Use HERO_CONTENT.description
- Open Graph image: Generated logo or hero screenshot

## Phase 3: Social Sharing Implementation

### 3.1 Open Graph Meta Tags

**Files**: `app/_layout.tsx`, `app/index.tsx`, and other key pages

Add Open Graph tags for:

- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Logo or hero image (1200x630px recommended)
- `og:url` - Canonical URL
- `og:type` - "website" for main pages, "article" for blog posts
- `og:site_name` - "Sentinel Litigation"
- `og:locale` - "en_US"

### 3.2 Twitter Card Tags

Add Twitter Card meta tags:

- `twitter:card` - "summary_large_image"
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Image URL (1200x630px)
- `twitter:site` - Twitter handle (if available)
- `twitter:creator` - Twitter handle (if available)

### 3.3 LinkedIn Sharing

LinkedIn uses Open Graph tags, ensure:

- Professional image (logo or hero)
- Clear, professional description
- Proper URL structure

### 3.4 Social Sharing Buttons Component

**File**: `src/components/SocialShare.tsx`

- Create reusable social sharing component
- Support for sharing to:
- Facebook
- Twitter/X
- LinkedIn
- Email
- Copy link
- Use native sharing API on mobile, web share API on web
- Accept props: `url`, `title`, `description`

### 3.5 Add Social Share to Blog Posts

**File**: `app/blog/[slug].tsx`

- Add social sharing buttons to blog post pages
- Include share buttons for Facebook, Twitter, LinkedIn
- Pre-populate with post title, description, and URL

## Phase 4: Design Improvements (INSPIRATION.md)

### 4.1 Typography System

**File**: `tailwind.config.js`

- Define typography scale:
- Headings: 2rem, 1.75rem, 1.5rem, 1.25rem, 1rem
- Body: 1rem (16px base)
- Line heights: 1.5-1.6 for body, 1.2-1.3 for headings
- Font weights: 400 (regular), 500 (medium), 700 (bold)
- Ensure minimum 16px for body text
- Add font-family configuration for serif headings

### 4.2 Spacing System

**File**: `tailwind.config.js`

- Ensure consistent spacing scale (4px base unit)
- Verify: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Apply consistent spacing in components

### 4.3 Color System Refinement

**File**: `tailwind.config.js`

- Verify color palette:
- Primary: #0f172a (slate-900)
- Accent: #2563eb (blue-600)
- Success: Green for positive actions
- Warning: Yellow/amber for cautions
- Error: Red for errors
- Neutral grays: Full slate scale
- Ensure WCAG AA contrast ratios
- Add semantic color utilities

### 4.4 Component Design Improvements

**File**: `src/components/Button.tsx`

- Enhance button styles:
- Clear hover states
- Active/pressed states
- Focus states for accessibility
- Loading states with spinner
- Disabled states with proper opacity

**File**: `src/components/Card.tsx`

- Improve card design:
- Subtle shadows for depth
- Hover effects (lift on hover)
- Better border radius
- Improved padding/spacing

**File**: `src/components/Navigation.tsx`

- Enhance navigation:
- Smooth transitions
- Better mobile menu animation
- Active state indicators
- Improved dropdown styling

### 4.5 Layout Improvements

**File**: `app/index.tsx`

- Improve hero section:
- Better visual hierarchy
- Improved spacing
- Enhanced CTA buttons
- Better AI widget integration

- Enhance statistics section:
- Animated counters (if not already)
- Better visual presentation
- Improved spacing

- Improve practice areas grid:
- Better card hover effects
- Improved spacing
- Better responsive breakpoints

- Enhance testimonials:
- Better card design
- Improved typography
- Better spacing

## Phase 5: Visual Polish

### 5.1 Add Loading States

**Files**: Various components

- Add loading spinners/skeletons
- Implement progressive loading
- Add smooth transitions

### 5.2 Improve Micro-interactions

**Files**: All interactive components

- Add hover effects
- Implement smooth transitions
- Add focus states for keyboard navigation
- Improve button press feedback

### 5.3 Responsive Design Refinement

**Files**: All page components

- Verify breakpoints:
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Ensure proper responsive behavior
- Test on multiple screen sizes

### 5.4 Accessibility Improvements

**Files**: All components

- Add ARIA labels where needed
- Ensure keyboard navigation
- Verify color contrast
- Add skip links
- Improve focus management

## Phase 6: Content and Copy Updates

### 6.1 Update Page Titles

**Files**: All page files (`app/*.tsx`)

- Update Stack.Screen title options
- Use descriptive, SEO-friendly titles
- Include "Sentinel Litigation" in titles

### 6.2 Enhance Footer

**File**: `src/components/Footer.tsx`

- Add social media links (if applicable)
- Improve layout and spacing
- Add logo
- Better organization of links

## Implementation Order

1. **Logo Generation** (Phase 1) - Foundation for branding
2. **App Metadata** (Phase 2) - Fix "temp_app" issue immediately
3. **Social Sharing** (Phase 3) - Enable sharing capabilities
4. **Design Improvements** (Phase 4) - Polish the UI
5. **Visual Polish** (Phase 5) - Refinements
6. **Content Updates** (Phase 6) - Final touches

## Technical Considerations

- Use `expo-head` or `react-helmet` for meta tags on web
- Ensure logo SVG is optimized and scalable
- Test social sharing on actual platforms
- Verify Open Graph images are properly sized
- Ensure all changes work across platforms (web, iOS, Android)
- Test responsive design at all breakpoints
- Verify accessibility with screen readers

## Success Criteria

- App title shows "Sentinel Litigation" not "temp_app"
- Logo appears in header, favicon, and social shares
- Social sharing works on Facebook, Twitter, LinkedIn
- Design follows INSPIRATION.md principles
- All pages have proper SEO meta tags
- Responsive design works across all breakpoints
- Accessibility standards met (WCAG AA minimum)