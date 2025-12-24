import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Modal, StyleSheet, Platform } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Ask AI: 'I was harassed by a collector...'"
          placeholderTextColor="#94a3b8"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearch} 
          disabled={isSearching}
        >
          {isSearching ? (
            <ActivityIndicator size="small" color="#2563eb" />
          ) : (
            <Text style={styles.searchButtonText}>Ask AI</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* AI Results Modal/Dropdown */}
      {showResults && (
        <View style={styles.resultsContainer}>
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsHeaderText}>AI Analysis</Text>
            <TouchableOpacity onPress={() => setShowResults(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
          
          {isSearching ? (
            <Text style={styles.loadingText}>Analyzing your query...</Text>
          ) : results ? (
            <View>
              <Text style={styles.strengthText}>
                Strength: {results.caseStrength}/10
              </Text>
              <Text style={styles.summaryText}>
                {results.summary}
              </Text>
              
              <Text style={styles.recommendedLabel}>Recommended Areas:</Text>
              <View style={styles.tagsContainer}>
                {results.recommendedPracticeAreas.map((area: string, i: number) => (
                  <TouchableOpacity 
                    key={i}
                    style={styles.tag}
                    onPress={() => {
                      // Simple routing logic - in real app match slug
                      router.push('/practice-areas');
                      setShowResults(false);
                    }}
                  >
                    <Text style={styles.tagText}>{area}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              
              <TouchableOpacity 
                style={styles.consultationButton}
                onPress={() => {
                  router.push('/contact'); // Should go to consultation with pre-filled info
                  setShowResults(false);
                }}
              >
                <Text style={styles.consultationButtonText}>Get Free Consultation</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.errorText}>Failed to analyze. Please try again.</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#0f172a',
    fontSize: 15,
    marginRight: 8,
    paddingVertical: Platform.OS === 'web' ? 4 : 0,
    ...(Platform.OS === 'web' && { outlineStyle: 'none' as any }),
  },
  searchButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchButtonText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 14,
  },
  resultsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 16,
    maxHeight: 384,
    zIndex: 10000,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultsHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
  },
  closeButton: {
    color: '#94a3b8',
    fontSize: 14,
  },
  loadingText: {
    color: '#64748b',
    textAlign: 'center',
    paddingVertical: 16,
  },
  strengthText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#0f172a',
  },
  summaryText: {
    color: '#475569',
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 20,
  },
  recommendedLabel: {
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 8,
    fontSize: 14,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  tagText: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '500',
  },
  consultationButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  consultationButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
  },
});

