import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Rect, Text as SvgText } from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  accent?: string;
  variant?: 'full' | 'icon' | 'wordmark';
  className?: string;
}

export const Logo = ({ 
  width = 48, 
  height = 48, 
  color = '#0f172a', 
  accent = '#2563eb',
  variant = 'full', 
  className 
}: LogoProps) => {
  const isIcon = variant === 'icon';
  const isWordmark = variant === 'wordmark';
  
  // Adjust viewBox based on variant
  const viewBox = isIcon ? "0 0 100 100" : isWordmark ? "0 0 250 50" : "0 0 350 100";
  
  return (
    <View className={className} style={{ width, height }}>
      <Svg width="100%" height="100%" viewBox={viewBox}>
        {/* Icon Part */}
        {!isWordmark && (
          <G>
            <Path d="M50 5 L15 20 V45 C15 70 30 90 50 95 C70 90 85 70 85 45 V20 L50 5 Z" fill={color} />
            <Path d="M50 5 L85 20 L85 45 C85 60 78 75 50 95" fill={accent} opacity="0.3" />
            <G transform="translate(25, 25) scale(0.5)">
              <Rect x="10" y="10" width="80" height="4" rx="2" fill="white" />
              <Rect x="48" y="5" width="4" height="40" rx="2" fill="white" />
              <Path d="M10 14 L10 40 A10 10 0 0 0 30 40 L30 14" fill="none" stroke="white" strokeWidth="3" />
              <Path d="M70 14 L70 40 A10 10 0 0 0 90 40 L90 14" fill="none" stroke="white" strokeWidth="3" />
            </G>
          </G>
        )}

        {/* Text Part */}
        {!isIcon && (
          <G transform={!isWordmark ? "translate(110, 0)" : "translate(0, 0)"}>
             <SvgText x="0" y={isWordmark ? "30" : "60"} fontSize={isWordmark ? "30" : "40"} fontWeight="bold" fontFamily="serif" fill={color} letterSpacing="2">SENTINEL</SvgText>
             <SvgText x="2" y={isWordmark ? "48" : "85"} fontSize={isWordmark ? "12" : "16"} fontWeight="bold" fontFamily="sans-serif" fill={accent} letterSpacing="4">LITIGATION</SvgText>
          </G>
        )}
      </Svg>
    </View>
  );
};

