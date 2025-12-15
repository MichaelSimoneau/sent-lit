import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, Link } from 'expo-router';
import { Container } from '../../../src/components/Container';
import { Navigation } from '../../../src/components/Navigation';

export default function CaseDetail() {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <>
      <Stack.Screen options={{ title: `Case #${id}`, headerShown: false }} />
      <View className="flex-1 bg-slate-50 dark:bg-slate-900">
        <Navigation />
        
        <ScrollView>
          <Container>
            <View className="py-8">
              <Link href="/portal" asChild>
                <TouchableOpacity>
                  <Text className="text-slate-500 mb-4">← Back to Dashboard</Text>
                </TouchableOpacity>
              </Link>
              
              <View className="flex-row justify-between items-start mb-6">
                <View>
                  <Text className="text-3xl font-bold text-slate-900 dark:text-white">Smith v. Credit Corp</Text>
                  <Text className="text-slate-500">Case #{id} • Consumer Fraud</Text>
                </View>
                <View className="bg-green-100 px-4 py-2 rounded-full">
                  <Text className="text-green-700 font-bold">Active</Text>
                </View>
              </View>

              {/* AI Summary Banner */}
              <View className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/20 mb-8 shadow-sm">
                <View className="flex-row items-center mb-2">
                  <Text className="text-xs font-bold text-primary uppercase tracking-wider mr-2">AI Daily Summary</Text>
                  <View className="h-px flex-1 bg-slate-100 dark:bg-slate-700" />
                </View>
                <Text className="text-slate-700 dark:text-slate-300 text-lg">
                  "No new filings today. The next deadline is "
                  <Text className="font-bold">November 15</Text>
                  " for the initial status hearing. We are currently waiting for the opposing counsel to respond to our settlement demand."
                </Text>
              </View>

              {/* Tabs */}
              <View className="flex-row border-b border-slate-200 dark:border-slate-700 mb-6">
                {['timeline', 'documents', 'billing'].map(tab => (
                  <TouchableOpacity 
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    className={`mr-8 pb-4 border-b-2 ${activeTab === tab ? 'border-primary' : 'border-transparent'}`}
                  >
                    <Text className={`font-bold capitalize ${activeTab === tab ? 'text-primary' : 'text-slate-500'}`}>
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {activeTab === 'timeline' && (
                <View className="space-y-6 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
                  {[
                    { date: 'Oct 24, 2023', title: 'Defendant Filed Answer', desc: 'Credit Corp denies allegations.' },
                    { date: 'Oct 01, 2023', title: 'Complaint Filed', desc: 'Case initiated in Cook County Court.' },
                    { date: 'Sep 15, 2023', title: 'Demand Letter Sent', desc: 'Sent via certified mail.' },
                  ].map((event, i) => (
                    <View key={i} className="relative pl-8">
                      <View className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-50 dark:border-slate-900" />
                      <Text className="text-sm font-bold text-slate-500 mb-1">{event.date}</Text>
                      <Text className="text-lg font-bold text-slate-900 dark:text-white mb-1">{event.title}</Text>
                      <Text className="text-slate-600 dark:text-slate-400">{event.desc}</Text>
                    </View>
                  ))}
                </View>
              )}
              
              {activeTab === 'documents' && (
                <View>
                  <TouchableOpacity className="bg-primary/10 border border-primary/30 border-dashed rounded-xl p-8 items-center justify-center mb-6">
                    <Text className="text-primary font-bold text-lg mb-2">Upload New Document</Text>
                    <Text className="text-slate-500">Drag & drop or click to browse</Text>
                  </TouchableOpacity>
                  
                  <View className="space-y-4">
                    {[
                      { name: 'Complaint.pdf', type: 'Court Filing', date: 'Oct 01, 2023' },
                      { name: 'Retainer_Agreement.pdf', type: 'Contract', date: 'Sep 10, 2023' },
                    ].map((doc, i) => (
                      <View key={i} className="flex-row items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                        <View className="flex-row items-center">
                          <View className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg items-center justify-center mr-4">
                            <Text>📄</Text>
                          </View>
                          <View>
                            <Text className="font-bold text-slate-900 dark:text-white">{doc.name}</Text>
                            <Text className="text-slate-500 text-xs">{doc.type} • {doc.date}</Text>
                          </View>
                        </View>
                        <TouchableOpacity>
                          <Text className="text-primary font-bold">Download</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                </View>
              )}

            </View>
          </Container>
        </ScrollView>
      </View>
    </>
  );
}

