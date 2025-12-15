import { View, Text } from 'react-native';
import { Card } from './Card';
import { Testimonial } from '../types/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="mb-4 relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 h-full">
       {/* Quote Icon */}
       <View className="absolute top-6 left-6 opacity-10 pointer-events-none">
        <Text className="text-6xl font-serif text-primary" style={{ color: '#0f172a' }}>"</Text>
      </View>

      <View className="flex-row mb-4">
        {[...Array(5)].map((_, i) => (
          <Text key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'} text-lg`} style={{ color: i < testimonial.rating ? '#facc15' : '#cbd5e1' }}>★</Text>
        ))}
      </View>
      
      <Text className="text-slate-600 dark:text-slate-300 italic mb-6 text-lg leading-relaxed relative z-10" style={{ color: '#475569' }}>
        "{testimonial.quote}"
      </Text>
      
      <View className="mt-auto border-t border-slate-50 pt-4">
        <Text className="font-bold text-slate-900 dark:text-white" style={{ color: '#0f172a' }}>- {testimonial.author}</Text>
        <Text className="text-slate-500 text-sm" style={{ color: '#64748b' }}>Verified Client</Text>
      </View>
    </Card>
  );
}
