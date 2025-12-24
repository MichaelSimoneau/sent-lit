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
  email: 'info@sentinellegal.us', // Updated domain
  mapUrl: 'https://maps.google.com/?q=20+S+Clark+St+Suite+1800+Chicago+IL+60603',
};

export const HERO_CONTENT = {
  main: 'SENTINELS FOR JUSTICE',
  subheading: 'We Are On Your Side',
  description: 'Founded by David Rodriguez, a professor at DePaul University College of Law in Chicago, Sentinel Litigation is one of the leading firms practicing in the area of consumer rights. When you retain Sentinel Litigation, you are retaining a firm that specializes in cases where individuals, families, and entities have been defrauded or are victims of consumer fraud.',
  founder: 'David Rodriguez, Founding Attorney & DePaul Law Professor',
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
    name: 'David Rodriguez',
    title: 'Founding Attorney & DePaul Law Professor',
    slug: 'david-rodriguez',
    bio: 'David Rodriguez is the founding attorney of Sentinel Litigation and a professor at DePaul University College of Law in Chicago. Combining his academic expertise with practical legal experience, David is dedicated to protecting consumers from fraud, deception, and unfair practices. As both an educator and practitioner, he brings a unique perspective to consumer rights law, specializing in cases where individuals, families, and entities have been defrauded or are victims of consumer fraud. His dual role as a law professor and practicing attorney allows him to stay at the forefront of legal developments while directly helping those who need it most. David\'s commitment to consumer protection extends beyond the courtroom—through his teaching at DePaul, he educates the next generation of attorneys about the importance of protecting consumer rights and fighting corporate abuse.',
    image: '/assets/placeholder-attorney.png',
    practiceAreas: ['credit-reporting', 'debt-collection', 'auto', 'telemarketing', 'banking'],
    education: ['J.D., DePaul University College of Law'],
    admissions: ['Illinois', 'U.S. Supreme Court'],
    phone: '312-626-3585',
    email: 'drodriguez@sentinellegal.us',
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
  {
    id: '5',
    quote: 'Working with David Rodriguez reminds me of Tom Hagen, the consigliere from The Godfather—calm, strategic, and absolutely unshakeable when protecting his clients. Like Hagen served the Corleone family with unwavering loyalty and legal brilliance, David protects consumers with the same level of dedication and expertise. He\'s the kind of attorney you want in your corner when facing down powerful corporations.',
    author: 'Michael Simoneau',
    rating: 5,
    sourceUrl: 'https://MichaelSimoneau.com/#testimonials',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Your Rights Under the FDCPA',
    slug: 'understanding-fdcpa-rights',
    excerpt: 'Debt collectors cannot harass you. Learn what actions are prohibited under federal law.',
    content: `The Fair Debt Collection Practices Act (FDCPA) is a federal law that protects consumers from abusive, deceptive, and unfair debt collection practices. As a consumer protection attorney and professor at DePaul University College of Law, I see firsthand how many consumers are unaware of their rights under this important legislation.

## What is the FDCPA?

Enacted in 1977, the FDCPA applies to third-party debt collectors—companies that collect debts on behalf of others. The law prohibits a wide range of abusive practices and gives consumers specific rights when dealing with debt collectors.

## Prohibited Conduct

Debt collectors cannot:

- **Harass or abuse you**: This includes threats of violence, use of obscene language, publishing your name on a "bad debt" list, or repeatedly calling to annoy you.

- **Use false or misleading statements**: Collectors cannot misrepresent the amount you owe, claim to be attorneys if they're not, or threaten actions they cannot legally take.

- **Engage in unfair practices**: This includes collecting fees not authorized by your original contract, depositing post-dated checks early, or contacting you at inconvenient times or places (generally before 8 a.m. or after 9 p.m.).

## Your Rights Under the FDCPA

1. **Right to request validation**: Within 5 days of first contact, debt collectors must send you a written notice detailing the debt amount, the creditor's name, and your right to dispute the debt. You have 30 days to request verification.

2. **Right to stop contact**: You can send a written letter telling the collector to stop contacting you (though they can still contact you to confirm they've stopped or to notify you of legal action).

3. **Right to dispute the debt**: You can challenge the validity of the debt, and the collector must verify it before continuing collection efforts.

## What to Do If Your Rights Are Violated

If a debt collector violates the FDCPA, you may be entitled to:

- Actual damages you suffered
- Up to $1,000 in statutory damages
- Attorney's fees and costs

Keep detailed records of all communications, including dates, times, and what was said. Document any violations, and contact an experienced consumer protection attorney immediately.

At Sentinel Litigation, we regularly help consumers hold debt collectors accountable for FDCPA violations. If you believe your rights have been violated, contact us for a free consultation.`,
    author: 'David Rodriguez',
    date: '2023-10-15',
    category: 'Debt Collection',
  },
  {
    id: '2',
    title: 'Class Action Lawsuit Filed Against Major Auto Lender',
    slug: 'auto-lender-class-action',
    excerpt: 'Sentinel Litigation has filed a class action alleging unfair lending practices.',
    content: `Sentinel Litigation, under the leadership of founding attorney David Rodriguez, has recently filed a class action lawsuit against a major auto lender alleging deceptive lending practices and violations of consumer protection laws.

## The Allegations

The lawsuit alleges that the lender engaged in several unlawful practices:

- **Deceptive advertising**: Misrepresenting interest rates and loan terms in advertisements
- **Unfair pricing**: Charging higher interest rates to consumers based on protected characteristics
- **Hidden fees**: Failing to disclose additional fees and charges in loan documentation
- **Aggressive repossession practices**: Repossessing vehicles without proper notice or in violation of state laws

## Why Class Actions Matter

Class action lawsuits are a crucial tool for protecting consumer rights, especially when individual claims might be too small to pursue individually. By combining many small claims into one case, class actions:

- Make it economically feasible to hold large corporations accountable
- Deter future misconduct by other companies
- Provide compensation to consumers who might not otherwise seek legal help
- Create precedents that protect all consumers

## The Impact

This case highlights the importance of consumer protection laws and demonstrates Sentinel Litigation's commitment to fighting for consumer rights. As a firm that specializes in consumer fraud cases, we understand the devastating impact that unfair lending practices can have on individuals and families.

## What This Means for Consumers

If you've been affected by similar practices from any auto lender, you may have legal rights. Common warning signs include:

- Interest rates that don't match what was advertised
- Surprise fees on your loan documents
- Aggressive collection tactics
- Repossession without proper notice

Contact Sentinel Litigation today for a free consultation to discuss your potential case. Our AI-powered case assessment tool can provide an immediate preliminary evaluation of your situation.`,
    author: 'Sentinel Team',
    date: '2023-11-02',
    category: 'Auto Fraud',
  },
  {
    id: '3',
    title: 'How to Dispute Credit Report Errors',
    slug: 'dispute-credit-errors',
    excerpt: 'A step-by-step guide to correcting inaccurate information on your credit report.',
    content: `Errors on your credit report can significantly impact your ability to secure loans, obtain favorable interest rates, or even get approved for housing. As someone who has worked extensively in consumer protection law, both as a practicing attorney and as a professor at DePaul University College of Law, I've seen how credit reporting errors can devastate people's financial lives.

## Why Credit Report Errors Matter

Your credit report is used by lenders, landlords, employers, and insurers to assess your financial reliability. Errors can:

- Lower your credit score
- Cause loan denials or higher interest rates
- Affect employment opportunities
- Impact insurance premiums

## Common Types of Errors

- **Identity errors**: Accounts that don't belong to you, incorrect personal information
- **Reporting errors**: Accounts reported as open when closed, incorrect payment history
- **Data management errors**: Duplicate accounts, accounts appearing multiple times
- **Balance errors**: Incorrect account balances or credit limits

## Step-by-Step Dispute Process

### Step 1: Get Your Free Credit Reports

You're entitled to one free credit report annually from each of the three major credit bureaus (Equifax, Experian, and TransUnion) at annualcreditreport.com. Review all three reports carefully, as they may contain different information.

### Step 2: Document the Errors

Make copies of your credit reports and clearly mark the errors. Gather any supporting documentation (account statements, payment records, etc.) that proves the error.

### Step 3: File a Dispute

You can dispute errors:

- **Online**: Through each credit bureau's website (fastest method)
- **By mail**: Send a certified letter with return receipt requested
- **By phone**: Call the credit bureau directly

### Step 4: Dispute with the Furnisher

Also contact the company that provided the incorrect information (the "furnisher"), such as the creditor or debt collector. They have a legal obligation to investigate and correct errors.

### Step 5: Follow Up

The credit bureau has 30 days to investigate your dispute. They must notify you of the results in writing. If the dispute is resolved in your favor, request that the credit bureau notify anyone who recently received your credit report.

## When Disputes Don't Work

If a credit bureau or furnisher fails to correct an error after a proper dispute, you may have legal claims under the Fair Credit Reporting Act (FCRA). You may be entitled to:

- Actual damages
- Statutory damages of $100 to $1,000
- Punitive damages for willful violations
- Attorney's fees and costs

## Legal Help Available

At Sentinel Litigation, we regularly help consumers resolve credit report errors and pursue FCRA claims when credit bureaus or furnishers fail to correct errors. If you've been unable to resolve credit report errors through the dispute process, contact us for a free consultation.

Remember: Your credit report is one of your most important financial assets. Don't let errors go uncorrected.`,
    author: 'David Rodriguez',
    date: '2023-09-20',
    category: 'Credit Reporting',
  },
];
