import { View, Text, StyleSheet, Platform } from 'react-native';
import { Card } from './Card';
import { Testimonial } from '../types/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
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
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    height: '100%',
  },
  quoteIcon: {
    position: 'absolute',
    top: 24,
    left: 24,
    opacity: 0.1,
  },
  quoteMark: {
    fontSize: 64,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    color: '#0f172a',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 18,
    color: '#cbd5e1',
    marginRight: 4,
  },
  starActive: {
    color: '#facc15',
  },
  quote: {
    fontSize: 16,
    color: '#475569',
    fontStyle: 'italic',
    marginBottom: 24,
    lineHeight: 26,
    position: 'relative',
    zIndex: 10,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#f8fafc',
    paddingTop: 16,
  },
  author: {
    fontWeight: 'bold',
    color: '#0f172a',
    fontSize: 16,
    marginBottom: 4,
  },
  verified: {
    color: '#64748b',
    fontSize: 13,
  },
});
