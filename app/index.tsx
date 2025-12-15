import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, StyleSheet, Platform } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Navigation } from '../src/components/Navigation';
import { Footer } from '../src/components/Footer';
import { Container } from '../src/components/Container';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Statistics } from '../src/components/Statistics';
import { AICaseAssessment } from '../src/components/AICaseAssessment';
import { PracticeAreaCard } from '../src/components/PracticeAreaCard';
import { TestimonialCard } from '../src/components/TestimonialCard';
import { HERO_CONTENT, PRACTICE_AREAS, TESTIMONIALS } from '../src/constants/content';
import { SEOHead } from '../src/components/SEOHead';
import { Mosaic } from '../src/components/Mosaic';

export default function Home() {
  const { width } = useWindowDimensions();
  const getPracticeAreaWidth = () => {
    if (width >= 1024) return '33.333%'; // lg: 3 columns
    if (width >= 768) return '50%'; // md: 2 columns
    return '100%'; // mobile: 1 column
  };

  return (
    <>
      <SEOHead 
        title="Sentinel Litigation | Consumer Fraud Protection"
        description={HERO_CONTENT.description}
      />
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <View style={styles.pageContainer}>
        <Navigation />
        
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
             {/* Mosaic Background */}
             <View style={styles.mosaicContainer}>
               <Mosaic />
             </View>
             
             {/* Gradient Overlay */}
             <View style={styles.gradientOverlay} />
             <View style={styles.bottomGradient} />
             
            <Container style={styles.heroContentContainer}>
               <View style={styles.heroGrid}>
                <View style={styles.heroTextColumn}>
                  <View style={styles.heroTaglineContainer}>
                    <View style={styles.heroTaglineBar} />
                    <Text style={styles.heroTaglineText}>
                      Consumer Fraud Protection
                    </Text>
                  </View>
                  <Text style={styles.heroHeading}>
                    {HERO_CONTENT.main}. <Text style={styles.heroHeadingHighlight}>Uncompromising Justice.</Text>
                  </Text>
                  <Text style={styles.heroDescription}>
                    {HERO_CONTENT.description}
                  </Text>
                  <View style={styles.heroButtonContainer}>
                    <Button title="Get Free Consultation" size="lg" onPress={() => {}} style={styles.heroPrimaryButton} />
                    <Button title="Learn More" variant="outline" size="lg" onPress={() => {}} style={styles.heroSecondaryButton} />
                  </View>
                  
                  <View style={styles.heroStatsContainer}>
                    <View>
                      <Text style={styles.heroStatValue}>200+</Text>
                      <Text style={styles.heroStatLabel}>Years Experience</Text>
                    </View>
                    <View style={styles.heroStatDivider} />
                    <View>
                      <Text style={styles.heroStatValue}>$500M+</Text>
                      <Text style={styles.heroStatLabel}>Recovered</Text>
                    </View>
                  </View>
                </View>
                
                {/* AI Assessment Widget Integration */}
                <View style={styles.heroWidgetColumn}>
                  <View style={styles.heroWidgetWrapper}>
                    <View style={styles.heroWidgetGlow} />
                    <AICaseAssessment />
                  </View>
                </View>
              </View>
            </Container>
          </View>

          {/* Statistics Section */}
          <View style={styles.statsSection}>
            <Container>
              <Statistics />
            </Container>
          </View>

          {/* Mission / Bio Section */}
          <View style={styles.missionSection}>
            {/* Decorative background element */}
            <View style={styles.missionDecorativeBg} />
            
            <Container style={styles.missionContentContainer}>
              <View style={styles.missionGrid}>
                <View style={styles.missionTextColumn}>
                  <Text style={styles.sectionSubtitle}>Who We Are</Text>
                  <Text style={styles.sectionTitleLight}>
                    The Firm That <Text style={styles.textBlue}>Fights Back</Text>
                  </Text>
                  <Text style={styles.bodyText}>
                    Sentinel Litigation stands apart in a crowded field. While competition handles broad legal matters, 
                    we specialize laser-focused on consumer fraud.
                  </Text>
                  <Text style={styles.bodyText}>
                    In the wake of recent Supreme Court decisions limiting class actions, we exploit every 
                    legal loophole—from small claims actions to quasi-class actions—to ensure your voice is heard.
                  </Text>
                  <View style={styles.quoteBox}>
                    <Text style={styles.quoteText}>
                      "Subtly aggressive, succinct, and powerful. Intellectually akin to the sharpest minds of our time."
                    </Text>
                  </View>
                </View>
                <View style={styles.missionCardColumn}>
                  <Card style={styles.missionCard}>
                    <Text style={styles.cardTitle}>
                      Why Choose Us?
                    </Text>
                    <View>
                      {[
                        'Specialized in Consumer Fraud',
                        'Arbitration Loophole Experts',
                        'State & Federal Court Experience',
                        'Aggressive Representation',
                        'No Recovery, No Fee'
                      ].map((item, i) => (
                        <View key={i} style={styles.checkListItem}>
                          <View style={styles.checkIcon}>
                            <View style={styles.checkDot} />
                          </View>
                          <Text style={styles.checkListText}>{item}</Text>
                        </View>
                      ))}
                    </View>
                    <View style={styles.missionCardFooter}>
                      <Button title="Meet Our Attorneys" variant="outline" onPress={() => {}} style={{ width: '100%' }} />
                    </View>
                  </Card>
                </View>
              </View>
            </Container>
          </View>

          {/* Practice Areas Preview */}
          <View style={styles.practiceSection}>
            <Container>
              <View style={styles.practiceHeader}>
                <View style={{ maxWidth: 672 }}>
                  <Text style={styles.sectionSubtitle}>Expertise</Text>
                  <Text style={styles.sectionTitleDark}>
                    Our Practice Areas
                  </Text>
                  <Text style={styles.bodyTextDark}>
                    We specialize in protecting consumers from corporate abuse. Our focus allows us to stay ahead of the latest fraudulent tactics.
                  </Text>
                </View>
                {width >= 768 && (
                  <Link href="/practice-areas" asChild>
                    <TouchableOpacity style={styles.viewAllButtonDesktop}>
                      <Text style={styles.viewAllText}>View All Areas</Text>
                      <View style={styles.requestReviewButton}>
                         <Text style={{ color: 'white', fontWeight: 'bold' }}>Request Free Review →</Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                )}
              </View>

              <View style={styles.practiceGrid}>
                {PRACTICE_AREAS.slice(0, 6).map((area) => (
                  <View key={area.id} style={{ width: getPracticeAreaWidth(), padding: 16 }}>
                    <View style={styles.practiceCardWrapper}>
                       <PracticeAreaCard area={area} />
                    </View>
                  </View>
                ))}
              </View>
              
              {width < 768 && (
                <View style={styles.viewAllMobileContainer}>
                   <Link href="/practice-areas" asChild>
                      <Button title="View All Practice Areas" variant="outline" size="lg" />
                   </Link>
                </View>
              )}
            </Container>
          </View>

          {/* Testimonials */}
          <View style={styles.testimonialsSection}>
            {/* Background Pattern */}
            <View style={styles.testimonialsPattern} />
            
            <Container style={{ position: 'relative', zIndex: 10 }}>
              <View style={{ alignItems: 'center', marginBottom: 64 }}>
                <Text style={styles.sectionSubtitle}>Client Success</Text>
                <Text style={styles.sectionTitleLight}>
                  Hear From Our Clients
                </Text>
                <View style={styles.titleUnderline} />
              </View>
              
              <View style={styles.practiceGrid}>
                {TESTIMONIALS.map((testimonial) => (
                  <View key={testimonial.id} style={{ width: getPracticeAreaWidth(), padding: 16 }}>
                    <View style={styles.testimonialCardWrapper}>
                       <TestimonialCard testimonial={testimonial} />
                    </View>
                  </View>
                ))}
              </View>
            </Container>
          </View>

          {/* Call to Action */}
          <View style={styles.ctaSection}>
            <Container>
              <View style={styles.ctaCard}>
                 <View style={styles.ctaOverlay} />
                 <View style={{ position: 'relative', zIndex: 10 }}>
                  <Text style={styles.ctaTitle}>
                    Don't Let Them Get Away With It.
                  </Text>
                  <Text style={styles.ctaDescription}>
                    If you've been the victim of fraud, time is of the essence. Contact us today for a confidential evaluation of your case.
                  </Text>
                  <View style={styles.ctaButtonRow}>
                    <Button 
                      title="Get Free AI Assessment" 
                      size="lg" 
                      style={styles.ctaPrimaryButton}
                      onPress={() => {}} 
                    />
                    <Button 
                      title="Contact Us Now" 
                      size="lg" 
                      variant="outline"
                      style={styles.ctaSecondaryButton}
                      onPress={() => {}} 
                    />
                  </View>
                </View>
              </View>
            </Container>
          </View>

          <Footer />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#0f172a', // slate-900
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  // Hero Section
  heroSection: {
    backgroundColor: '#0f172a',
    paddingVertical: 96,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
  },
  mosaicContainer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    opacity: 0.4,
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.8)', // slate-900 with opacity
    zIndex: 10,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 128,
    zIndex: 10,
    // Linear gradient simulation or keep transparent if plain view
    backgroundColor: 'transparent', 
  },
  heroContentContainer: {
    position: 'relative',
    zIndex: 20,
  },
  heroGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 64,
  },
  heroTextColumn: {
    flex: 1,
    minWidth: 300,
    maxWidth: 768,
  },
  heroTaglineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  heroTaglineBar: {
    width: 48,
    height: 4,
    backgroundColor: '#2563eb', // blue-600
    marginRight: 16,
  },
  heroTaglineText: {
    color: '#60a5fa', // blue-400
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 14,
  },
  heroHeading: {
    fontSize: 48, // lg: 7xl roughly
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 32,
    lineHeight: 56,
  },
  heroHeadingHighlight: {
    color: '#3b82f6', // blue-500
  },
  heroDescription: {
    fontSize: 20,
    color: '#cbd5e1', // slate-300
    marginBottom: 40,
    lineHeight: 30,
    fontWeight: '300',
    maxWidth: 600,
  },
  heroButtonContainer: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  heroPrimaryButton: {
    backgroundColor: '#2563eb',
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  heroSecondaryButton: {
    borderColor: '#475569',
    backgroundColor: 'transparent',
  },
  heroStatsContainer: {
    marginTop: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    opacity: 0.8,
  },
  heroStatValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  heroStatLabel: {
    color: '#94a3b8', // slate-400
    fontSize: 12,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  heroStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#334155',
  },
  heroWidgetColumn: {
    width: '100%',
    maxWidth: 480,
    flex: 1,
    minWidth: 300,
  },
  heroWidgetWrapper: {
    position: 'relative',
    zIndex: 30,
  },
  heroWidgetGlow: {
    position: 'absolute',
    top: -4,
    bottom: -4,
    left: -4,
    right: -4,
    backgroundColor: '#2563eb',
    borderRadius: 16,
    opacity: 0.3,
  },
  
  // Statistics Section
  statsSection: {
    backgroundColor: '#0f172a',
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },

  // Mission Section
  missionSection: {
    paddingVertical: 96,
    backgroundColor: '#f8fafc', // slate-50
    position: 'relative',
  },
  missionDecorativeBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '33%',
    height: '100%',
    backgroundColor: '#f1f5f9', // slate-100
    opacity: 0.5,
    transform: [{ skewX: '12deg' }, { translateX: 80 }],
  },
  missionContentContainer: {
    position: 'relative',
    zIndex: 10,
  },
  missionGrid: {
    flexDirection: 'row',
    gap: 64,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  missionTextColumn: {
    flex: 1,
    minWidth: 300,
  },
  sectionSubtitle: {
    color: '#2563eb',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  sectionTitleLight: {
    fontSize: 36,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 32,
    lineHeight: 44,
  },
  sectionTitleDark: {
    fontSize: 36,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a', // dark on white
    marginBottom: 24,
  },
  textBlue: {
    color: '#2563eb',
  },
  bodyText: {
    fontSize: 18,
    color: '#334155', // slate-700
    marginBottom: 24,
    lineHeight: 28,
  },
  bodyTextDark: {
    fontSize: 18,
    color: '#475569',
    lineHeight: 28,
  },
  quoteBox: {
    backgroundColor: 'white',
    padding: 24,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    color: '#1e293b',
  },
  missionCardColumn: {
    width: '100%',
    maxWidth: 400,
    flex: 0,
    minWidth: 300,
    position: 'relative',
    zIndex: 20,
  },
  missionCard: {
    backgroundColor: 'white',
    padding: 40,
    borderTopWidth: 8,
    borderTopColor: '#2563eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    marginTop: Platform.OS === 'web' ? -32 : 0, // negative margin for float effect
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 24,
  },
  checkListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  checkDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563eb',
  },
  checkListText: {
    color: '#334155',
    fontWeight: '500',
    fontSize: 18,
    flex: 1,
  },
  missionCardFooter: {
    marginTop: 32,
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },

  // Practice Areas
  practiceSection: {
    paddingVertical: 96,
    backgroundColor: 'white',
  },
  practiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 64,
  },
  viewAllButtonDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 16,
  },
  requestReviewButton: {
    backgroundColor: '#2563eb',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  practiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -16,
  },
  practiceCardWrapper: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    overflow: 'hidden',
  },
  viewAllMobileContainer: {
    marginTop: 32,
    alignItems: 'center',
  },

  // Testimonials
  testimonialsSection: {
    paddingVertical: 96,
    backgroundColor: '#f8fafc',
    position: 'relative',
    overflow: 'hidden',
  },
  testimonialsPattern: {
    position: 'absolute',
    inset: 0,
    opacity: 0.03,
    // Radial gradient workaround would go here, leaving simple for StyleSheet
    backgroundColor: '#f8fafc', 
  },
  titleUnderline: {
    width: 96,
    height: 4,
    backgroundColor: '#2563eb',
    borderRadius: 2,
    marginTop: 24,
  },
  testimonialCardWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    height: '100%',
  },

  // CTA
  ctaSection: {
    paddingVertical: 80,
    backgroundColor: 'white',
  },
  ctaCard: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 48,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
  },
  ctaOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.2)', // blue-900/20
  },
  ctaTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 18,
    color: '#cbd5e1',
    marginBottom: 32,
    maxWidth: 600,
    textAlign: 'center',
  },
  ctaButtonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  ctaPrimaryButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaSecondaryButton: {
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
});
