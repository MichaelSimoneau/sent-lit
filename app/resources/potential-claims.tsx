import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { PRACTICE_AREAS } from '../../src/constants/content';

export default function PotentialClaims() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    {
      id: 'issue',
      question: 'What type of issue are you experiencing?',
      options: [
        'Debt collection harassment',
        'Credit report errors',
        'Unwanted calls/texts',
        'Employment issues',
        'Banking/fraud',
        'Other',
      ],
    },
    {
      id: 'timeline',
      question: 'When did this issue occur?',
      options: [
        'Within the last month',
        '1-6 months ago',
        '6-12 months ago',
        'More than a year ago',
      ],
    },
    {
      id: 'damages',
      question: 'Have you suffered financial losses or damages?',
      options: [
        'Yes, significant losses',
        'Yes, minor losses',
        'No financial losses, but other harm',
        'Not sure',
      ],
    },
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getRecommendedAreas = () => {
    const issue = answers['issue']?.toLowerCase() || '';
    const recommended: string[] = [];

    if (issue.includes('debt')) recommended.push('debt-collection-rights');
    if (issue.includes('credit')) recommended.push('credit-reporting');
    if (issue.includes('call') || issue.includes('text')) recommended.push('telemarketing-abuse');
    if (issue.includes('employment')) recommended.push('employment-law');
    if (issue.includes('bank') || issue.includes('fraud')) recommended.push('banking-fraud');

    return recommended.length > 0 ? recommended : ['credit-reporting', 'debt-collection-rights'];
  };

  const isComplete = currentStep === questions.length - 1 && answers[questions[currentStep].id];

  return (
    <>
      <Stack.Screen options={{ title: 'Potential Claims' }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-primary dark:text-white mb-4 font-serif">
              Do You Have a Potential Claim?
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Answer a few questions to help us understand your situation and identify potential legal claims.
            </Text>

            {!isComplete ? (
              <Card className="p-8">
                <View className="mb-6">
                  <Text className="text-sm text-slate-500 mb-2">
                    Question {currentStep + 1} of {questions.length}
                  </Text>
                  <View className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <View
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </View>
                </View>

                <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {questions[currentStep].question}
                </Text>

                <View className="space-y-3">
                  {questions[currentStep].options.map((option) => (
                    <TouchableOpacity
                      key={option}
                      onPress={() => handleAnswer(questions[currentStep].id, option)}
                      className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary transition-colors"
                    >
                      <Text className="text-slate-900 dark:text-white font-medium">
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Card>
            ) : (
              <View>
                <Card className="p-8 mb-6">
                  <Text className="text-2xl font-bold text-primary dark:text-white mb-4">
                    Based on Your Answers
                  </Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    You may have potential claims in the following practice areas:
                  </Text>

                  <View className="space-y-4">
                    {getRecommendedAreas().map((areaSlug) => {
                      const area = PRACTICE_AREAS.find((a) => a.slug === areaSlug);
                      if (!area) return null;
                      return (
                        <Card key={area.id} className="p-4 border-l-4 border-l-primary">
                          <Text className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {area.title}
                          </Text>
                          <Text className="text-slate-600 dark:text-slate-300">
                            {area.shortDescription}
                          </Text>
                        </Card>
                      );
                    })}
                  </View>
                </Card>

                <View className="flex-row gap-4">
                  <Button
                    title="Schedule Consultation"
                    size="lg"
                    onPress={() => {}}
                  />
                  <Button
                    title="Start Over"
                    variant="outline"
                    size="lg"
                    onPress={() => {
                      setAnswers({});
                      setCurrentStep(0);
                    }}
                  />
                </View>
              </View>
            )}
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
