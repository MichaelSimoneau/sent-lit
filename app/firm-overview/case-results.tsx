import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Card } from '../../src/components/Card';
import { SEOHead } from '../../src/components/SEOHead';

const CASE_RESULTS = [
  {
    id: '1',
    title: 'Credit Reporting Class Action',
    description: 'Successfully resolved class action against major credit reporting agency for FCRA violations',
    result: 'Multi-million dollar settlement for class members',
    year: '2023',
    category: 'Credit Reporting',
  },
  {
    id: '2',
    title: 'Debt Collection Harassment',
    description: 'Individual case against debt collector for repeated FDCPA violations and harassment',
    result: '$75,000 settlement plus attorney fees',
    year: '2023',
    category: 'Debt Collection',
  },
  {
    id: '3',
    title: 'Auto Lender Fraud Class Action',
    description: 'Class action against auto lender for deceptive lending practices and hidden fees',
    result: 'Settlement providing relief to thousands of consumers',
    year: '2022',
    category: 'Auto Fraud',
  },
  {
    id: '4',
    title: 'Banking Fraud Recovery',
    description: 'Recovered funds for multiple clients who were victims of unauthorized bank transfers',
    result: 'Full recovery plus damages for affected clients',
    year: '2023',
    category: 'Banking Fraud',
  },
  {
    id: '5',
    title: 'Telemarketing TCPA Violations',
    description: 'Class action against company for illegal robocalls and TCPA violations',
    result: 'Multi-million dollar settlement for class members',
    year: '2022',
    category: 'Telemarketing',
  },
  {
    id: '6',
    title: 'Identity Theft Credit Restoration',
    description: 'Helped client remove fraudulent accounts and restore credit after identity theft',
    result: 'Complete credit restoration and $50,000 in damages',
    year: '2023',
    category: 'Credit Reporting',
  },
];

export default function CaseResults() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  return (
    <>
      <SEOHead 
        title="Case Results | Sentinel Litigation"
        description="See our track record of successful consumer protection cases and recoveries for clients."
      />
      <Stack.Screen options={{ title: 'Case Results' }} />
      <View style={styles.pageContainer}>
        <Navigation />
        <ScrollView>
          <Container style={[styles.container, isDesktop && styles.containerDesktop]}>
            <Text style={[
              styles.title,
              isMobile && styles.titleMobile,
              isDesktop && styles.titleDesktop
            ]}>
              Case Results
            </Text>
            <Text style={[
              styles.subtitle,
              isMobile && styles.subtitleMobile
            ]}>
              Our track record of success in consumer protection cases
            </Text>

            <View style={styles.disclaimerBox}>
              <Text style={styles.disclaimerText}>
                <Text style={styles.disclaimerBold}>Note:</Text> Past results do not guarantee future outcomes. Each case is unique and results depend on the specific facts and circumstances.
              </Text>
            </View>

            <View style={styles.resultsGrid}>
              {CASE_RESULTS.map((result) => (
                <Card key={result.id} style={styles.resultCard}>
                  <View style={styles.resultHeader}>
                    <Text style={styles.resultCategory}>{result.category}</Text>
                    <Text style={styles.resultYear}>{result.year}</Text>
                  </View>
                  <Text style={styles.resultTitle}>{result.title}</Text>
                  <Text style={styles.resultDescription}>{result.description}</Text>
                  <View style={styles.resultFooter}>
                    <Text style={styles.resultLabel}>Result:</Text>
                    <Text style={styles.resultValue}>{result.result}</Text>
                  </View>
                </Card>
              ))}
            </View>

            <View style={styles.statsSection}>
              <Text style={styles.statsTitle}>Our Track Record</Text>
              <View style={styles.statsGrid}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>$500M+</Text>
                  <Text style={styles.statLabel}>Recovered for Consumers</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>200+</Text>
                  <Text style={styles.statLabel}>Years Combined Experience</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>1000+</Text>
                  <Text style={styles.statLabel}>Cases Resolved</Text>
                </View>
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
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
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
  subtitle: {
    fontSize: 18,
    color: '#475569',
    marginBottom: 32,
    lineHeight: 28,
  },
  subtitleMobile: {
    fontSize: 16,
    lineHeight: 26,
  },
  disclaimerBox: {
    backgroundColor: '#fef3c7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 40,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#78350f',
    lineHeight: 22,
  },
  disclaimerBold: {
    fontWeight: 'bold',
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
    marginBottom: 48,
  },
  resultCard: {
    flexBasis: '100%',
    padding: 24,
    marginHorizontal: 12,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563eb',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  resultYear: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
  },
  resultTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    lineHeight: 28,
  },
  resultDescription: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 16,
  },
  resultFooter: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#059669',
    lineHeight: 24,
  },
  statsSection: {
    marginTop: 48,
    padding: 40,
    backgroundColor: '#0f172a',
    borderRadius: 16,
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: 28,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 32,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 48,
  },
  stat: {
    alignItems: 'center',
    minWidth: 150,
  },
  statValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#cbd5e1',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
