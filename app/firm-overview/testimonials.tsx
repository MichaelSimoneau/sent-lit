import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { TestimonialCard } from '../../src/components/TestimonialCard';
import { TESTIMONIALS } from '../../src/constants/content';
import { SEOHead } from '../../src/components/SEOHead';

export default function Testimonials() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const getTestimonialStyle = () => {
    if (isDesktop) {
      return { flexBasis: '33.333%' as any, paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12 };
    }
    if (isTablet) {
      return { flexBasis: '50%' as any, paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12 };
    }
    return { flexBasis: '100%' as any, paddingLeft: 12, paddingRight: 12, paddingBottom: 16 };
  };

  return (
    <>
      <SEOHead 
        title="Client Testimonials | Sentinel Litigation"
        description="Read what our clients say about their experience with Sentinel Litigation in consumer protection cases."
      />
      <Stack.Screen options={{ title: 'Testimonials' }} />
      <View style={styles.pageContainer}>
        <Navigation />
        <ScrollView>
          <Container style={[styles.container, isDesktop && styles.containerDesktop]}>
            <Text style={[
              styles.title,
              isMobile && styles.titleMobile,
              isDesktop && styles.titleDesktop
            ]}>
              Client Testimonials
            </Text>
            <Text style={[
              styles.subtitle,
              isMobile && styles.subtitleMobile
            ]}>
              Hear from clients who trusted Sentinel Litigation with their consumer protection cases
            </Text>

            <View style={styles.testimonialsGrid}>
              {TESTIMONIALS.map((testimonial) => (
                <View key={testimonial.id} style={getTestimonialStyle()}>
                  <View style={styles.testimonialWrapper}>
                    <TestimonialCard testimonial={testimonial} />
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.ctaSection}>
              <Text style={styles.ctaTitle}>
                Ready to Share Your Story?
              </Text>
              <Text style={styles.ctaDescription}>
                If Sentinel Litigation has helped you resolve a consumer protection issue, we'd love to hear about your experience. Contact us to share your story.
              </Text>
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
    backgroundColor: '#0f172a',
  },
  container: {
    paddingVertical: 48,
  },
  containerDesktop: {
    paddingVertical: 80,
  },
  title: {
    fontSize: 36,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
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
    color: '#cbd5e1',
    marginBottom: 48,
    textAlign: 'center',
    lineHeight: 28,
  },
  subtitleMobile: {
    fontSize: 16,
    lineHeight: 26,
  },
  testimonialsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
    marginBottom: 48,
  },
  testimonialWrapper: {
    height: '100%',
  },
  ctaSection: {
    marginTop: 32,
    padding: 32,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
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
    textAlign: 'center',
    maxWidth: 600,
  },
});
