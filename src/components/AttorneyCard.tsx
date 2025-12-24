import { View, Text } from 'react-native';
import { Card } from './Card';
import { Attorney } from '../types/content';

interface AttorneyCardProps {
  attorney: Attorney;
}

export function AttorneyCard({ attorney }: AttorneyCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow h-full">
      <View className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4 items-center justify-center">
        {/* Photo placeholder */}
        <Text className="text-2xl font-bold text-slate-400">
          {attorney.name.split(' ').map(n => n[0]).join('')}
        </Text>
      </View>
      <Text className="text-xl font-bold text-slate-900 dark:text-white mb-1">
        {attorney.name}
      </Text>
      <Text className="text-slate-600 dark:text-slate-300 mb-4">
        {attorney.title}
      </Text>
      {attorney.practiceAreas.length > 0 && (
        <View className="flex-row flex-wrap gap-2 mb-4">
          {attorney.practiceAreas.slice(0, 2).map((area) => (
            <View key={area} className="bg-primary/10 px-2 py-1 rounded">
              <Text className="text-xs text-primary font-semibold">{area}</Text>
            </View>
          ))}
        </View>
      )}
      <Text className="text-primary font-semibold text-sm">
        Learn More →
      </Text>
    </Card>
  );
}
