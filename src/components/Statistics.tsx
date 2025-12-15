import React from 'react';
import { View, Text } from 'react-native';
import { STATISTICS } from '../constants/content';

export function Statistics() {
  return (
    <View className="flex-row flex-wrap justify-center gap-8 lg:gap-16">
      {STATISTICS.map((stat) => (
        <View key={stat.id} className="items-center w-40">
          <View className="flex-row items-baseline mb-2">
            <Text className="text-4xl lg:text-5xl font-bold text-white font-serif">
              {stat.value}
            </Text>
            <Text className="text-2xl font-bold text-primary-light ml-1">
              {stat.suffix}
            </Text>
          </View>
          <Text className="text-slate-300 text-center font-medium text-sm uppercase tracking-wide">
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

