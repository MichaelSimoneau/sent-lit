import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Modal } from 'react-native';
import { AIService } from '../services/ai/gemini';
import { useRouter } from 'expo-router';

export function AISearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setShowResults(true);
    
    try {
      // Use assessCase for now as a general "search/understanding" tool
      // In a real app, we might have a dedicated 'semantic search' function
      const assessment = await AIService.assessCase(query);
      setResults(assessment);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <View className="relative z-50">
      <View className="flex-row items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-full max-w-md">
        <TextInput
          className="flex-1 text-slate-900 dark:text-white text-base mr-2 outline-none"
          placeholder="Ask AI: 'I was harassed by a collector...'"
          placeholderTextColor="#94a3b8"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} disabled={isSearching}>
          {isSearching ? (
            <ActivityIndicator size="small" color="#2685C7" />
          ) : (
            <Text className="text-primary font-semibold">Ask AI</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* AI Results Modal/Dropdown */}
      {showResults && (
        <View className="absolute top-12 left-0 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 max-h-96">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-sm font-bold text-slate-500 uppercase">AI Analysis</Text>
            <TouchableOpacity onPress={() => setShowResults(false)}>
              <Text className="text-slate-400">Close</Text>
            </TouchableOpacity>
          </View>
          
          {isSearching ? (
            <Text className="text-slate-500 text-center py-4">Analyzing your query...</Text>
          ) : results ? (
            <View>
              <Text className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                Strength: {results.caseStrength}/10
              </Text>
              <Text className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                {results.summary}
              </Text>
              
              <Text className="font-semibold text-primary mb-2 text-sm">Recommended Areas:</Text>
              <View className="flex-row flex-wrap gap-2 mb-4">
                {results.recommendedPracticeAreas.map((area: string, i: number) => (
                  <TouchableOpacity 
                    key={i}
                    className="bg-primary/10 px-3 py-1 rounded-full"
                    onPress={() => {
                      // Simple routing logic - in real app match slug
                      router.push('/practice-areas');
                      setShowResults(false);
                    }}
                  >
                    <Text className="text-primary text-xs font-medium">{area}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              
              <TouchableOpacity 
                className="bg-primary py-2 rounded-lg items-center"
                onPress={() => {
                  router.push('/contact'); // Should go to consultation with pre-filled info
                  setShowResults(false);
                }}
              >
                <Text className="text-white font-bold text-sm">Get Free Consultation</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text className="text-red-500">Failed to analyze. Please try again.</Text>
          )}
        </View>
      )}
    </View>
  );
}

