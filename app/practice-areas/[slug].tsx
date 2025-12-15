import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';

export default function PracticeAreaDetail() {
  const { slug } = useLocalSearchParams();
  const title = typeof slug === 'string' 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
    : 'Practice Area';

  return (
    <>
      <Stack.Screen options={{ title: title }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-primary dark:text-white mb-6">
              {title}
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300">
              Detailed information about {title} will be available here soon.
            </Text>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
