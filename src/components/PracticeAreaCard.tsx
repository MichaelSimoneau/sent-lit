import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Card } from './Card';
import { PracticeArea } from '../types/content';

interface PracticeAreaCardProps {
  area: PracticeArea;
}

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  // Map icons to simple visual elements or SVGs if we had them
  // For now, we'll use a styled view with the first letter or a generic shape
  
  return (
    <Link href={`/practice-areas/${area.slug}` as any} asChild>
      <TouchableOpacity className="flex-1">
        <Card className="hover:shadow-xl transition-shadow h-full border-t-4 border-t-transparent hover:border-t-primary bg-white dark:bg-slate-800">
          <View className="w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-xl items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
             {/* Icon placeholder */}
             <View className="w-6 h-6 bg-primary dark:bg-blue-400 rounded-md group-hover:bg-white" />
          </View>
          <Text className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors" style={{ color: '#0f172a' }}>{area.title}</Text>
          <Text className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed" style={{ color: '#475569' }}>{area.shortDescription}</Text>
          
          {area.subcategories.length > 0 && (
             <View className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 w-full">
               <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" style={{ color: '#94a3b8' }}>Includes:</Text>
               {area.subcategories.slice(0, 2).map((sub, i) => (
                 <Text key={i} className="text-slate-500 text-sm mb-1 truncate" style={{ color: '#64748b' }}>• {sub.title}</Text>
               ))}
             </View>
          )}
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
