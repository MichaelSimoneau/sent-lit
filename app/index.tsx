import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
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

export default function Home() {
  const { width } = useWindowDimensions();
  const getPracticeAreaWidth = () => {
    if (width >= 1024) return '33.333%'; // lg: 3 columns
    if (width >= 768) return '50%'; // md: 2 columns
    return '100%'; // mobile: 1 column
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        
        <ScrollView>
          {/* Hero Section */}
          <View className="bg-primary dark:bg-slate-950 py-20 lg:py-32 relative overflow-hidden">
             {/* Gradient Overlay for visual depth */}
             <View className="absolute inset-0 bg-slate-900/50 pointer-events-none" />
             
            <Container>
               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
                <View style={{ flex: 1, minWidth: 300, maxWidth: 768 }}>
                  <Text className="text-slate-400 font-bold uppercase tracking-wider mb-4">
                    Consumer Fraud Protection
                  </Text>
                  <Text className="text-4xl font-serif font-bold text-white mb-6">
                    {HERO_CONTENT.main}. <Text className="text-blue-600">Uncompromising Justice.</Text>
                  </Text>
                  <Text className="text-lg text-slate-300 mb-8">
                    {HERO_CONTENT.description}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
                    <Button title="Get Free Consultation" size="lg" onPress={() => {}} />
                    <Button title="Learn More" variant="outline" size="lg" className="border-white text-white" onPress={() => {}} />
                  </View>
                </View>
                
                {/* AI Assessment Widget Integration */}
                <View style={{ width: '100%', maxWidth: 450, flex: 1, minWidth: 300 }}>
                  <AICaseAssessment />
                </View>
              </View>
            </Container>
          </View>

          {/* Statistics Section */}
          <View className="bg-slate-900 py-12">
            <Container>
              <Statistics />
            </Container>
          </View>

          {/* Mission / Bio Section */}
          <View className="py-20 bg-slate-50 dark:bg-slate-900">
            <Container>
              <View style={{ flexDirection: 'row', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <View style={{ flex: 1, minWidth: 300 }}>
                  <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-serif">
                    The Firm
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                    Sentinel Litigation stands apart in a crowded field. While competition handles broad legal matters, 
                    we specialize laser-focused on consumer fraud.
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                    In the wake of recent Supreme Court decisions limiting class actions, we exploit every 
                    legal loophole—from small claims actions to quasi-class actions—to ensure your voice is heard.
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg italic border-l-4 border-blue-600 pl-4">
                    "Subtly aggressive, succinct, and powerful. Intellectually akin to the sharpest minds of our time."
                  </Text>
                </View>
                <View style={{ width: '100%', maxWidth: 400, flex: 0, minWidth: 300 }}>
                  <Card className="bg-white p-8 border-t-4 border-t-accent">
                    <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Why Choose Us?
                    </Text>
                    <View>
                      {[
                        'Specialized in Consumer Fraud',
                        'Arbitration Loophole Experts',
                        'State & Federal Court Experience',
                        'Aggressive Representation'
                      ].map((item, i) => (
                        <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 }}>
                          <View className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3" />
                          <Text className="text-slate-600 flex-1">{item}</Text>
                        </View>
                      ))}
                    </View>
                  </Card>
                </View>
              </View>
            </Container>
          </View>

          {/* Practice Areas Preview */}
          <View className="py-20 bg-white dark:bg-slate-950">
            <Container>
              <View className="flex-row justify-between items-end mb-12">
                <View>
                  <Text className="text-primary font-bold uppercase tracking-wider mb-2">Expertise</Text>
                  <Text className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
                    Our Practice Areas
                  </Text>
                </View>
                <Link href="/practice-areas" asChild>
                  <TouchableOpacity>
                    <Text className="text-primary font-bold text-lg hover:underline">View All Areas →</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View className="flex-row flex-wrap" style={{ marginHorizontal: -16 }}>
                {PRACTICE_AREAS.slice(0, 6).map((area) => (
                  <View key={area.id} style={{ width: getPracticeAreaWidth(), padding: 16 }}>
                    <PracticeAreaCard area={area} />
                  </View>
                ))}
              </View>
            </Container>
          </View>

          {/* Testimonials */}
          <View className="py-20 bg-slate-50 dark:bg-slate-900">
            <Container>
              <Text className="text-center text-primary font-bold uppercase tracking-wider mb-4">Client Success</Text>
              <Text className="text-center text-4xl font-serif font-bold text-slate-900 dark:text-white mb-12">
                Hear From Our Clients
              </Text>
              
              <View className="flex-row flex-wrap justify-center" style={{ marginHorizontal: -16 }}>
                {TESTIMONIALS.map((testimonial) => (
                  <View key={testimonial.id} style={{ width: getPracticeAreaWidth(), padding: 16 }}>
                    <TestimonialCard testimonial={testimonial} />
                  </View>
                ))}
              </View>
            </Container>
          </View>

          {/* Call to Action */}
          <View className="py-20">
            <Container>
              <View className="bg-primary dark:bg-slate-800 rounded-2xl p-8 md:p-12 text-center">
                <Text className="text-3xl font-bold text-white mb-4 font-serif">
                  Don't Let Them Get Away With It.
                </Text>
                <Text className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  If you've been the victim of fraud, time is of the essence. Contact us today for a confidential evaluation of your case.
                </Text>
                <View className="flex-row flex-wrap justify-center" style={{ gap: 16 }}>
                  <Button 
                    title="Get Free AI Assessment" 
                    size="lg" 
                    className="bg-white text-primary active:bg-slate-100"
                    onPress={() => {}} 
                  />
                  <Button 
                    title="Contact Us Now" 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onPress={() => {}} 
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
