import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Card } from './Card';

interface PracticeAreaCardProps {
  title: string;
  description: string;
  slug: string;
}

export function PracticeAreaCard({ title, description, slug }: PracticeAreaCardProps) {
  return (
    <Link href={`/practice-areas/${slug}` as any} asChild>
      <TouchableOpacity>
        <Card className="hover:shadow-md transition-shadow">
          <Text className="text-xl font-bold text-primary dark:text-white mb-2">{title}</Text>
          <Text className="text-slate-600 dark:text-slate-300">{description}</Text>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
