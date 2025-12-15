import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';

// Mock Data
const ACTIVE_CASES = [
  { id: '12345', title: 'Smith v. Credit Corp', status: 'Discovery', nextDate: 'Nov 15, 2023', lastUpdate: 'Defendant filed answer to complaint.' },
];

export default function PortalIndex() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <>
        <Stack.Screen options={{ title: 'Client Portal', headerShown: false }} />
        <View className="flex-1 bg-white dark:bg-slate-900 justify-center items-center p-6">
          <Card className="w-full max-w-md">
            <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Client Portal Login</Text>
            
            <View className="space-y-4">
              <View>
                <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</Text>
                <TextInput 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="you@example.com" 
                />
              </View>
              <View>
                <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Password</Text>
                <TextInput 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="••••••••" 
                  secureTextEntry 
                />
              </View>
              
              <Button 
                title="Sign In" 
                onPress={() => setIsLoggedIn(true)}
                className="mt-4"
              />
              
              <TouchableOpacity className="items-center mt-4">
                <Text className="text-slate-500">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Dashboard', headerShown: false }} />
      <View className="flex-1 bg-slate-50 dark:bg-slate-900">
        <Navigation />
        
        <ScrollView>
          <Container className="py-8">
            <View className="flex-row justify-between items-center mb-8">
              <View>
                <Text className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, John</Text>
                <Text className="text-slate-500">Here's what's happening with your cases.</Text>
              </View>
              <Button 
                title="Sign Out" 
                variant="outline"
                onPress={() => setIsLoggedIn(false)}
              />
            </View>

            <Card className="mb-8">
              <Text className="text-xl font-bold text-slate-900 dark:text-white mb-4">Active Cases</Text>
              
              {ACTIVE_CASES.map(c => (
                <TouchableOpacity 
                  key={c.id} 
                  className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  onPress={() => router.push(`/portal/case/${c.id}`)}
                >
                  <View className="flex-row justify-between items-start mb-2">
                    <View>
                      <Text className="text-lg font-bold text-primary">{c.title}</Text>
                      <Text className="text-slate-500 text-sm">Case #{c.id}</Text>
                    </View>
                    <View className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                      <Text className="text-blue-700 dark:text-blue-300 font-bold text-xs">{c.status}</Text>
                    </View>
                  </View>
                  
                  <View className="flex-row gap-6 mt-2">
                    <View>
                      <Text className="text-xs text-slate-400 uppercase">Next Event</Text>
                      <Text className="text-slate-700 dark:text-slate-300 font-medium">{c.nextDate}</Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-xs text-slate-400 uppercase">Latest Update</Text>
                      <Text className="text-slate-700 dark:text-slate-300 font-medium truncate">{c.lastUpdate}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </Card>

            <View className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</Text>
                <View className="space-y-3">
                  <Button 
                    title="Upload Document" 
                    variant="secondary"
                    className="w-full justify-start"
                  />
                  <Button 
                    title="Message Attorney" 
                    variant="secondary"
                    className="w-full justify-start"
                  />
                  <Button 
                    title="Ask AI Assistant" 
                    variant="secondary"
                    className="w-full justify-start"
                  />
                </View>
              </Card>

              <View className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 shadow-lg">
                <Text className="text-white font-bold text-lg mb-2">AI Case Insight</Text>
                <Text className="text-blue-100 text-sm mb-4">
                  Based on the defendant's answer filed yesterday, our AI predicts the discovery phase will last approximately 3 months.
                </Text>
                <View className="bg-white/10 rounded-lg p-3">
                  <Text className="text-white font-medium text-xs">Estimated Success Probability</Text>
                  <View className="flex-row items-end gap-2 mt-1">
                    <Text className="text-white font-bold text-2xl">78%</Text>
                    <Text className="text-green-300 text-xs mb-1">↑ 2% from last week</Text>
                  </View>
                </View>
              </View>
            </View>
          </Container>
        </ScrollView>
      </View>
    </>
  );
}

