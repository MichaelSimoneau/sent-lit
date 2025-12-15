import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { STATISTICS } from '../constants/content';

export function Statistics() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  return (
    <View style={[
      styles.container,
      isMobile && styles.containerMobile,
      isDesktop && styles.containerDesktop
    ]}>
      {STATISTICS.map((stat) => (
        <View key={stat.id} style={[
          styles.statItem,
          isMobile && styles.statItemMobile
        ]}>
          <View style={styles.statValueContainer}>
            <Text style={[
              styles.statValue,
              isMobile && styles.statValueMobile,
              isDesktop && styles.statValueDesktop
            ]}>
              {stat.value}
            </Text>
            {stat.suffix && (
              <Text style={[
                styles.statSuffix,
                isMobile && styles.statSuffixMobile,
                isDesktop && styles.statSuffixDesktop
              ]}>
                {stat.suffix}
              </Text>
            )}
          </View>
          <Text style={[
            styles.statLabel,
            isMobile && styles.statLabelMobile
          ]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Mobile-first: single column
    gap: 32,
    alignItems: 'stretch',
  },
  containerMobile: {
    gap: 32,
  },
  containerDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  statItem: {
    alignItems: 'center',
    width: '100%', // Mobile: full width
  },
  statItemMobile: {
    paddingVertical: 16,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32, // Mobile-first: 32px
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'serif',
  },
  statValueMobile: {
    fontSize: 32,
  },
  statValueDesktop: {
    fontSize: 48,
  },
  statSuffix: {
    fontSize: 20, // Mobile-first: 20px
    fontWeight: 'bold',
    color: '#3b82f6',
    marginLeft: 4,
  },
  statSuffixMobile: {
    fontSize: 20,
  },
  statSuffixDesktop: {
    fontSize: 28,
  },
  statLabel: {
    color: '#94a3b8',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statLabelMobile: {
    fontSize: 11,
  },
});

