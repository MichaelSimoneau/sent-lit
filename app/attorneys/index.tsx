import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { AttorneyCard } from '../../src/components/AttorneyCard';
import { ATTORNEYS } from '../../src/constants/content';

export default function Attorneys() {
  return (
    <>
      <Stack.Screen options={{ title: 'Attorneys' }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-primary dark:text-white mb-4 font-serif">
              Our Attorneys
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Experienced advocates dedicated to protecting consumer rights.
            </Text>

            <View className="flex-row flex-wrap -mx-4">
              {ATTORNEYS.map((attorney) => (
                <View key={attorney.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <Link href={`/attorneys/${attorney.slug}`} asChild>
                    <TouchableOpacity>
                      <AttorneyCard attorney={attorney} />
                    </TouchableOpacity>
                  </Link>
                </View>
              ))}
            </View>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
