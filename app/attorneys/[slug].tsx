import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, Link } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { SEOHead } from '../../src/components/SEOHead';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { ATTORNEYS, PRACTICE_AREAS } from '../../src/constants/content';

export default function AttorneyDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const attorney = ATTORNEYS.find((a) => a.slug === slug);

  if (!attorney) {
    return (
      <>
        <Stack.Screen options={{ title: 'Attorney Not Found' }} />
        <View className="flex-1 bg-white dark:bg-slate-900">
          <Navigation />
          <Container className="py-12">
            <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Attorney Not Found
            </Text>
            <Link href="/attorneys">
              <Text className="text-primary hover:underline">← Back to Attorneys</Text>
            </Link>
          </Container>
          <Footer />
        </View>
      </>
    );
  }

  const attorneyPracticeAreas = PRACTICE_AREAS.filter((area) =>
    attorney.practiceAreas.includes(area.id)
  );

  return (
    <>
      <SEOHead 
        title={`${attorney.name} - ${attorney.title} | Sentinel Litigation`}
        description={attorney.bio || `${attorney.name}, ${attorney.title} at Sentinel Litigation.`}
        url={`/attorneys/${attorney.slug}`}
      />
      <Stack.Screen options={{ title: attorney.name }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            {/* Breadcrumb */}
            <View className="mb-6">
              <Link href="/attorneys">
                <Text className="text-primary hover:underline text-sm">Attorneys</Text>
              </Link>
              <Text className="text-slate-400 text-sm"> / {attorney.name}</Text>
            </View>

            <View className="flex-col lg:flex-row gap-8 mb-12">
              {/* Photo and Contact */}
              <View className="w-full lg:w-1/3">
                <Card className="p-6">
                  <View className="w-48 h-48 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 items-center justify-center">
                    <Text className="text-4xl font-bold text-slate-400">
                      {attorney.name.split(' ').map((n) => n[0]).join('')}
                    </Text>
                  </View>
                  <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                    {attorney.name}
                  </Text>
                  <Text className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-center">
                    {attorney.title}
                  </Text>

                  <View className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                    <View>
                      <Text className="text-sm font-semibold text-slate-500 mb-1">Phone</Text>
                      <Text className="text-slate-900 dark:text-white">{attorney.phone}</Text>
                    </View>
                    <View>
                      <Text className="text-sm font-semibold text-slate-500 mb-1">Email</Text>
                      <Text className="text-slate-900 dark:text-white">{attorney.email}</Text>
                    </View>
                  </View>
                </Card>
              </View>

              {/* Bio and Details */}
              <View className="flex-1">
                <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-serif">
                  Biography
                </Text>
                <Text className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                  {attorney.bio}
                </Text>

                {attorneyPracticeAreas.length > 0 && (
                  <View className="mb-8">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Practice Areas
                    </Text>
                    <View className="flex-row flex-wrap gap-3">
                      {attorneyPracticeAreas.map((area) => (
                        <Link key={area.id} href={`/practice-areas/${area.slug}`} asChild>
                          <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-lg">
                            <Text className="text-primary font-semibold">{area.title}</Text>
                          </TouchableOpacity>
                        </Link>
                      ))}
                    </View>
                  </View>
                )}

                {attorney.education.length > 0 && (
                  <View className="mb-8">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Education
                    </Text>
                    <View className="space-y-2">
                      {attorney.education.map((edu, i) => (
                        <Text key={i} className="text-slate-700 dark:text-slate-300">
                          {edu}
                        </Text>
                      ))}
                    </View>
                  </View>
                )}

                {attorney.admissions.length > 0 && (
                  <View className="mb-8">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Bar Admissions
                    </Text>
                    <View className="flex-row flex-wrap gap-3">
                      {attorney.admissions.map((admission, i) => (
                        <View
                          key={i}
                          className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg"
                        >
                          <Text className="text-slate-700 dark:text-slate-300">{admission}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                <Button
                  title="Schedule Consultation"
                  size="lg"
                  onPress={() => {
                    // Navigate to contact form with attorney pre-selected
                  }}
                />
              </View>
            </View>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
