import { NavItem, PracticeArea, Attorney, Testimonial, Statistic, BlogPost } from '../types/content';

export const COMPANY_INFO = {
  name: 'Sentinel Litigation',
  tagline: 'We Are On Your Side',
  phone: '312-626-3585',
  address: {
    street: '20 S. Clark Street',
    suite: 'Suite 1800',
    city: 'Chicago',
    state: 'IL',
    zip: '60603',
  },
  email: 'info@sentinellitigation.com', // Placeholder
  mapUrl: 'https://maps.google.com/?q=20+S+Clark+St+Suite+1800+Chicago+IL+60603',
};

export const HERO_CONTENT = {
  main: 'SENTINELS FOR JUSTICE',
  subheading: 'We Are On Your Side',
  description: 'When you retain Sentinel Litigation, you are retaining one of the leading firms practicing in the area of consumer rights. Specializing in cases where individuals, families, and entities have been defrauded.',
  ctaPrimary: 'Get Instant Case Assessment',
  ctaSecondary: 'Call Us Today!',
};

export const STATISTICS: Statistic[] = [
  { id: '1', value: '200', label: 'Years of Combined Experience', suffix: '+' },
  { id: '2', value: '500', label: 'Million Recovered for Consumers', suffix: 'M+' },
  { id: '3', value: '9', label: 'Knowledgeable Attorneys', suffix: '' },
  { id: '4', value: '2', label: 'Minutes for AI Case Assessment', suffix: '<' }, // AI Feature
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'credit-reporting',
    title: 'Credit Reporting',
    slug: 'credit-reporting',
    icon: 'credit-card',
    shortDescription: 'Dispute errors and fight identity theft on your credit report.',
    fullDescription: 'Errors on credit reports can be devastating. We help you correct them and seek compensation.',
    subcategories: [
      { title: 'Credit Reporting Errors', slug: 'errors' },
      { title: 'Identity Theft', slug: 'identity-theft' },
      { title: 'Your Credit Reporting Rights', slug: 'rights' },
    ],
  },
  {
    id: 'debt-collection',
    title: 'Debt Collection Rights',
    slug: 'debt-collection-rights',
    icon: 'shield',
    shortDescription: 'Stop harassment and illegal debt collection practices.',
    fullDescription: 'We protect consumers from abusive, deceptive, and unfair debt collection practices.',
    subcategories: [
      { title: 'Harassed by a Debt Collector?', slug: 'harassment' },
      { title: 'Sued by a Debt Buyer?', slug: 'sued' },
      { title: 'Judgment Settlements', slug: 'settlements' },
    ],
  },
  {
    id: 'debt-relief',
    title: 'Debt Relief',
    slug: 'debt-relief',
    icon: 'life-buoy',
    shortDescription: 'Legal solutions for overwhelming debt.',
    fullDescription: 'Explore your legal options for relief from unmanageable debt.',
    subcategories: [],
  },
  {
    id: 'telemarketing',
    title: 'Telemarketing Abuse',
    slug: 'telemarketing-abuse',
    icon: 'phone-off',
    shortDescription: 'Stop unwanted calls and texts.',
    fullDescription: 'Fight back against illegal robocalls, spam texts, and telemarketing harassment.',
    subcategories: [],
  },
  {
    id: 'employment',
    title: 'Employment Law',
    slug: 'employment-law',
    icon: 'briefcase',
    shortDescription: 'Protect your rights in the workplace.',
    fullDescription: 'We handle cases involving unpaid wages, background check errors, and more.',
    subcategories: [
      { title: 'Unfair Business Practices', slug: 'unfair-practices' },
      { title: 'Employment Background Check Errors', slug: 'background-checks' },
      { title: 'Unpaid Overtime & Other Wages', slug: 'unpaid-wages' },
      { title: 'Illinois Biometric Privacy Act (BIPA)', slug: 'bipa' },
    ],
  },
  {
    id: 'mortgage',
    title: 'Mortgage & Housing',
    slug: 'mortgage-housing',
    icon: 'home',
    shortDescription: 'Defend your home and tenant rights.',
    fullDescription: 'Assistance with foreclosures, loan modifications, and landlord disputes.',
    subcategories: [
      { title: 'Loan Modifications', slug: 'modifications' },
      { title: 'Mortgage Foreclosures', slug: 'foreclosures' },
      { title: 'Problems with Landlords', slug: 'landlords' },
    ],
  },
  {
    id: 'auto',
    title: 'Unfair Auto Financing',
    slug: 'unfair-auto-financing',
    icon: 'car',
    shortDescription: 'Fight predatory auto lending and sales.',
    fullDescription: 'We take on dealerships and lenders for unfair financing and sales practices.',
    subcategories: [],
  },
  {
    id: 'student-loans',
    title: 'Student Loan Debt',
    slug: 'student-loan-debt',
    icon: 'book',
    shortDescription: 'Navigating student loan disputes and fraud.',
    fullDescription: 'Legal help for issues with student loan servicers and predatory schools.',
    subcategories: [],
  },
  {
    id: 'banking',
    title: 'Banking Fraud Claims',
    slug: 'banking-fraud',
    icon: 'landmark',
    shortDescription: 'Recover funds lost to banking fraud.',
    fullDescription: 'We represent victims of unauthorized transfers and other banking fraud.',
    subcategories: [],
  },
  {
    id: 'biometric',
    title: 'Biometric Privacy',
    slug: 'biometric-privacy',
    icon: 'fingerprint',
    shortDescription: 'Protect your biometric data rights.',
    fullDescription: 'Litigation under BIPA for unauthorized collection of biometric data.',
    subcategories: [],
  },
  {
    id: 'repossession',
    title: 'Repossession',
    slug: 'repossession',
    icon: 'truck',
    shortDescription: 'Wrongful vehicle repossession defense.',
    fullDescription: 'Did they take your car illegally? We can help get it back or seek damages.',
    subcategories: [],
  },
  {
    id: 'others',
    title: 'Other',
    slug: 'other-claims',
    icon: 'help-circle',
    shortDescription: 'Other consumer fraud claims.',
    fullDescription: 'We handle a wide variety of consumer fraud cases beyond those listed.',
    subcategories: [],
  },
];

export const NAVIGATION: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'Firm Overview',
    href: '/firm-overview',
    children: [
      { title: 'Class Notices', href: '/firm-overview/class-notices' },
      { title: 'Case Results', href: '/firm-overview/case-results' },
      { title: 'Testimonials', href: '/firm-overview/testimonials' },
    ],
  },
  {
    title: 'Practice Areas',
    href: '/practice-areas',
    children: PRACTICE_AREAS.map(area => ({ title: area.title, href: `/practice-areas/${area.slug}` })),
  },
  { title: 'Attorneys', href: '/attorneys' },
  {
    title: 'Resources',
    href: '/resources',
    children: [
      { title: 'Potential Claims You May Have', href: '/resources/potential-claims' },
      { title: 'Pay Online', href: '/resources/pay-online' },
    ],
  },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

export const ATTORNEYS: Attorney[] = [
  {
    id: '1',
    name: 'Daniel A. Edelman',
    title: 'Founding Partner',
    slug: 'daniel-a-edelman',
    bio: 'An experienced consumer rights advocate...',
    image: '/assets/placeholder-attorney.png',
    practiceAreas: ['credit-reporting', 'debt-collection'],
    education: ['J.D., University of Chicago'],
    admissions: ['Illinois', 'U.S. Supreme Court'],
    phone: '312-626-3585',
    email: 'dedelman@sentinellitigation.com',
  },
  // Add other attorneys as needed based on competitor copy
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'I highly recommend Sentinel Litigation! I was referred to them by my local attorney who said they were the best...',
    author: 'Sandra Ellinger',
    rating: 5,
  },
  {
    id: '2',
    quote: 'This law firm went above and beyond. I had a problem with a contractor who did not complete the contracted services...',
    author: 'Brenda McGee',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Always willing to help people and answer their questions. I have known this Law Firm for a long time...',
    author: 'Tina Adams',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Sentinel Litigation helped me recover damages from a fraudulent debt collection company. Their expertise in consumer protection law is unmatched, and they fought tirelessly for my rights.',
    author: 'Michael Chen',
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Your Rights Under the FDCPA',
    slug: 'understanding-fdcpa-rights',
    excerpt: 'Debt collectors cannot harass you. Learn what actions are prohibited under federal law.',
    content: 'Full content here...',
    author: 'Daniel A. Edelman',
    date: '2023-10-15',
    category: 'Debt Collection',
  },
  {
    id: '2',
    title: 'Class Action Lawsuit Filed Against Major Auto Lender',
    slug: 'auto-lender-class-action',
    excerpt: 'Sentinel Litigation has filed a class action alleging unfair lending practices.',
    content: 'Full content here...',
    author: 'Sentinel Team',
    date: '2023-11-02',
    category: 'Auto Fraud',
  },
  {
    id: '3',
    title: 'How to Dispute Credit Report Errors',
    slug: 'dispute-credit-errors',
    excerpt: 'A step-by-step guide to correcting inaccurate information on your credit report.',
    content: 'Full content here...',
    author: 'Daniel A. Edelman',
    date: '2023-09-20',
    category: 'Credit Reporting',
  },
];
