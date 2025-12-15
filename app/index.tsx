import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Navigation } from '../src/components/Navigation';
import { Footer } from '../src/components/Footer';
import { Container } from '../src/components/Container';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        
        <ScrollView>
          {/* Hero Section */}
          <View className="bg-primary dark:bg-slate-950 py-20 lg:py-32">
            <Container>
              <View className="max-w-3xl">
                <Text className="text-primary-light font-bold uppercase tracking-wider mb-4">
                  Consumer Fraud Protection
                </Text>
                <Text className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                  Bold Advocacy. <Text className="text-accent">Uncompromising Justice.</Text>
                </Text>
                <Text className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
                  Specializing in cases where individuals, families, and entities have been defrauded. 
                  We navigate the complex loopholes of arbitration clauses to bring you justice.
                </Text>
                <View className="flex-row gap-4">
                  <Button title="Get Free Consultation" size="lg" onPress={() => {}} />
                  <Button title="Learn More" variant="outline" size="lg" className="border-white text-white" onPress={() => {}} />
                </View>
              </View>
            </Container>
          </View>

          {/* Mission / Bio Section */}
          <View className="py-20 bg-slate-50 dark:bg-slate-900">
            <Container>
              <View className="flex-col lg:flex-row gap-12 items-center">
                <View className="flex-1">
                  <Text className="text-3xl font-bold text-primary dark:text-white mb-6 font-serif">
                    The Firm
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    Sentinel Litigation stands apart in a crowded field. While competition handles broad legal matters, 
                    we specialize laser-focused on consumer fraud.
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    In the wake of recent Supreme Court decisions limiting class actions, we exploit every 
                    legal loophole—from small claims actions to quasi-class actions—to ensure your voice is heard.
                  </Text>
                  <Text className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic border-l-4 border-accent pl-4">
                    "Subtly aggressive, succinct, and powerful. Intellectually akin to the sharpest minds of our time."
                  </Text>
                </View>
                <View className="w-full lg:w-1/3">
                  <Card className="bg-white p-8 border-t-4 border-t-accent">
                    <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Why Choose Us?
                    </Text>
                    <View className="space-y-4">
                      <View className="flex-row items-start gap-3">
                        <View className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <Text className="text-slate-600 flex-1">Specialized in Consumer Fraud</Text>
                      </View>
                      <View className="flex-row items-start gap-3">
                        <View className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <Text className="text-slate-600 flex-1">Arbitration Loophole Experts</Text>
                      </View>
                      <View className="flex-row items-start gap-3">
                        <View className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <Text className="text-slate-600 flex-1">State & Federal Court Experience</Text>
                      </View>
                      <View className="flex-row items-start gap-3">
                        <View className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <Text className="text-slate-600 flex-1">Aggressive Representation</Text>
                      </View>
                    </View>
                  </Card>
                </View>
              </View>
            </Container>
          </View>

          {/* Call to Action */}
          <View className="py-20">
            <Container>
              <View className="bg-primary dark:bg-slate-800 rounded-2xl p-8 lg:p-12 text-center">
                <Text className="text-3xl font-bold text-white mb-4 font-serif">
                  Don't Let Them Get Away With It.
                </Text>
                <Text className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  If you've been the victim of fraud, time is of the essence. Contact us today for a confidential evaluation of your case.
                </Text>
                <Button 
                  title="Contact Us Now" 
                  size="lg" 
                  className="bg-white text-primary active:bg-slate-100 self-center"
                  onPress={() => {}} 
                />
              </View>
            </Container>
          </View>

          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
