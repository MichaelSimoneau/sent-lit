import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Card } from './Card';
import { PracticeArea } from '../types/content';

interface PracticeAreaCardProps {
  area: PracticeArea;
}

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  return (
    <Link href={`/practice-areas/${area.slug}` as any} asChild>
      <TouchableOpacity className="flex-1">
        <Card className="hover:shadow-md transition-shadow h-full">
          <View className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-lg items-center justify-center mb-4 group-hover:bg-primary/10">
             {/* Icon placeholder could go here */}
             <View className="w-6 h-6 bg-slate-300 dark:bg-slate-600 rounded-full" />
          </View>
          <Text className="text-xl font-bold text-primary dark:text-white mb-2">{area.title}</Text>
          <Text className="text-slate-600 dark:text-slate-300 mb-4">{area.shortDescription}</Text>
          
          {area.subcategories.length > 0 && (
             <View className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
               <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Includes:</Text>
               {area.subcategories.slice(0, 2).map((sub, i) => (
                 <Text key={i} className="text-slate-500 text-sm mb-1">• {sub.title}</Text>
               ))}
             </View>
          )}
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
