---
name: Vision and Copy Implementation Plan with AI
overview: "Transform Sentinel Litigation app with competitor content structure, enhanced with Google Gemini AI services to provide capabilities the competitor lacks: AI case assessment, intelligent document analysis, legal research assistance, and automated client communication."
todos: []
---

# Vision and Copy Implementation Plan with AI Integration

## Overview

Transform the Sentinel Litigation Expo app by adopting the proven content structure from Edelman Combs Latturner & Goodwin (ECLG) while implementing superior functionality powered by Google Gemini AI. The goal is to exceed competitor capabilities with AI-enhanced features that provide real value to clients, positioning Sentinel Litigation as the most technologically advanced consumer protection firm.

## Key Findings from Competitor Analysis

### Content Structure (from competitor_copy.txt)

- **Hero Section**: "ADVOCATES FOR CONSUMERS We Are On Your Side" - clear value proposition
- **Tagline**: "Call Us Today! 312-626-3585" - prominent phone display
- **Main Copy**: "Chicago Consumer Protection Attorneys - Consumer Law Attorneys Advocating for Your Rights"
- **Key Messaging**: 
  - "No matter where you live or what you do, you are a consumer in some regard"
  - "Having an experienced and aggressive Chicago consumer protection attorney by your side can make all the difference"
  - "Over 200 Years of Combined Experience"
  - "$500 Million Recovered for Consumers"
  - "9 Knowledgeable Attorneys"
  - "No Fees Unless We Recover Compensation for You"
- **Practice Areas**: 11 main areas with detailed subcategories
- **Free Consultation Form**: 2-step form (Step 1: First Name, Last Name, Email | Step 2: Phone, City, State, Adverse Party Name, Brief Summary 275 chars)
- **Services Listed**: Legal advice, Representation in court, Negotiations, Filing complaints, Litigation

### Sentinel Litigation Unique Positioning (from README.md)

- **Brand Identity**: "Bold without being brash or ostentatious, subtly aggressive"
- **Intellectual Positioning**: "Intellectually akin to Gore Vidal and Herbert Marcuse"
- **Experience Positioning**: "As experienced as a tranny hooker at 4 am on a Monday night"
- **Specialization**: Consumer fraud, defrauded persons/families/entities
- **Unique Expertise**: Arbitration clause loopholes, small claims actions, quasi-class actions
- **Scope**: Everything except criminal matters, both state and federal court

### Competitive Advantages Through AI

**What Competitor Lacks**: No AI services, basic forms, static content, manual processes

**What We'll Offer**:

1. **AI Case Assessment**: Instant preliminary case evaluation
2. **AI Document Analysis**: Upload documents for instant review
3. **AI Legal Research**: Real-time legal precedent search
4. **AI Form Assistance**: Smart form completion with context awareness
5. **AI Communication**: Automated but personalized client updates
6. **AI Content Generation**: Dynamic, personalized content
7. **AI Translation**: Multi-language support (Spanish, etc.)
8. **AI Outcome Prediction**: Data-driven case success probability

## Implementation Plan

### Phase 1: Content Structure & Constants with AI Context

#### 1.1 Create Content Constants File

**File**: `src/constants/content.ts`

- Extract competitor copy from `competitor_copy.txt` and adapt for Sentinel Litigation
- Practice areas with full descriptions (all 11 from competitor)
- Hero copy: "SENTINELS FOR JUSTICE - We Are On Your Side" (adaptation of competitor's "ADVOCATES FOR CONSUMERS")
- Subheading: "When you retain Sentinel Litigation, you are retaining one of the leading firms practicing in the area of consumer rights. Specializing in cases where individuals, families, and entities have been defrauded."
- Statistics: Adapt competitor's metrics (200+ years, $500M+ recovered, etc.)
- Attorney bio placeholders
- Testimonials structure
- Navigation structure matching competitor
- Form field labels matching competitor's 2-step form structure
- AI service descriptions and CTAs

#### 1.2 Create Type Definitions

**File**: `src/types/content.ts`

- `PracticeArea` type with subcategories
- `Attorney` type
- `Testimonial` type
- `FormStep` type
- `BlogPost` type
- `CaseStatus` type
- `AIAssessment` type (NEW)
- `AIDocumentAnalysis` type (NEW)
- `AILegalResearch` type (NEW)

### Phase 2: Google Gemini AI Integration

#### 2.1 Install Gemini AI SDK

**File**: `package.json`

- Add `@google/generative-ai` package
- Configure API key management via environment variables

#### 2.2 Create AI Service Layer

**File**: `src/services/ai/gemini.ts`

- Initialize Gemini client
- Create service functions:
  - `assessCase(description: string): Promise<AIAssessment>`
  - `analyzeDocument(document: File): Promise<DocumentAnalysis>`
  - `researchLegalPrecedent(query: string, practiceArea: string): Promise<LegalResearch>`
  - `generateFormSuggestions(context: FormContext): Promise<FormSuggestions>`
  - `translateContent(text: string, targetLang: string): Promise<string>`
  - `generatePersonalizedContent(userContext: UserContext): Promise<Content>`

#### 2.3 Create AI Configuration

**File**: `src/config/ai.ts`

- Gemini model selection (gemini-pro for text, gemini-pro-vision for documents)
- Prompt templates for each AI service
- Safety settings and content filtering
- Rate limiting configuration

### Phase 3: Enhanced Navigation System with AI Search

#### 3.1 Update Navigation Component

**File**: `src/components/Navigation.tsx`

- Implement competitor's navigation structure:
  - Home
  - Firm Overview (dropdown: Class Notices, Case Results, Testimonials)
  - Practice Areas (mega-menu with all 11 areas)
  - Attorneys
  - Resources (Potential Claims, Pay Online)
  - Blog
  - Contact
- **AI-Enhanced Search Bar** (NEW - competitor doesn't have this):
  - Natural language queries ("I was harassed by a debt collector")
  - AI-powered intent recognition
  - Suggests relevant practice areas
  - Provides instant answers using Gemini
  - Keyboard shortcut: Cmd/Ctrl+K
- Mobile gesture navigation
- "Ask AI" floating button for quick access

#### 3.2 Create AI Search Component

**File**: `src/components/AISearch.tsx`

- Natural language input
- Real-time AI suggestions
- Context-aware results
- Practice area recommendations
- Related content suggestions

### Phase 4: AI-Enhanced Home Page

#### 4.1 Update Home Page Hero

**File**: `app/index.tsx`

- Hero copy adapted from competitor:
  - Main: "SENTINELS FOR JUSTICE"
  - Subheading: "We Are On Your Side"
  - Description: "When you retain Sentinel Litigation, you are retaining one of the leading firms practicing in the area of consumer rights. Specializing in cases where individuals, families, and entities have been defrauded."
- Prominent phone: "Call Us Today! [Phone]" (matching competitor)
- **AI Case Assessment Widget** (NEW - competitor doesn't have):
  - "Get Instant Case Assessment" button
  - Opens AI chatbot for preliminary evaluation
  - Shows estimated case strength
  - Recommends next steps
- Animated statistics (200+ years, $500M+ recovered, etc.)
- Video background option

#### 4.2 Add AI-Powered Practice Areas Preview

- Grid showing 6 main practice areas
- **AI Hover Feature** (NEW):
  - Hover reveals AI-generated case examples
  - Shows success probability for that area
  - Displays relevant legal precedents

#### 4.3 Add Team Preview with AI Credentials

- Attorney cards
- **AI-Enhanced Bios** (NEW):
  - AI-generated practice area expertise highlights
  - Success rate calculations
  - Relevant case experience summaries

### Phase 5: AI-Enhanced Progressive Consultation Form

#### 5.1 Create Multi-Step Form with AI Assistance

**File**: `src/components/ConsultationForm.tsx`

- **Step 1**: Personal Information (matching competitor)
  - First Name, Last Name, Email
  - Real-time email validation
  - Phone with auto-formatting
  - **AI Auto-Fill** (NEW): Detects returning users, suggests saved info
- **Step 2**: Case Details (matching competitor structure)
  - City, State (with AI-powered autocomplete)
  - Adverse Party Name
  - Brief Summary (275 character limit, matching competitor)
  - Additional Information (optional)
  - **AI Real-Time Assistance** (NEW - competitor doesn't have):
    - As user types summary, AI suggests relevant practice areas
    - Provides character count optimization suggestions
    - Flags potential legal issues
    - Suggests additional details to include
- **Step 3**: AI Case Assessment (NEW - exceeds competitor)
  - Instant AI analysis of submitted information
  - Shows preliminary case strength (1-10 scale)
  - Identifies potential legal claims
  - Recommends relevant practice areas
  - Suggests next steps
  - Generates case summary for attorney review
- **Step 4**: Review & Submit
  - Summary with AI-generated insights
  - Edit capability
  - Privacy policy acceptance
- Features exceeding competitor:
  - Auto-save with AI-powered resume suggestions
  - Progress indicator with AI time estimate
  - Smart field suggestions powered by Gemini
  - Full accessibility support

#### 5.2 Create AI Form Assistant Component

**File**: `src/components/AIFormAssistant.tsx`

- Floating assistant widget
- Context-aware help
- Real-time suggestions
- Practice area recommendations
- Legal terminology explanations

### Phase 6: AI-Enhanced Practice Areas Pages

#### 6.1 Create Practice Areas Index with AI

**File**: `app/practice-areas/index.tsx`

- All 11 practice areas from competitor:

  1. Credit Reporting (Credit Reporting Errors, Identity Theft, Your Credit Reporting Rights)
  2. Debt Collection Rights (Harassed by a Debt Collector?, Sued by a Debt Buyer?, Judgment Settlements)
  3. Debt Relief
  4. Telemarketing Abuse
  5. Employment Law (Unfair Business Practices, Employment Background Check Errors, Unpaid Overtime & Other Wages, Illinois Biometric Privacy Act BIPA)
  6. Mortgage & Housing (Loan Modifications, Mortgage Foreclosures, Problems with Landlords)
  7. Unfair Auto Financing
  8. Student Loan Debt
  9. Banking Fraud Claims
  10. Biometric Privacy
  11. Repossession

- **AI-Powered Filter** (NEW):
  - "Describe your issue" natural language input
  - AI matches to practice areas
  - Shows confidence score
- "How Can We Help You?" section with AI chat

#### 6.2 Create Individual Practice Area Pages with AI

**File**: `app/practice-areas/[slug].tsx`

- Full description adapted from competitor copy
- Subcategories with expandable sections
- **AI Case Analyzer** (NEW - competitor doesn't have):
  - Upload documents related to this practice area
  - Get instant AI analysis
  - Identify potential violations
  - Estimate case strength
- **AI FAQ Generator** (NEW):
  - Dynamic FAQ based on common questions
  - AI answers with citations
  - Related questions suggestions
- Related cases/results
- "Schedule Consultation" CTA with pre-filled practice area

### Phase 7: AI-Powered Potential Claims Assessment

#### 7.1 Create AI Case Assessment Page

**File**: `app/resources/potential-claims.tsx`

- **Interactive AI Questionnaire** (NEW - competitor has static page):
  - Natural language conversation interface
  - AI asks follow-up questions based on responses
  - Uses Gemini to understand context
  - Provides real-time assessment
- **AI Document Upload** (NEW):
  - Upload relevant documents (contracts, letters, etc.)
  - AI analyzes for potential violations
  - Extracts key information
  - Identifies relevant laws
- Results with:
  - AI-generated case strength score
  - Recommended practice areas
  - Potential legal claims identified
  - Estimated timeline
  - Next steps recommendations
- Export assessment as PDF

#### 7.2 Create AI Chatbot Component

**File**: `src/components/AICaseChatbot.tsx`

- Conversational interface powered by Gemini
- Context-aware responses
- Legal disclaimer integration
- Practice area routing
- Consultation scheduling integration

### Phase 8: AI-Enhanced Firm Overview

#### 8.1 Create Firm Overview Page

**File**: `app/firm-overview/index.tsx`

- Adapt competitor copy: "A Consumer Law Team To Count On - Over 200 Years of Combined Experience"
- Statistics section with animated counters
- **AI-Powered "What Sets Us Apart"** (NEW):
  - Dynamic content generation
  - Personalized based on visitor behavior
  - AI highlights unique differentiators
- Values and mission
- Emphasis on arbitration loophole expertise (unique to Sentinel)

#### 8.2 Create Case Results with AI Analysis

**File**: `app/firm-overview/case-results.tsx`

- Grid of case results
- **AI Case Pattern Analysis** (NEW):
  - AI identifies patterns in successful cases
  - Shows success rates by practice area
  - Predicts similar case outcomes
- Search and filter
- Case detail modals with AI-generated insights

### Phase 9: AI-Enhanced Blog System

#### 9.1 Create Blog Index with AI

**File**: `app/blog/index.tsx`

- Recent posts grid
- Filter by year/month (matching competitor structure)
- **AI Content Recommendations** (NEW):
  - Personalized article suggestions
  - "Articles relevant to your case" section
  - AI-generated summaries
- Search with AI understanding

#### 9.2 Create Blog Post with AI Features

**File**: `app/blog/[slug].tsx`

- Full post content
- **AI Reading Assistant** (NEW):
  - Summarize article
  - Explain legal terms
  - Answer questions about content
- Related posts (AI-powered)
- Share functionality
- Comments with AI moderation

#### 9.3 Create AI Blog Content Generator (Admin)

**File**: `app/blog/admin/ai-generator.tsx`

- AI-powered blog post generation
- Topic suggestions
- SEO optimization
- Legal accuracy checking
- Multi-language generation

### Phase 10: AI Client Portal

#### 10.1 Create AI-Enhanced Client Portal

**File**: `app/portal/index.tsx`

- Case status dashboard
- **AI Case Updates** (NEW - competitor doesn't have portal):
  - Natural language case summaries
  - AI-generated progress explanations
  - Predictive timeline updates
- Document upload with AI analysis
- **AI Document Assistant** (NEW):
  - "What does this document mean?" feature
  - Key point extraction
  - Action item identification
- Secure messaging with AI summaries
- Calendar/appointments
- Payment history
- **AI Legal Research Assistant** (NEW):
  - Ask questions about your case
  - Get relevant legal precedents
  - Understand legal terminology

### Phase 11: AI Communication Services

#### 11.1 Create AI Email Service

**File**: `src/services/ai/communication.ts`

- Automated but personalized client updates
- AI-generated case status emails
- Natural language explanations
- Multi-language support
- Tone matching (professional but accessible)

#### 11.2 Create AI Notification System

**File**: `src/services/ai/notifications.ts`

- Smart notification timing
- Personalized message content
- Priority assessment
- Channel optimization (email, SMS, push)

### Phase 12: Enhanced Components with AI

#### 12.1 Create AI Case Assessment Widget

**File**: `src/components/AICaseAssessment.tsx`

- Quick assessment interface
- File upload capability
- Real-time analysis
- Results visualization
- CTA to full consultation

#### 12.2 Create AI Document Analyzer

**File**: `src/components/AIDocumentAnalyzer.tsx`

- Document upload interface
- Progress indicator
- Analysis results display
- Key findings highlight
- Export functionality

#### 12.3 Create AI Legal Research Component

**File**: `src/components/AILegalResearch.tsx`

- Query input
- Research results
- Citation formatting
- Relevance scoring
- Related cases

#### 12.4 Create AI Translation Component

**File**: `src/components/AITranslator.tsx`

- Multi-language support
- Real-time translation
- Legal terminology accuracy
- Context preservation

### Phase 13: Firebase Integration with AI

#### 13.1 Create Consultation Service with AI

**File**: `src/services/consultation.ts`

- Submit form to Firestore
- Trigger AI assessment
- Generate case reference
- AI-powered email notifications
- Admin dashboard with AI insights

#### 13.2 Create AI Analytics Service

**File**: `src/services/ai/analytics.ts`

- Case pattern analysis
- Success prediction
- Client behavior insights
- Content performance analysis
- Practice area trends

### Phase 14: Content Adaptation from Competitor

#### 14.1 Hero Section Copy (Adapted)

- **Competitor**: "ADVOCATES FOR CONSUMERS We Are On Your Side"
- **Sentinel**: "SENTINELS FOR JUSTICE - We Are On Your Side"
- **Subheading**: "When you retain Sentinel Litigation, you are retaining one of the leading firms practicing in the area of consumer rights. Specializing in cases where individuals, families, and entities have been defrauded."

#### 14.2 Main Content Copy (Adapted)

- **Competitor**: "No matter where you live or what you do, you are a consumer in some regard..."
- **Sentinel**: Adapt with emphasis on fraud specialization and arbitration expertise
- **Competitor**: "Having an experienced and aggressive Chicago consumer protection attorney..."
- **Sentinel**: "Having an experienced, intellectually rigorous, and subtly aggressive attorney..."

#### 14.3 Practice Area Descriptions

- Use competitor's structure but adapt language to Sentinel's voice
- Add AI assessment capabilities to each area
- Emphasize arbitration loophole expertise where relevant

#### 14.4 Statistics (Adapted)

- "200+ Years of Combined Experience" (adapt to Sentinel's team size)
- "$500 Million+ Recovered" (adapt to Sentinel's actual numbers)
- Add: "AI-Powered Case Assessment in Under 2 Minutes" (NEW)

### Phase 15: AI Safety & Compliance

#### 15.1 Create AI Safety Layer

**File**: `src/services/ai/safety.ts`

- Content filtering
- Legal disclaimer injection
- Privacy protection
- Bias detection
- Accuracy validation

#### 15.2 Create AI Compliance Service

**File**: `src/services/ai/compliance.ts`

- Attorney-client privilege protection
- Data retention policies
- Audit logging
- Consent management
- Regulatory compliance (legal industry standards)

## Technical Implementation Details

### File Structure

```
app/
  index.tsx (home with AI assessment)
  firm-overview/
    index.tsx
    class-notices.tsx
    case-results.tsx (with AI analysis)
    testimonials.tsx
  practice-areas/
    index.tsx (with AI filter)
    [slug].tsx (with AI case analyzer)
  attorneys/
    index.tsx
    [slug].tsx
  resources/
    potential-claims.tsx (AI questionnaire)
    pay-online.tsx
  blog/
    index.tsx (with AI recommendations)
    [slug].tsx (with AI assistant)
    admin/
      ai-generator.tsx
  contact.tsx
  portal/
    index.tsx (AI-enhanced)
    case/[id].tsx

src/
  components/
    ConsultationForm.tsx (AI-assisted)
    AICaseAssessment.tsx (NEW)
    AICaseChatbot.tsx (NEW)
    AIDocumentAnalyzer.tsx (NEW)
    AILegalResearch.tsx (NEW)
    AISearch.tsx (NEW)
    AIFormAssistant.tsx (NEW)
    Statistics.tsx
    TestimonialCard.tsx
    PracticeAreaCard.tsx
    AttorneyCard.tsx
  services/
    ai/
      gemini.ts (NEW)
      communication.ts (NEW)
      analytics.ts (NEW)
      safety.ts (NEW)
      compliance.ts (NEW)
    consultation.ts (with AI)
    blog.ts
    cases.ts
  config/
    ai.ts (NEW)
  constants/
    content.ts (competitor copy adapted)
  utils/
    validation.ts
    navigation.ts
  types/
    content.ts (with AI types)
```

### AI Integration Architecture

```
User Input → AI Service (Gemini) → Analysis → Firebase Storage → UI Update
                ↓
         Safety & Compliance Layer
                ↓
         Admin Dashboard
```

### Gemini AI Use Cases

1. **Case Assessment**: Analyze case descriptions, identify legal issues, recommend practice areas
2. **Document Analysis**: Extract key information, identify violations, summarize documents
3. **Legal Research**: Find relevant precedents, explain legal concepts, cite sources
4. **Form Assistance**: Suggest completions, validate inputs, optimize descriptions
5. **Content Generation**: Blog posts, personalized content, translations
6. **Communication**: Client updates, email generation, notification content
7. **Analytics**: Pattern recognition, success prediction, trend analysis

## Content Strategy: Competitor Copy Adaptation

### Key Copy Adaptations

1. **Hero**: "ADVOCATES FOR CONSUMERS" → "SENTINELS FOR JUSTICE"
2. **Tagline**: Maintain "We Are On Your Side" (proven effective)
3. **Phone Display**: "Call Us Today! [Phone]" (exact match for familiarity)
4. **Practice Areas**: Use competitor's 11 areas and subcategories (proven structure)
5. **Form Structure**: Match competitor's 2-step form exactly, then add AI Step 3
6. **Statistics**: Adapt competitor's metrics to Sentinel's actual numbers
7. **Tone**: Elevate competitor's professional tone with Sentinel's intellectual edge

### AI-Enhanced Messaging

- "Get Instant Case Assessment with AI" (NEW capability)
- "AI-Powered Document Analysis" (NEW capability)
- "24/7 AI Legal Research Assistant" (NEW capability)
- "Smart Form Completion" (NEW capability)
- "Personalized Legal Guidance" (AI-powered)

## Success Metrics

1. **Form Completion Rate**: Target 50%+ (competitor ~25%, AI assistance increases completion)
2. **AI Engagement**: 30%+ of visitors use AI features
3. **Case Assessment Accuracy**: 85%+ match with attorney evaluation
4. **Page Load Time**: <2s (competitor ~3-4s)
5. **Mobile Usability**: 95+ Lighthouse score
6. **Accessibility**: WCAG AAA compliance
7. **User Engagement**: Average session duration 5+ minutes (AI features increase engagement)
8. **Conversion Rate**: 15%+ consultation requests (competitor likely ~8-10%)

## Competitive Advantages Summary

### What Competitor Has

- Basic 2-step consultation form
- Static content
- Manual processes
- Standard navigation
- No AI capabilities

### What We Offer (Beyond Competitor)

- AI case assessment chatbot
- AI document analysis
- AI legal research assistant
- AI-powered form assistance
- AI client portal
- AI content personalization
- AI translation services
- AI analytics and insights
- Real-time AI assistance throughout
- Predictive case outcomes

## Implementation Priority

### MVP (Must Have)

1. Content structure from competitor
2. Basic Gemini AI integration
3. AI case assessment chatbot
4. AI-enhanced consultation form
5. Core pages matching competitor structure

### Phase 2 (High Value)

1. AI document analyzer
2. AI legal research
3. AI client portal
4. AI communication automation

### Phase 3 (Enhancement)

1. AI content generation
2. AI analytics dashboard
3. Advanced AI features
4. Multi-language AI support