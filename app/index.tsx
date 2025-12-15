import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-slate-900">
      <View className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <Text className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Sentinel Litigation
        </Text>
        <Text className="text-slate-600 dark:text-slate-300">
          Consumer Fraud Protection
        </Text>
      </View>
    </View>
  );
}

