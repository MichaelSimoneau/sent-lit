import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { Container } from '../src/components/Container';
import { Footer } from '../src/components/Footer';
import { Navigation } from '../src/components/Navigation';
import { ConsultationForm } from '../src/components/ConsultationForm';
import { COMPANY_INFO } from '../src/constants/content';
import { Card } from '../src/components/Card';

export default function Contact() {
  return (
    <>
      <Stack.Screen options={{ title: 'Contact Us', headerShown: false }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        
        <ScrollView>
          <View className="bg-slate-900 py-16">
            <Container>
              <Text className="text-4xl font-serif font-bold text-white mb-4">Contact Us</Text>
              <Text className="text-slate-400">Get in touch with our legal team today.</Text>
            </Container>
          </View>

          <Container className="py-12">
            <View className="flex-col lg:flex-row gap-16">
              {/* Contact Info */}
              <View className="flex-1 space-y-8">
                <Card>
                  <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">Office Location</Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-400">
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}
                  </Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-400">
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </Text>
                  <TouchableOpacity onPress={() => Linking.openURL(COMPANY_INFO.mapUrl)}>
                    <Text className="text-primary font-bold mt-2">Get Directions →</Text>
                  </TouchableOpacity>
                </Card>

                <Card>
                  <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">Phone & Email</Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-400 mb-1">
                    Phone: <Text className="font-bold">{COMPANY_INFO.phone}</Text>
                  </Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-400">
                    Email: {COMPANY_INFO.email}
                  </Text>
                </Card>

                <Card>
                  <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">Office Hours</Text>
                  <Text className="text-slate-600 dark:text-slate-400">Monday - Friday: 9:00 AM - 5:00 PM</Text>
                  <Text className="text-slate-600 dark:text-slate-400">Saturday - Sunday: Closed</Text>
                </Card>

                <Card className="bg-slate-100 dark:bg-slate-800">
                  <Text className="font-bold text-slate-900 dark:text-white mb-2">Emergency?</Text>
                  <Text className="text-slate-600 dark:text-slate-400 text-sm">
                    If you have an urgent matter regarding a recent vehicle repossession or frozen bank account, please call us immediately.
                  </Text>
                </Card>
              </View>

              {/* Form */}
              <View className="flex-[1.5]">
                <Card>
                  <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Send Us a Message
                  </Text>
                  <ConsultationForm />
                </Card>
              </View>
            </View>
          </Container>
          
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}

