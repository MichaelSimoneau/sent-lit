import React from 'react';
import { View, Text } from 'react-native';
import { STATISTICS } from '../constants/content';

export function Statistics() {
  return (
    <View className="flex-row flex-wrap justify-between items-center gap-y-8">
      {STATISTICS.map((stat) => (
        <View key={stat.id} className="flex-1 min-w-[140px] items-center">
          <View className="flex-row items-baseline mb-2">
            <Text className="text-4xl lg:text-5xl font-bold text-white font-serif" style={{ color: 'white' }}>
              {stat.value}
            </Text>
            {stat.suffix ? (
            <Text className="text-2xl font-bold text-blue-500 ml-1" style={{ color: '#3b82f6' }}>
              {stat.suffix}
            </Text>
            ) : null}
          </View>
          <Text className="text-slate-400 text-center font-medium text-sm uppercase tracking-wide" style={{ color: '#94a3b8' }}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

