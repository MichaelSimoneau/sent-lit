import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, Link } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { BLOG_POSTS } from '../../src/constants/content';

export default function BlogPost() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Stack.Screen options={{ title: 'Post Not Found' }} />
        <View className="flex-1 bg-white dark:bg-slate-900">
          <Navigation />
          <Container className="py-12">
            <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Post Not Found
            </Text>
            <Link href="/blog">
              <Text className="text-primary hover:underline">← Back to Blog</Text>
            </Link>
          </Container>
          <Footer />
        </View>
      </>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Stack.Screen options={{ title: post.title }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            {/* Breadcrumb */}
            <View className="mb-6">
              <Link href="/blog">
                <Text className="text-primary hover:underline text-sm">
                  Blog
                </Text>
              </Link>
              <Text className="text-slate-400 text-sm"> / {post.title}</Text>
            </View>

            {/* Post Header */}
            <View className="mb-8">
              <Text className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                {post.category}
              </Text>
              <Text className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
                {post.title}
              </Text>
              <View className="flex-row items-center gap-4 text-slate-600 dark:text-slate-400">
                <Text className="text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
                <Text className="text-slate-400">•</Text>
                <Text className="text-sm">By {post.author}</Text>
              </View>
            </View>

            {/* Post Content */}
            <View className="prose prose-lg max-w-none mb-12">
              <Text className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {post.excerpt}
              </Text>
              <Text className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                {post.content || 'Full article content coming soon...'}
              </Text>
            </View>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <View className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Related Posts
                </Text>
                <View className="flex-row flex-wrap -mx-4">
                  {relatedPosts.map((relatedPost) => (
                    <View key={relatedPost.id} className="w-full md:w-1/3 p-4">
                      <Link href={`/blog/${relatedPost.slug}`} asChild>
                        <TouchableOpacity className="hover:opacity-80 transition-opacity">
                          <Text className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                            {relatedPost.category}
                          </Text>
                          <Text className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            {relatedPost.title}
                          </Text>
                          <Text className="text-sm text-slate-500 dark:text-slate-400">
                            {new Date(relatedPost.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </Text>
                        </TouchableOpacity>
                      </Link>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Back to Blog */}
            <View className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <Link href="/blog">
                <Text className="text-primary hover:underline font-semibold">
                  ← Back to All Posts
                </Text>
              </Link>
            </View>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
