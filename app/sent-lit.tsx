import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import { Navigation } from '../src/components/Navigation';
import { Footer } from '../src/components/Footer';
import { Container } from '../src/components/Container';
import { AICaseAssessment } from '../src/components/AICaseAssessment';
import { SEOHead } from '../src/components/SEOHead';

export default function SentLit() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  return (
    <>
      <SEOHead 
        title="Sent Lit | Sentinel Litigation - Get Legal Advice When You Need It"
        description="Feeling a little buzzed and need legal advice? Tell us about your situation and we'll assess your case's potential immediately."
      />
      <Stack.Screen options={{ title: 'Sent Lit', headerShown: false }} />
      <View style={styles.pageContainer}>
        <Navigation />
        
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Hero Section */}
          <View style={[
            styles.heroSection,
            isDesktop && styles.heroSectionDesktop
          ]}>
            <Container style={styles.heroContentContainer}>
              <View style={styles.contentWrapper}>
                {/* Title */}
                <Text style={[
                  styles.mainTitle,
                  isMobile && styles.mainTitleMobile,
                  isDesktop && styles.mainTitleDesktop
                ]}>
                  Sent Lit
                </Text>
                
                {/* Subtitle */}
                <Text style={[
                  styles.subtitle,
                  isMobile && styles.subtitleMobile,
                  isDesktop && styles.subtitleDesktop
                ]}>
                  Buzzed? In Trouble?...
                </Text>
                
                {/* Lead-in Paragraph */}
                <Text style={[
                  styles.leadInText,
                  isMobile && styles.leadInTextMobile,
                  isDesktop && styles.leadInTextDesktop
                ]}>
                  Okay, so you're a little buzzed and you need legal advice... tell us about your situation and we will assess your case's potential immediately*
                </Text>
                
                {/* AI Assessment Component */}
                <View style={[
                  styles.aiComponentWrapper,
                  isMobile && styles.aiComponentWrapperMobile,
                  isDesktop && styles.aiComponentWrapperDesktop
                ]}>
                  <AICaseAssessment
                    title="Tell Us What Happened"
                    description="Describe your situation below and get an immediate AI-powered assessment of your case potential."
                    systemPrompt="Act as a senior consumer protection attorney who understands that clients may reach out at any time, including after having drinks. Be empathetic, non-judgmental, and focus on the facts of their situation. Analyze their case with the same professionalism you would any other inquiry."
                    disclaimer="*This does not constitute legal advice"
                    buttonText="Assess My Case"
                    placeholder="Describe your situation... (e.g., 'I got pulled over after a few drinks and...')"
                    showDisclaimerAboveResults={true}
                  />
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
  heroSection: {
    backgroundColor: '#0f172a',
    paddingVertical: 64, // Mobile-first: 64px on mobile
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
  },
  heroSectionDesktop: {
    paddingVertical: 120,
  },
  heroContentContainer: {
    position: 'relative',
    zIndex: 20,
  },
  contentWrapper: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  mainTitle: {
    fontSize: 48, // Mobile-first
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 56,
    letterSpacing: -0.5,
  },
  mainTitleMobile: {
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 12,
  },
  mainTitleDesktop: {
    fontSize: 64,
    lineHeight: 72,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 24, // Mobile-first
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: '600',
    color: '#60a5fa', // blue-400
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitleMobile: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 24,
  },
  subtitleDesktop: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 40,
  },
  leadInText: {
    fontSize: 18, // Mobile-first
    color: '#cbd5e1', // slate-300
    marginBottom: 48,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  leadInTextMobile: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 40,
  },
  leadInTextDesktop: {
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 56,
  },
  aiComponentWrapper: {
    width: '100%',
  },
  aiComponentWrapperMobile: {
    paddingHorizontal: 0,
  },
  aiComponentWrapperDesktop: {
    paddingHorizontal: 0,
  },
});

