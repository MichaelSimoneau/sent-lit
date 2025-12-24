import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, Link, useLocalSearchParams } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Card } from '../../src/components/Card';
import { BLOG_POSTS } from '../../src/constants/content';

export default function BlogIndex() {
  // Group posts by year/month for filtering
  const postsByYear = BLOG_POSTS.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof BLOG_POSTS>);

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <Stack.Screen options={{ title: 'Blog' }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
              Blog & Legal Updates
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Stay informed about consumer rights, recent cases, and legal developments.
            </Text>

            {/* Recent Posts Grid */}
            <View className="mb-12">
              <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Recent Posts
              </Text>
              <View className="flex-row flex-wrap -mx-4">
                {BLOG_POSTS.map((post) => (
                  <View key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <Link href={`/blog/${post.slug}`} asChild>
                      <TouchableOpacity>
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <Text className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            {post.category}
                          </Text>
                          <Text className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            {post.title}
                          </Text>
                          <Text className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                            {post.excerpt}
                          </Text>
                          <View className="flex-row justify-between items-center">
                            <Text className="text-sm text-slate-500 dark:text-slate-400">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </Text>
                            <Text className="text-primary font-semibold">
                              Read More →
                            </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </Link>
                  </View>
                ))}
              </View>
            </View>

            {/* Posts by Year */}
            <View>
              <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Archive
              </Text>
              {years.map((year) => (
                <View key={year} className="mb-8">
                  <Text className="text-xl font-semibold text-primary mb-4">
                    {year}
                  </Text>
                  <View className="space-y-4">
                    {postsByYear[Number(year)].map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} asChild>
                        <TouchableOpacity>
                          <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <View className="flex-row justify-between items-start">
                              <View className="flex-1">
                                <Text className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                  {post.title}
                                </Text>
                                <Text className="text-sm text-slate-500 dark:text-slate-400">
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                  })} • {post.category}
                                </Text>
                              </View>
                            </View>
                          </Card>
                        </TouchableOpacity>
                      </Link>
                    ))}
                  </View>
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
