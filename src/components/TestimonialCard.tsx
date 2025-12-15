import { View, Text } from 'react-native';
import { Card } from './Card';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="mb-4">
      <Text className="text-slate-600 dark:text-slate-300 italic mb-4">"{quote}"</Text>
      <Text className="font-bold text-slate-900 dark:text-white">- {author}</Text>
    </Card>
  );
}
