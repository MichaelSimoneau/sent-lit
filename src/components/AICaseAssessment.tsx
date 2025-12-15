import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Platform } from 'react-native';
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
      <View style={styles.resultContainer}>
        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>AI Case Analysis</Text>
          <View style={[
            styles.strengthBadge,
            result.caseStrength >= 7 ? styles.strengthBadgeGood : styles.strengthBadgeWarning
          ]}>
            <Text style={[
              styles.strengthText,
              result.caseStrength >= 7 ? styles.strengthTextGood : styles.strengthTextWarning
            ]}>
              Strength: {result.caseStrength}/10
            </Text>
          </View>
        </View>
        
        <Text style={styles.summaryText}>
          {result.summary}
        </Text>

        <View style={styles.stepsContainer}>
          <Text style={styles.stepsTitle}>Recommended Steps:</Text>
          {result.nextSteps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={styles.stepDot} />
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.proceedButton}
          onPress={() => {/* Navigate to full consultation with data */}}
        >
          <Text style={styles.proceedButtonText}>Proceed to Full Consultation</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.startOverButton}
          onPress={() => setResult(null)}
        >
          <Text style={styles.startOverText}>Start Over</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badgeRow}>
          <View style={styles.statusDot} />
          <Text style={styles.badgeText}>AI-Powered Analysis</Text>
        </View>
        <Text style={styles.title}>
          Do You Have a Case?
        </Text>
        <Text style={styles.description}>
          Get a preliminary AI assessment in under 2 minutes. Confidential & Free.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Describe your situation... (e.g., 'I bought a car and the dealer lied about the accident history')"
          placeholderTextColor="#94a3b8"
          multiline
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleAssessment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" style={styles.loader} />
        ) : null}
        <Text style={styles.buttonText}>
          {loading ? 'Analyzing...' : HERO_CONTENT.ctaPrimary}
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.disclaimer}>
        AI assessment does not constitute legal advice.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(37, 99, 235, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    } as any),
  },
  header: {
    marginBottom: 24,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginRight: 8,
  },
  badgeText: {
    color: '#2563eb',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 28,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 16,
    minHeight: 128,
    fontSize: 16,
    color: '#0f172a',
    ...(Platform.OS === 'web' && {
      outlineStyle: 'none',
    } as any),
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)',
    } as any),
  },
  buttonDisabled: {
    opacity: 0.8,
  },
  loader: {
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disclaimer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 16,
  },
  resultContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    } as any),
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  strengthBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  strengthBadgeGood: {
    backgroundColor: '#d1fae5',
  },
  strengthBadgeWarning: {
    backgroundColor: '#fef3c7',
  },
  strengthText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  strengthTextGood: {
    color: '#065f46',
  },
  strengthTextWarning: {
    color: '#92400e',
  },
  summaryText: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  stepsContainer: {
    marginBottom: 24,
  },
  stepsTitle: {
    fontWeight: '600',
    color: '#0f172a',
    fontSize: 16,
    marginBottom: 12,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  stepDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginTop: 8,
    marginRight: 12,
  },
  stepText: {
    color: '#64748b',
    fontSize: 15,
    flex: 1,
    lineHeight: 22,
  },
  proceedButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)',
    } as any),
  },
  proceedButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  startOverButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  startOverText: {
    color: '#94a3b8',
    fontSize: 14,
  },
});

