import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AIService } from '../services/ai/gemini';
import { AIAssessment } from '../types/content';
import { HERO_CONTENT } from '../constants/content';

export function AICaseAssessment() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAssessment | null>(null);

  const handleAssessment = async () => {
    if (description.length < 10) return;
    
    setLoading(true);
    try {
      const assessment = await AIService.assessCase(description);
      setResult(assessment);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <View className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-slate-900 dark:text-white">AI Case Analysis</Text>
          <View className={`px-3 py-1 rounded-full ${result.caseStrength >= 7 ? 'bg-green-100' : 'bg-yellow-100'}`}>
            <Text className={`font-bold ${result.caseStrength >= 7 ? 'text-green-700' : 'text-yellow-700'}`}>
              Strength: {result.caseStrength}/10
            </Text>
          </View>
        </View>
        
        <Text className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {result.summary}
        </Text>

        <View className="mb-6">
          <Text className="font-semibold text-slate-900 dark:text-white mb-2">Recommended Steps:</Text>
          {result.nextSteps.map((step, i) => (
            <View key={i} className="flex-row items-start mb-2">
              <View className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
              <Text className="text-slate-600 dark:text-slate-400 flex-1">{step}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          className="bg-primary py-3 rounded-xl items-center shadow-lg shadow-primary/30"
          onPress={() => {/* Navigate to full consultation with data */}}
        >
          <Text className="text-white font-bold text-lg">Proceed to Full Consultation</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="mt-4 items-center"
          onPress={() => setResult(null)}
        >
          <Text className="text-slate-400 text-sm">Start Over</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/20">
      <View className="mb-6">
        <View className="flex-row items-center mb-2">
          <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
          <Text className="text-primary font-bold uppercase tracking-wider text-xs">AI-Powered Analysis</Text>
        </View>
        <Text className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
          Do You Have a Case?
        </Text>
        <Text className="text-slate-500 dark:text-slate-400">
          Get a preliminary AI assessment in under 2 minutes. Confidential & Free.
        </Text>
      </View>

      <View className="mb-6">
        <TextInput
          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-slate-900 dark:text-white h-32 text-base"
          placeholder="Describe your situation... (e.g., 'I bought a car and the dealer lied about the accident history')"
          placeholderTextColor="#94a3b8"
          multiline
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity 
        className={`bg-primary py-4 rounded-xl items-center shadow-lg shadow-primary/30 flex-row justify-center ${loading ? 'opacity-80' : ''}`}
        onPress={handleAssessment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" className="mr-2" />
        ) : null}
        <Text className="text-white font-bold text-lg">
          {loading ? 'Analyzing...' : HERO_CONTENT.ctaPrimary}
        </Text>
      </TouchableOpacity>
      
      <Text className="text-center text-slate-400 text-xs mt-4">
        AI assessment does not constitute legal advice.
      </Text>
    </View>
  );
}

