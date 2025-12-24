import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking } from 'react-native';
import { Card } from './Card';
import { Testimonial } from '../types/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const handleSourceLink = () => {
    if (testimonial.sourceUrl) {
      Linking.openURL(testimonial.sourceUrl);
    }
  };

  const getPermalink = () => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const authorSlug = testimonial.author.toLowerCase().replace(/\s+/g, '');
      return `${window.location.origin}/firm-overview/testimonials#testimonials/${authorSlug}`;
    }
    // Fallback for non-web platforms
    const authorSlug = testimonial.author.toLowerCase().replace(/\s+/g, '');
    return `/firm-overview/testimonials#testimonials/${authorSlug}`;
  };

  const handlePermalink = () => {
    const url = getPermalink();
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    } else {
      Linking.openURL(url);
    }
  };

  const handleCopyLink = () => {
    const url = getPermalink();
    if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
    } else {
      // Fallback
      handlePermalink();
    }
  };

  return (
    <Card style={styles.card}>
       {/* Quote Icon */}
       <View style={styles.quoteIcon}>
        <Text style={styles.quoteMark}>"</Text>
      </View>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <Text key={i} style={[
            styles.star,
            i < testimonial.rating && styles.starActive
          ]}>★</Text>
        ))}
      </View>
      
      <Text style={styles.quote}>
        "{testimonial.quote}"
      </Text>
      
      <View style={styles.footer}>
        <Text style={styles.author}>- {testimonial.author}</Text>
        <Text style={styles.verified}>Verified Client</Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleCopyLink} style={styles.link}>
            <Text style={styles.linkText}>🔗 Share Link</Text>
          </TouchableOpacity>
          {testimonial.sourceUrl && (
            <TouchableOpacity onPress={handleSourceLink} style={styles.link}>
              <Text style={styles.linkText}>View Original →</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    position: 'relative',
    backgroundColor: '#0f172a', // slate-900 - dark background for white text
    borderWidth: 1,
    borderColor: '#334155', // slate-700 - darker border for dark background
    height: '100%',
  },
  quoteIcon: {
    position: 'absolute',
    top: 24,
    left: 24,
    opacity: 0.15,
  },
  quoteMark: {
    fontSize: 64,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    color: '#ffffff', // white
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 18,
    color: '#475569', // slate-600 - darker gray for inactive stars
    marginRight: 4,
  },
  starActive: {
    color: '#facc15', // yellow - keep stars visible
  },
  quote: {
    fontSize: 16,
    color: '#ffffff', // white text
    fontStyle: 'italic',
    marginBottom: 24,
    lineHeight: 26,
    position: 'relative',
    zIndex: 10,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#334155', // slate-700 - darker border for dark background
    paddingTop: 16,
  },
  author: {
    fontWeight: 'bold',
    color: '#ffffff', // white text
    fontSize: 16,
    marginBottom: 4,
  },
  verified: {
    color: '#cbd5e1', // slate-300 - light gray for readability
    fontSize: 13,
  },
  linksContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  link: {
    // No additional styles needed, text handles it
  },
  linkText: {
    color: '#60a5fa', // blue-400
    fontSize: 13,
    fontWeight: '600',
  },
});
