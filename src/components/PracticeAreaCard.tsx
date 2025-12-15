import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Card } from './Card';
import { PracticeArea } from '../types/content';

interface PracticeAreaCardProps {
  area: PracticeArea;
}

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  return (
    <Link href={`/practice-areas/${area.slug}` as any} asChild>
      <TouchableOpacity style={styles.wrapper}>
        <Card style={styles.card}>
          <View style={styles.iconContainer}>
             <View style={styles.icon} />
          </View>
          <Text style={styles.title}>{area.title}</Text>
          <Text style={styles.description}>{area.shortDescription}</Text>
          
          {area.subcategories.length > 0 && (
             <View style={styles.subcategoriesContainer}>
               <Text style={styles.subcategoriesLabel}>Includes:</Text>
               {area.subcategories.slice(0, 2).map((sub, i) => (
                 <Text key={i} style={styles.subcategoryItem}>• {sub.title}</Text>
               ))}
             </View>
          )}
        </Card>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
  },
  card: {
    height: '100%',
    borderTopWidth: 4,
    borderTopColor: 'transparent',
    backgroundColor: '#0f172a', // slate-900 - dark background for white text
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(37, 99, 235, 0.2)', // blue-600 with opacity for dark background
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#60a5fa', // blue-400 - lighter blue for dark background
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#ffffff', // white text
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#cbd5e1', // slate-300 - light gray for readability
    lineHeight: 24,
    marginBottom: 16,
  },
  subcategoriesContainer: {
    marginTop: 'auto',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#334155', // slate-700 - darker border for dark background
    width: '100%',
  },
  subcategoriesLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#94a3b8', // slate-400 - lighter gray
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  subcategoryItem: {
    fontSize: 13,
    color: '#cbd5e1', // slate-300 - light gray for readability
    marginBottom: 4,
  },
});
