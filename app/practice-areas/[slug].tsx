import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Button } from '../../src/components/Button';
import { PRACTICE_AREAS } from '../../src/constants/content';
import { SEOHead } from '../../src/components/SEOHead';

export default function PracticeAreaDetail() {
  const { slug } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;
  
  const practiceArea = PRACTICE_AREAS.find(area => area.slug === slug);
  
  if (!practiceArea) {
    return (
      <>
        <Stack.Screen options={{ title: 'Practice Area Not Found' }} />
        <View style={styles.pageContainer}>
          <Navigation />
          <ScrollView>
            <Container style={styles.container}>
              <Text style={styles.title}>Practice Area Not Found</Text>
              <Link href="/practice-areas" asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>← Back to Practice Areas</Text>
                </TouchableOpacity>
              </Link>
            </Container>
            <Footer />
          </ScrollView>
        </View>
      </>
    );
  }

  // Detailed content for each practice area
  const practiceAreaDetails: Record<string, { sections: Array<{ title: string; content: string }> }> = {
    'credit-reporting': {
      sections: [
        {
          title: 'Understanding Credit Reporting',
          content: 'Credit reports contain information about your credit history and are used by lenders, landlords, employers, and insurers to assess your financial reliability. Errors on your credit report can significantly impact your ability to secure loans, obtain favorable interest rates, or even get approved for housing. At Sentinel Litigation, we help consumers correct errors and seek compensation when credit reporting agencies or furnishers fail to fulfill their legal obligations under the Fair Credit Reporting Act (FCRA).',
        },
        {
          title: 'Common Credit Reporting Violations',
          content: 'Credit reporting agencies and furnishers must follow strict procedures when handling your credit information. Common violations include: reporting inaccurate information, failing to investigate disputes properly, reporting outdated information, mixing files between consumers, and failing to provide free annual credit reports. When these violations occur, you may be entitled to damages including actual damages, statutory damages up to $1,000, and attorney\'s fees.',
        },
        {
          title: 'Identity Theft and Credit Reporting',
          content: 'Identity theft can wreak havoc on your credit report. If you\'ve been a victim of identity theft, you have specific rights under the FCRA. Credit reporting agencies must block fraudulent accounts from your report, and creditors cannot hold you liable for fraudulent charges. We help identity theft victims restore their credit and seek compensation from those who failed to properly investigate or correct fraudulent accounts.',
        },
      ],
    },
    'debt-collection-rights': {
      sections: [
        {
          title: 'Your Rights Under the FDCPA',
          content: 'The Fair Debt Collection Practices Act (FDCPA) protects consumers from abusive, deceptive, and unfair debt collection practices. Debt collectors cannot harass you, use false or misleading statements, or engage in unfair practices. You have the right to request validation of the debt, dispute the debt, and request that collectors stop contacting you. Violations of the FDCPA can result in actual damages, statutory damages up to $1,000, and attorney\'s fees.',
        },
        {
          title: 'When Debt Collectors Cross the Line',
          content: 'Debt collectors frequently violate the law by calling at prohibited times, using threatening language, misrepresenting the amount owed, threatening actions they cannot legally take, or continuing to contact you after you\'ve requested they stop. If you\'ve been harassed by debt collectors, you may have a claim. We help consumers hold debt collectors accountable for their unlawful conduct and recover damages for violations of the FDCPA and state debt collection laws.',
        },
        {
          title: 'Debt Buyer Lawsuits',
          content: 'Debt buyers often file lawsuits against consumers based on incomplete or inaccurate records. Many consumers fail to defend these lawsuits, resulting in default judgments. However, debt buyers must prove they own the debt and the amount is accurate. We help consumers defend against baseless debt collection lawsuits and counterclaim for violations of the FDCPA and state laws.',
        },
      ],
    },
    'unfair-auto-financing': {
      sections: [
        {
          title: 'Auto Financing Fraud',
          content: 'Unfair auto financing practices are unfortunately common. Dealerships and lenders may engage in deceptive advertising, hide fees, charge excessive interest rates, or misrepresent the terms of your loan. Some common schemes include: yo-yo financing (where dealers promise one rate then change it after you leave), payment packing (adding unauthorized charges), and spot delivery scams (where you drive away before financing is finalized).',
        },
        {
          title: 'Your Legal Rights',
          content: 'Consumers have protections under federal and state laws including the Truth in Lending Act (TILA), state unfair and deceptive acts and practices (UDAP) laws, and the Consumer Financial Protection Act. These laws require clear disclosure of loan terms, prohibit deceptive practices, and provide remedies including rescission, damages, and attorney\'s fees. If you\'ve been the victim of auto financing fraud, you may be able to rescind the contract, recover damages, or have the loan terms adjusted.',
        },
        {
          title: 'Class Action Litigation',
          content: 'When auto lenders engage in widespread unfair practices, class action lawsuits may be appropriate. Sentinel Litigation regularly files class actions against auto lenders for deceptive lending practices, unfair pricing, hidden fees, and aggressive repossession practices. Class actions allow consumers to hold large corporations accountable and deter future misconduct.',
        },
      ],
    },
  };

  const details = practiceAreaDetails[practiceArea.id] || {
    sections: [
      {
        title: `About ${practiceArea.title}`,
        content: practiceArea.fullDescription || practiceArea.shortDescription,
      },
      {
        title: 'How We Can Help',
        content: `At Sentinel Litigation, founded by David Rodriguez, a professor at DePaul University College of Law in Chicago, we specialize in consumer protection cases. We understand the complexities of ${practiceArea.title.toLowerCase()} cases and have the expertise to protect your rights. If you believe you've been the victim of fraud, deception, or unfair practices related to ${practiceArea.title.toLowerCase()}, contact us for a free consultation.`,
      },
    ],
  };

  return (
    <>
      <SEOHead 
        title={`${practiceArea.title} | Sentinel Litigation`}
        description={practiceArea.fullDescription || practiceArea.shortDescription}
        url={`/practice-areas/${slug}`}
      />
      <Stack.Screen options={{ title: practiceArea.title }} />
      <View style={styles.pageContainer}>
        <Navigation />
        <ScrollView>
          <Container style={[styles.container, isDesktop && styles.containerDesktop]}>
            {/* Breadcrumb */}
            <View style={styles.breadcrumb}>
              <Link href="/practice-areas" asChild>
                <TouchableOpacity>
                  <Text style={styles.breadcrumbLink}>Practice Areas</Text>
                </TouchableOpacity>
              </Link>
              <Text style={styles.breadcrumbSeparator}> / </Text>
              <Text style={styles.breadcrumbCurrent}>{practiceArea.title}</Text>
            </View>

            {/* Title */}
            <Text style={[
              styles.title,
              isMobile && styles.titleMobile,
              isDesktop && styles.titleDesktop
            ]}>
              {practiceArea.title}
            </Text>

            {/* Description */}
            <Text style={[
              styles.description,
              isMobile && styles.descriptionMobile,
              isDesktop && styles.descriptionDesktop
            ]}>
              {practiceArea.fullDescription || practiceArea.shortDescription}
            </Text>

            {/* Content Sections */}
            {details.sections.map((section, index) => (
              <View key={index} style={styles.section}>
                <Text style={[
                  styles.sectionTitle,
                  isMobile && styles.sectionTitleMobile,
                  isDesktop && styles.sectionTitleDesktop
                ]}>
                  {section.title}
                </Text>
                <Text style={[
                  styles.sectionContent,
                  isMobile && styles.sectionContentMobile,
                  isDesktop && styles.sectionContentDesktop
                ]}>
                  {section.content}
                </Text>
              </View>
            ))}

            {/* Subcategories */}
            {practiceArea.subcategories && practiceArea.subcategories.length > 0 && (
              <View style={styles.subcategoriesSection}>
                <Text style={[
                  styles.sectionTitle,
                  isMobile && styles.sectionTitleMobile,
                  isDesktop && styles.sectionTitleDesktop
                ]}>
                  Related Topics
                </Text>
                <View style={styles.subcategoriesGrid}>
                  {practiceArea.subcategories.map((subcat) => (
                    <View key={subcat.slug} style={styles.subcategoryItem}>
                      <Text style={styles.subcategoryText}>{subcat.title}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* CTA */}
            <View style={styles.ctaSection}>
              <Text style={styles.ctaTitle}>
                Do You Have a Case?
              </Text>
              <Text style={styles.ctaDescription}>
                If you believe you've been the victim of fraud or unfair practices related to {practiceArea.title.toLowerCase()}, contact us for a free consultation. Our AI-powered case assessment can provide an immediate preliminary evaluation.
              </Text>
              <View style={styles.ctaButtons}>
                <Link href="/contact" asChild>
                  <Button title="Schedule Free Consultation" size="lg" onPress={() => {}} />
                </Link>
                <Link href="/" asChild>
                  <Button title="Get Instant AI Assessment" variant="outline" size="lg" onPress={() => {}} />
                </Link>
              </View>
            </View>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingVertical: 48,
  },
  containerDesktop: {
    paddingVertical: 80,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  breadcrumbLink: {
    color: '#2563eb',
    fontSize: 14,
  },
  breadcrumbSeparator: {
    color: '#94a3b8',
    fontSize: 14,
  },
  breadcrumbCurrent: {
    color: '#64748b',
    fontSize: 14,
  },
  title: {
    fontSize: 36,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 44,
  },
  titleMobile: {
    fontSize: 28,
    lineHeight: 36,
  },
  titleDesktop: {
    fontSize: 48,
    lineHeight: 56,
  },
  description: {
    fontSize: 18,
    color: '#475569',
    lineHeight: 28,
    marginBottom: 40,
  },
  descriptionMobile: {
    fontSize: 16,
    lineHeight: 26,
  },
  descriptionDesktop: {
    fontSize: 20,
    lineHeight: 32,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 32,
  },
  sectionTitleMobile: {
    fontSize: 20,
    lineHeight: 28,
  },
  sectionTitleDesktop: {
    fontSize: 28,
    lineHeight: 36,
  },
  sectionContent: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 26,
  },
  sectionContentMobile: {
    fontSize: 15,
    lineHeight: 24,
  },
  sectionContentDesktop: {
    fontSize: 17,
    lineHeight: 28,
  },
  subcategoriesSection: {
    marginTop: 24,
    marginBottom: 40,
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  subcategoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  subcategoryItem: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  subcategoryText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 15,
  },
  ctaSection: {
    marginTop: 48,
    padding: 32,
    backgroundColor: '#0f172a',
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: '#cbd5e1',
    lineHeight: 26,
    marginBottom: 32,
    textAlign: 'center',
    maxWidth: 600,
  },
  ctaButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
});
