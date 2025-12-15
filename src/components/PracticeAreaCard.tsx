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
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#2563eb',
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 16,
  },
  subcategoriesContainer: {
    marginTop: 'auto',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    width: '100%',
  },
  subcategoriesLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  subcategoryItem: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 4,
  },
});
