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
import { AIInsightsWidget } from '../src/components/AIInsightsWidget';
import { PracticeAreaCard } from '../src/components/PracticeAreaCard';
import { TestimonialCard } from '../src/components/TestimonialCard';
import { HERO_CONTENT, PRACTICE_AREAS, TESTIMONIALS } from '../src/constants/content';
import { SEOHead } from '../src/components/SEOHead';
import { Mosaic } from '../src/components/Mosaic';

export default function Home() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;
  
  const getPracticeAreaStyle = () => {
    if (isDesktop) {
      // 3 columns: flex-basis 33.333% with padding for spacing
      return { 
        flexBasis: '33.333%' as any,
        flexGrow: 0,
        flexShrink: 0,
        minWidth: 0,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
      };
    }
    if (isTablet) {
      // 2 columns: flex-basis 50% with padding for spacing
      return { 
        flexBasis: '50%' as any,
        flexGrow: 0,
        flexShrink: 0,
        minWidth: 0,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
      };
    }
    // Mobile: full width
    return { 
      flexBasis: '100%' as any,
      flexGrow: 0,
      flexShrink: 0,
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 16,
    };
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
          <View style={[
            styles.heroSection,
            isTablet && styles.heroSectionTablet,
            isDesktop && styles.heroSectionDesktop
          ]}>
             {/* Mosaic Background */}
             <View style={styles.mosaicContainer}>
               <Mosaic />
             </View>
             
             {/* Gradient Overlay */}
             <View style={styles.gradientOverlay} />
             <View style={styles.bottomGradient} />
             
            <Container style={styles.heroContentContainer}>
               <View style={[
                 styles.heroGrid,
                 isMobile && styles.heroGridMobile,
                 isDesktop && styles.heroGridDesktop
               ]}>
                <View style={[
                  styles.heroTextColumn,
                  isMobile && styles.heroTextColumnMobile
                ]}>
                  <View style={styles.heroTaglineContainer}>
                    <View style={styles.heroTaglineBar} />
                    <Text style={styles.heroTaglineText}>
                      Consumer Fraud Protection
                    </Text>
                  </View>
                  <Text style={[
                    styles.heroHeading,
                    isTablet && styles.heroHeadingTablet,
                    isDesktop && styles.heroHeadingDesktop
                  ]}>
                    {HERO_CONTENT.main}. <Text style={styles.heroHeadingHighlight}>Uncompromising Justice.</Text>
                  </Text>
                  <Text style={styles.heroFounder}>
                    Founded by {HERO_CONTENT.founder}
                  </Text>
                  <Text style={[
                    styles.heroDescription,
                    isTablet && styles.heroDescriptionTablet,
                    isDesktop && styles.heroDescriptionDesktop
                  ]}>
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
                <View style={[
                  styles.heroWidgetColumn,
                  isMobile && styles.heroWidgetColumnMobile,
                  isDesktop && styles.heroWidgetColumnDesktop
                ]}>
                  <View style={styles.heroWidgetWrapper}>
                    <View style={styles.heroWidgetGlow} />
                    <AICaseAssessment />
                  </View>
                </View>
              </View>
            </Container>
          </View>

          {/* Statistics Section */}
          <View style={[
            styles.statsSection,
            isDesktop && styles.statsSectionDesktop
          ]}>
            <Container>
              <Statistics />
            </Container>
          </View>

          {/* Mission / Bio Section */}
          <View style={[
            styles.missionSection,
            isTablet && styles.missionSectionTablet,
            isDesktop && styles.missionSectionDesktop
          ]}>
            {/* Decorative background element */}
            <View style={styles.missionDecorativeBg} />
            
            <Container style={styles.missionContentContainer}>
              <View style={[
                styles.missionGrid,
                isMobile && styles.missionGridMobile,
                isDesktop && styles.missionGridDesktop
              ]}>
                <View style={[
                  styles.missionTextColumn,
                  isMobile && styles.missionTextColumnMobile,
                  isDesktop && styles.missionTextColumnDesktop
                ]}>
                  <Text style={styles.sectionSubtitle}>Who We Are</Text>
                  <Text style={[
                  styles.sectionTitleLight,
                  isTablet && styles.sectionTitleLightTablet,
                  isDesktop && styles.sectionTitleLightDesktop
                ]}>
                    The Firm That <Text style={styles.textBlue}>Fights Back</Text>
                  </Text>
                  <Text style={[
                  styles.bodyText,
                  isTablet && styles.bodyTextTablet
                ]}>
                    Founded by David Rodriguez, Sentinel Litigation stands apart in a crowded field. While competition handles broad legal matters, 
                    we specialize laser-focused on consumer fraud. David Rodriguez brings extensive experience and dedication to protecting consumers from corporate abuse.
                  </Text>
                  <Text style={[
                    styles.bodyText,
                    isTablet && styles.bodyTextTablet
                  ]}>
                    In the wake of recent Supreme Court decisions limiting class actions, we exploit every 
                    legal loophole—from small claims actions to quasi-class actions—to ensure your voice is heard.
                  </Text>
                  <View style={styles.quoteBox}>
                    <Text style={styles.quoteText}>
                      "Subtly aggressive, succinct, and powerful. Intellectually akin to the sharpest minds of our time."
                    </Text>
                  </View>
                </View>
                <View style={[
                  styles.missionCardColumn,
                  isMobile && styles.missionCardColumnMobile,
                  isDesktop && styles.missionCardColumnDesktop
                ]}>
                  <Card style={[
                    styles.missionCard,
                    isMobile && styles.missionCardMobile,
                    isDesktop && styles.missionCardDesktop
                  ]}>
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
                          <Text style={[styles.checkListText, { color: '#ffffff' }]}>{item}</Text>
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
          <View style={[
            styles.practiceSection,
            isTablet && styles.practiceSectionTablet,
            isDesktop && styles.practiceSectionDesktop
          ]}>
            <Container>
              <View style={styles.practiceHeader}>
                <View style={{ maxWidth: 672 }}>
                  <Text style={styles.sectionSubtitle}>Expertise</Text>
                  <Text style={[
                    styles.sectionTitleDark,
                    isTablet && styles.sectionTitleDarkTablet,
                    isDesktop && styles.sectionTitleDarkDesktop
                  ]}>
                    Our Practice Areas
                  </Text>
                  <Text style={[
                    styles.bodyTextDark,
                    isTablet && styles.bodyTextDarkTablet
                  ]}>
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

              <View style={[
                styles.practiceGrid,
                isTablet && styles.practiceGridTablet,
                isDesktop && styles.practiceGridDesktop
              ]}>
                {PRACTICE_AREAS.slice(0, 6).map((area) => (
                  <View key={area.id} style={getPracticeAreaStyle()}>
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
          <View style={[
            styles.testimonialsSection,
            isTablet && styles.testimonialsSectionTablet,
            isDesktop && styles.testimonialsSectionDesktop
          ]}>
            {/* AI-Themed Background Pattern */}
            <View style={styles.testimonialsPattern} />
            <View style={styles.aiFeatureContainer}>
              {/* Gradient Background */}
              <View style={styles.aiGradientBase} />
              {/* Geometric Shapes - AI Theme */}
              <View style={styles.aiShape1} />
              <View style={styles.aiShape2} />
              <View style={styles.aiShape3} />
              <View style={styles.aiShape4} />
              {/* Connecting Lines - Neural Network Style */}
              <View style={styles.aiAccentLine1} />
              <View style={styles.aiAccentLine2} />
              <View style={styles.aiAccentLine3} />
            </View>
            
            <Container style={{ position: 'relative', zIndex: 10 }}>
              {/* AI Anticipatory Widget */}
              <AIInsightsWidget />
              
              <View style={{ alignItems: 'center', marginBottom: 64 }}>
                <Text style={styles.sectionSubtitle}>Client Success</Text>
                <Text style={[
                  styles.sectionTitleLight,
                  isTablet && styles.sectionTitleLightTablet,
                  isDesktop && styles.sectionTitleLightDesktop
                ]}>
                  Hear From Our Clients
                </Text>
                <View style={styles.titleUnderline} />
              </View>
              
              <View style={[
                styles.practiceGrid,
                isTablet && styles.practiceGridTablet,
                isDesktop && styles.practiceGridDesktop
              ]}>
                {TESTIMONIALS.map((testimonial) => (
                  <View key={testimonial.id} style={getPracticeAreaStyle()}>
                    <View style={styles.testimonialCardWrapper}>
                       <TestimonialCard testimonial={testimonial} />
                    </View>
                  </View>
                ))}
              </View>
            </Container>
          </View>

          {/* Call to Action */}
          <View style={[
            styles.ctaSection,
            isTablet && styles.ctaSectionTablet,
            isDesktop && styles.ctaSectionDesktop
          ]}>
            <Container>
              <View style={[
                styles.ctaCard,
                isTablet && styles.ctaCardTablet,
                isDesktop && styles.ctaCardDesktop
              ]}>
                 <View style={styles.ctaOverlay} />
                 <View style={{ position: 'relative', zIndex: 10 }}>
                  <Text style={[
                    styles.ctaTitle,
                    isTablet && styles.ctaTitleTablet,
                    isDesktop && styles.ctaTitleDesktop
                  ]}>
                    Don't Let Them Get Away With It.
                  </Text>
                  <Text style={[
                    styles.ctaDescription,
                    isTablet && styles.ctaDescriptionTablet,
                    isDesktop && styles.ctaDescriptionDesktop
                  ]}>
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
    paddingVertical: 64, // Mobile-first: 64px on mobile
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
  },
  heroSectionTablet: {
    paddingVertical: 96,
  },
  heroSectionDesktop: {
    paddingVertical: 120,
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
    flexDirection: 'column', // Mobile-first: stack vertically
    alignItems: 'stretch',
    gap: 32, // Mobile gap
  },
  heroGridMobile: {
    // Already column, no changes needed
  },
  heroGridDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 64, // Desktop gap
  },
  heroTextColumn: {
    width: '100%', // Mobile: full width
  },
  heroTextColumnMobile: {
    marginBottom: 0,
  },
  heroTextColumnDesktop: {
    flex: 1,
    maxWidth: 768,
    minWidth: 0, // Allow flex to work properly
    width: 'auto',
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
    fontSize: 32, // Mobile-first: 32px
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24, // Mobile spacing
    lineHeight: 40, // Mobile line height
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroHeadingTablet: {
    fontSize: 48,
    lineHeight: 56,
    marginBottom: 32,
  },
  heroHeadingDesktop: {
    fontSize: 64,
    lineHeight: 72,
    marginBottom: 32,
  },
  heroHeadingHighlight: {
    color: '#3b82f6', // blue-500
  },
  heroFounder: {
    fontSize: 16, // Mobile-first
    color: '#60a5fa', // blue-400
    fontWeight: '600',
    marginBottom: 16,
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  heroDescription: {
    fontSize: 18, // Mobile-first: 18px
    color: '#cbd5e1', // slate-300
    marginBottom: 32, // Mobile spacing
    lineHeight: 28, // Mobile line height
    fontWeight: '300',
    maxWidth: '100%', // Mobile: full width
    letterSpacing: 0.2,
  },
  heroDescriptionTablet: {
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 40,
    maxWidth: 600,
    width: 'auto', // Allow maxWidth to work
  },
  heroDescriptionDesktop: {
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 48,
    maxWidth: 600,
    width: 'auto', // Allow maxWidth to work
  },
  heroButtonContainer: {
    flexDirection: 'row',
    gap: 20, // Increased gap
    flexWrap: 'wrap',
    marginBottom: 16,
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
    width: '100%', // Mobile: full width
    marginTop: 32, // Mobile spacing between text and widget
  },
  heroWidgetColumnMobile: {
    marginTop: 32,
  },
  heroWidgetColumnDesktop: {
    maxWidth: 480,
    flex: 1,
    minWidth: 300,
    marginTop: 0,
    width: 'auto',
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
    paddingVertical: 48, // Mobile-first: 48px
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  statsSectionDesktop: {
    paddingVertical: 64,
  },

  // Mission Section
  missionSection: {
    paddingVertical: 64, // Mobile-first: 64px
    backgroundColor: '#f8fafc', // slate-50
    position: 'relative',
  },
  missionSectionTablet: {
    paddingVertical: 96,
  },
  missionSectionDesktop: {
    paddingVertical: 120,
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
    flexDirection: 'column', // Mobile-first: stack vertically
    gap: 32, // Mobile gap
  },
  missionGridMobile: {
    // Already column
  },
  missionGridDesktop: {
    flexDirection: 'row',
    gap: 64, // Desktop gap
    alignItems: 'flex-start',
  },
  missionTextColumn: {
    width: '100%', // Mobile: full width
    marginBottom: 32, // Mobile spacing before card
  },
  missionTextColumnMobile: {
    marginBottom: 32,
  },
  missionTextColumnDesktop: {
    flex: 1,
    marginBottom: 0,
    minWidth: 0, // Allow flex to work properly
  },
  sectionSubtitle: {
    color: '#2563eb',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  sectionTitleLight: {
    fontSize: 28, // Mobile-first: 28px
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20, // Mobile spacing
    lineHeight: 36, // Mobile line height
    letterSpacing: -0.5,
  },
  sectionTitleLightTablet: {
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 24,
  },
  sectionTitleLightDesktop: {
    fontSize: 42,
    lineHeight: 50,
    marginBottom: 24,
  },
  sectionTitleDark: {
    fontSize: 28, // Mobile-first: 28px
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a', // dark on white
    marginBottom: 20, // Mobile spacing
    lineHeight: 36, // Mobile line height
    letterSpacing: -0.5,
  },
  sectionTitleDarkTablet: {
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 24,
  },
  sectionTitleDarkDesktop: {
    fontSize: 42,
    lineHeight: 50,
    marginBottom: 24,
  },
  textBlue: {
    color: '#2563eb',
  },
  bodyText: {
    fontSize: 16, // Mobile-first: 16px
    color: '#334155', // slate-700
    marginBottom: 20, // Mobile spacing
    lineHeight: 26, // Mobile line height (1.6x)
    letterSpacing: 0.1,
  },
  bodyTextTablet: {
    fontSize: 18,
    lineHeight: 29,
    marginBottom: 24,
  },
  bodyTextDark: {
    fontSize: 16, // Mobile-first: 16px
    color: '#475569',
    lineHeight: 26, // Mobile line height
    letterSpacing: 0.1,
  },
  bodyTextDarkTablet: {
    fontSize: 18,
    lineHeight: 29,
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
    width: '100%', // Mobile: full width
    position: 'relative',
    zIndex: 20,
  },
  missionCardColumnMobile: {
    marginTop: 0, // No negative margin on mobile
  },
  missionCardColumnDesktop: {
    maxWidth: 400,
    flex: 0,
    minWidth: 300,
    width: 'auto',
  },
  missionCard: {
    backgroundColor: '#0f172a', // slate-900 - dark background for white text
    padding: 24, // Mobile padding
    borderTopWidth: 8,
    borderTopColor: '#2563eb',
    borderWidth: 1,
    borderColor: '#334155', // slate-700 - darker border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    marginTop: 0, // Mobile: no negative margin
    borderRadius: 12, // Ensure rounded corners
  },
  missionCardMobile: {
    padding: 24,
  },
  missionCardDesktop: {
    padding: 40,
    marginTop: -32, // Desktop: float effect
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff', // white text for dark background
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
    backgroundColor: 'rgba(37, 99, 235, 0.2)', // blue-600 with opacity for dark background
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    flexShrink: 0,
  },
  checkDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#60a5fa', // blue-400 - lighter blue for dark background
  },
  checkListText: {
    color: '#ffffff', // white text
    fontWeight: '600', // Increased weight for better visibility
    fontSize: 18,
    flex: 1,
    lineHeight: 26,
  },
  missionCardFooter: {
    marginTop: 32,
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#334155', // slate-700 - darker border for dark background
  },

  // Practice Areas
  practiceSection: {
    paddingVertical: 64, // Mobile-first: 64px
    paddingTop: 80, // Extra top padding to prevent overlap
    backgroundColor: 'white',
  },
  practiceSectionTablet: {
    paddingVertical: 96,
    paddingTop: 112, // Extra top padding for tablet
  },
  practiceSectionDesktop: {
    paddingVertical: 120,
    paddingTop: 140, // Extra top padding for desktop
  },
  practiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 48, // Mobile spacing
  },
  practiceHeaderMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 48,
  },
  practiceHeaderDesktop: {
    marginBottom: 64,
  },
  practiceHeaderText: {
    maxWidth: '100%', // Mobile: full width
  },
  practiceHeaderTextDesktop: {
    maxWidth: 672,
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
    marginHorizontal: -12, // Negative margin to offset item padding
    alignItems: 'stretch', // Ensure cards stretch to same height
    justifyContent: 'flex-start', // Default alignment
    width: '100%', // Ensure full width
  },
  practiceGridTablet: {
    marginHorizontal: -12,
  },
  practiceGridDesktop: {
    marginHorizontal: -12,
  },
  practiceCardWrapper: {
    backgroundColor: '#0f172a', // slate-900 - dark background to match card
    height: '100%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#334155', // slate-700 - darker border for dark background
    overflow: 'hidden',
    width: '100%', // Ensure full width of parent
    flexShrink: 0, // Prevent shrinking
  },
  viewAllMobileContainer: {
    marginTop: 32,
    alignItems: 'center',
  },

  // Testimonials
  testimonialsSection: {
    paddingVertical: 64, // Mobile-first: 64px
    backgroundColor: '#f8fafc',
    position: 'relative',
    overflow: 'hidden',
  },
  testimonialsSectionTablet: {
    paddingVertical: 96,
  },
  testimonialsSectionDesktop: {
    paddingVertical: 120,
  },
  testimonialsPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8fafc', // Base color
    zIndex: 0,
  },
  aiFeatureContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  aiGradientBase: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(37, 99, 235, 0.04)',
    zIndex: 1,
  },
  aiShape1: {
    position: 'absolute',
    top: '12%',
    right: '8%',
    width: 140,
    height: 140,
    borderRadius: 24,
    backgroundColor: 'rgba(37, 99, 235, 0.15)',
    transform: [{ rotate: '45deg' }],
    borderWidth: 3,
    borderColor: 'rgba(37, 99, 235, 0.4)',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 6px 12px rgba(37, 99, 235, 0.3)',
    } as any),
  },
  aiShape2: {
    position: 'absolute',
    bottom: '18%',
    left: '6%',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    borderWidth: 3,
    borderColor: 'rgba(96, 165, 250, 0.5)',
    shadowColor: '#60a5fa',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 6px 12px rgba(96, 165, 250, 0.25)',
    } as any),
  },
  aiShape3: {
    position: 'absolute',
    top: '48%',
    right: '22%',
    width: 70,
    height: 70,
    borderRadius: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.18)',
    transform: [{ rotate: '-30deg' }],
    borderWidth: 2.5,
    borderColor: 'rgba(59, 130, 246, 0.45)',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.2)',
    } as any),
  },
  aiShape4: {
    position: 'absolute',
    top: '65%',
    left: '15%',
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(37, 99, 235, 0.15)',
    transform: [{ rotate: '20deg' }],
    borderWidth: 2,
    borderColor: 'rgba(37, 99, 235, 0.4)',
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
    } as any),
  },
  aiAccentLine1: {
    position: 'absolute',
    top: '22%',
    left: '5%',
    width: '35%',
    height: 3,
    backgroundColor: 'rgba(37, 99, 235, 0.3)',
    transform: [{ rotate: '-8deg' }],
    borderRadius: 2,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
    } as any),
  },
  aiAccentLine2: {
    position: 'absolute',
    bottom: '28%',
    left: '35%',
    width: '40%',
    height: 3,
    backgroundColor: 'rgba(96, 165, 250, 0.25)',
    transform: [{ rotate: '10deg' }],
    borderRadius: 2,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(96, 165, 250, 0.2)',
    } as any),
  },
  aiAccentLine3: {
    position: 'absolute',
    top: '55%',
    right: '12%',
    width: '25%',
    height: 2.5,
    backgroundColor: 'rgba(59, 130, 246, 0.25)',
    transform: [{ rotate: '-15deg' }],
    borderRadius: 2,
    zIndex: 2,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
    } as any),
  },
  titleUnderline: {
    width: 96,
    height: 4,
    backgroundColor: '#2563eb',
    borderRadius: 2,
    marginTop: 24,
  },
  testimonialCardWrapper: {
    backgroundColor: '#0f172a', // slate-900 - dark background to match card
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    height: '100%',
    borderWidth: 1,
    borderColor: '#334155', // slate-700 - darker border for dark background
    width: '100%', // Ensure full width of parent
  },

  // CTA
  ctaSection: {
    paddingVertical: 64, // Mobile-first: 64px
    backgroundColor: 'white',
  },
  ctaSectionTablet: {
    paddingVertical: 80,
  },
  ctaSectionDesktop: {
    paddingVertical: 100,
  },
  ctaCard: {
    backgroundColor: '#0f172a',
    borderRadius: 16, // Mobile-first: 16px
    padding: 24, // Mobile padding
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
  },
  ctaCardTablet: {
    padding: 40,
    borderRadius: 18,
  },
  ctaCardDesktop: {
    padding: 64,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
  ctaOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.2)', // blue-900/20
  },
  ctaTitle: {
    fontSize: 28, // Mobile-first: 28px
    fontWeight: 'bold',
    color: 'white',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    marginBottom: 16, // Mobile spacing
    textAlign: 'center',
    lineHeight: 36, // Mobile line height
    letterSpacing: -0.5,
  },
  ctaTitleTablet: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 20,
  },
  ctaTitleDesktop: {
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 20,
    alignSelf: 'center', // Center on desktop
  },
  ctaDescription: {
    fontSize: 16, // Mobile-first: 16px
    color: '#cbd5e1',
    marginBottom: 32, // Mobile spacing
    maxWidth: '100%', // Mobile: full width
    textAlign: 'center',
    lineHeight: 26, // Mobile line height
    letterSpacing: 0.1,
  },
  ctaDescriptionTablet: {
    fontSize: 18,
    lineHeight: 29,
    marginBottom: 40,
    maxWidth: 600,
  },
  ctaDescriptionDesktop: {
    fontSize: 18,
    lineHeight: 29,
    marginBottom: 40,
    maxWidth: 600,
    alignSelf: 'center', // Center on desktop
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
  // AI Anticipatory Insight Card
  aiInsightCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 48,
    marginHorizontal: 0,
    borderWidth: 3,
    borderColor: '#2563eb',
    borderStyle: 'solid',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 15,
    position: 'relative',
    overflow: 'visible',
    width: '100%',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35), 0 0 0 3px rgba(37, 99, 235, 0.2)',
    } as any),
  },
  aiInsightCardMobile: {
    padding: 16,
    marginBottom: 32,
  },
  aiInsightCardDesktop: {
    padding: 28,
    maxWidth: 800,
    alignSelf: 'center',
  },
  aiInsightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    ...(Platform.OS === 'web' ? { gap: 12 } : {}),
  },
  aiPulseIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 0 12px rgba(16, 185, 129, 0.8), 0 0 0 2px rgba(255, 255, 255, 1)',
    }),
  },
  aiInsightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
    letterSpacing: 0.5,
  },
  aiBadge: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1e40af',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    }),
  },
  aiBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  aiInsightContent: {
    ...(Platform.OS === 'web' ? { gap: 12 } : {}),
  },
  aiInsightQuestion: {
    fontSize: 14,
    color: '#64748b',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  aiInsightAnswer: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '600',
    lineHeight: 24,
  },
  aiInsightDivider: {
    height: 1,
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    marginVertical: 4,
  },
  aiInsightResponse: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    fontWeight: '400',
  },
  aiQuickFacts: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(37, 99, 235, 0.1)',
  },
  aiQuickFact: {
    flex: 1,
    alignItems: 'center',
  },
  aiQuickFactLabel: {
    fontSize: 11,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
    fontWeight: '600',
  },
  aiQuickFactValue: {
    fontSize: 20,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  aiQuickFactDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(37, 99, 235, 0.15)',
    marginHorizontal: 12,
  },
});
