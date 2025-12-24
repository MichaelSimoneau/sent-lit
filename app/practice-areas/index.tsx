import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';

export default function PracticeAreas() {
  return (
    <>
      <Stack.Screen options={{ title: 'Practice Areas' }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Practice Areas
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300">
              Our areas of expertise.
            </Text>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
