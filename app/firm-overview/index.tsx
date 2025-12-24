import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';
import { SEOHead } from '../../src/components/SEOHead';
import { HERO_CONTENT, COMPANY_INFO } from '../../src/constants/content';

export default function FirmOverview() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  return (
    <>
      <SEOHead 
        title="Firm Overview | Sentinel Litigation - Consumer Protection Attorneys"
        description="Founded by David Rodriguez, a DePaul University College of Law professor, Sentinel Litigation specializes in consumer fraud and consumer rights protection."
      />
      <Stack.Screen options={{ title: 'Firm Overview' }} />
      <View style={styles.pageContainer}>
        <Navigation />
        <ScrollView>
          <Container style={[styles.container, isDesktop && styles.containerDesktop]}>
            <Text style={[
              styles.title,
              isMobile && styles.titleMobile,
              isDesktop && styles.titleDesktop
            ]}>
              About Sentinel Litigation
            </Text>
            
            <Text style={[
              styles.subtitle,
              isMobile && styles.subtitleMobile
            ]}>
              The Firm That Fights Back
            </Text>

            {/* Main Description */}
            <View style={styles.section}>
              <Text style={[
                styles.content,
                isMobile && styles.contentMobile,
                isDesktop && styles.contentDesktop
              ]}>
                Founded by David Rodriguez, a professor at DePaul University College of Law in Chicago, Sentinel Litigation stands apart in a crowded field. While other firms handle broad legal matters, we specialize laser-focused on consumer fraud and consumer rights protection.
              </Text>
              
              <Text style={[
                styles.content,
                isMobile && styles.contentMobile,
                isDesktop && styles.contentDesktop
              ]}>
                David Rodriguez brings a unique combination of academic expertise and practical legal experience to consumer protection law. As both a law professor and practicing attorney, he stays at the forefront of legal developments while directly helping those who need it most. His commitment to consumer protection extends beyond the courtroom—through his teaching at DePaul, he educates the next generation of attorneys about the importance of protecting consumer rights.
              </Text>

              <Text style={[
                styles.content,
                isMobile && styles.contentMobile,
                isDesktop && styles.contentDesktop
              ]}>
                When you retain Sentinel Litigation, you are retaining a firm that specializes in cases where individuals, families, and entities have been defrauded or are victims of consumer fraud. We handle everything from credit reporting errors and debt collection harassment to auto financing fraud and banking fraud—everything except criminal matters, in both state and federal court.
              </Text>
            </View>

            {/* Expertise Section */}
            <View style={styles.section}>
              <Text style={[
                styles.sectionTitle,
                isMobile && styles.sectionTitleMobile,
                isDesktop && styles.sectionTitleDesktop
              ]}>
                Our Unique Expertise
              </Text>
              
              <Text style={[
                styles.content,
                isMobile && styles.contentMobile,
                isDesktop && styles.contentDesktop
              ]}>
                In the wake of recent Supreme Court decisions limiting traditional class actions, Sentinel Litigation exploits every legal loophole and creative strategy to ensure your voice is heard. We specialize in:
              </Text>

              <View style={styles.expertiseList}>
                {[
                  'Small claims actions and strategies',
                  'Arbitration clause loopholes and challenges',
                  'Quasi-class actions and innovative litigation approaches',
                  'State and federal consumer protection laws',
                  'Individual and class action litigation',
                ].map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Philosophy Section */}
            <Card style={styles.quoteCard}>
              <Text style={styles.quoteText}>
                "Subtly aggressive, succinct, and powerful. Intellectually akin to the sharpest minds of our time."
              </Text>
            </Card>

            {/* Why Choose Us */}
            <View style={styles.section}>
              <Text style={[
                styles.sectionTitle,
                isMobile && styles.sectionTitleMobile,
                isDesktop && styles.sectionTitleDesktop
              ]}>
                Why Choose Sentinel Litigation?
              </Text>

              <View style={styles.featuresGrid}>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>Specialized Expertise</Text>
                  <Text style={styles.featureText}>
                    We focus exclusively on consumer fraud and consumer rights, allowing us to stay ahead of the latest fraudulent tactics and legal developments.
                  </Text>
                </View>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>Academic Excellence</Text>
                  <Text style={styles.featureText}>
                    Our founder's dual role as a DePaul law professor ensures we combine cutting-edge legal theory with practical, results-oriented representation.
                  </Text>
                </View>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>Creative Strategies</Text>
                  <Text style={styles.featureText}>
                    We think outside the box to find innovative solutions when traditional approaches are limited by court decisions or legal constraints.
                  </Text>
                </View>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>State & Federal Experience</Text>
                  <Text style={styles.featureText}>
                    We handle cases in both state and federal courts, with extensive experience navigating complex procedural requirements.
                  </Text>
                </View>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>No Recovery, No Fee</Text>
                  <Text style={styles.featureText}>
                    We work on a contingency basis—you don't pay unless we recover compensation for you.
                  </Text>
                </View>
                <View style={styles.feature}>
                  <Text style={styles.featureTitle}>AI-Powered Tools</Text>
                  <Text style={styles.featureText}>
                    Our innovative AI case assessment technology provides instant preliminary evaluations, making legal help more accessible than ever.
                  </Text>
                </View>
              </View>
            </View>

            {/* CTA */}
            <View style={styles.ctaSection}>
              <Text style={styles.ctaTitle}>
                Ready to Fight Back?
              </Text>
              <Text style={styles.ctaDescription}>
                If you've been the victim of consumer fraud, time is of the essence. Contact us today for a confidential evaluation of your case.
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
    fontSize: 24,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 32,
  },
  subtitleMobile: {
    fontSize: 20,
  },
  section: {
    marginBottom: 48,
  },
  sectionTitle: {
    fontSize: 28,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 24,
    lineHeight: 36,
  },
  sectionTitleMobile: {
    fontSize: 24,
    lineHeight: 32,
  },
  sectionTitleDesktop: {
    fontSize: 32,
    lineHeight: 40,
  },
  content: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 26,
    marginBottom: 20,
  },
  contentMobile: {
    fontSize: 15,
    lineHeight: 24,
  },
  contentDesktop: {
    fontSize: 17,
    lineHeight: 28,
  },
  expertiseList: {
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginTop: 10,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    color: '#334155',
    lineHeight: 26,
  },
  quoteCard: {
    backgroundColor: '#f8fafc',
    padding: 32,
    marginBottom: 48,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    color: '#1e293b',
    lineHeight: 32,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
    marginTop: 16,
  },
  feature: {
    flexBasis: '100%',
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 24,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
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
