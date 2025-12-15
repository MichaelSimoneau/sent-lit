import { View, Text } from 'react-native';
import { Card } from './Card';
import { Testimonial } from '../types/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="mb-4 relative">
       {/* Quote Icon */}
       <View className="absolute top-6 left-6 opacity-10">
        <Text className="text-6xl font-serif text-primary">"</Text>
      </View>

      <View className="flex-row mb-4">
        {[...Array(5)].map((_, i) => (
          <Text key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'} text-lg`}>★</Text>
        ))}
      </View>
      
      <Text className="text-slate-600 dark:text-slate-300 italic mb-4 text-lg leading-relaxed relative z-10">
        "{testimonial.quote}"
      </Text>
      
      <View>
        <Text className="font-bold text-slate-900 dark:text-white">- {testimonial.author}</Text>
        <Text className="text-slate-500 text-sm">Verified Client</Text>
      </View>
    </Card>
  );
}
