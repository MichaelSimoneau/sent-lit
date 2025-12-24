export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  subcategories: Array<{ title: string; slug: string }>;
}

export interface Attorney {
  id: string;
  name: string;
  title: string;
  slug: string;
  bio: string;
  image: string;
  practiceAreas: string[];
  education: string[];
  admissions: string[];
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  location?: string;
  sourceUrl?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export interface AIAssessment {
  caseStrength: number;
  summary: string;
  recommendedPracticeAreas: string[];
  potentialClaims: string[];
  nextSteps: string[];
  confidenceScore: number;
}

export interface AIDocumentAnalysis {
  summary: string;
  keyFindings: string[];
  recommendedActions: string[];
  confidenceScore: number;
}

export interface AILegalResearch {
  query: string;
  practiceArea: string;
  precedents: Array<{
    title: string;
    citation: string;
    summary: string;
    relevance: number;
  }>;
  summary: string;
}

export interface ConsumerInsight {
  question: string;
  answer: string;
  quickFacts?: {
    avgSettlement?: string;
    successRate?: string;
    freeConsult?: string;
  };
}
