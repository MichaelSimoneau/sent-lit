import { View, ViewProps, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ViewProps {
  className?: string;
}

export function Container({ children, className, style, ...props }: ContainerProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const isDesktop = width >= 1024;
  
  // Mobile-first padding: 16px (mobile) -> 24px (tablet) -> 32px (desktop)
  const paddingHorizontal = isDesktop ? 32 : isTablet ? 24 : 16;
  
  return (
    <View 
      style={[
        styles.container,
        { paddingHorizontal },
        style
      ]}
      className={twMerge("w-full max-w-7xl mx-auto", className)} 
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 1280, // 7xl equivalent
    alignSelf: 'center',
  },
});

