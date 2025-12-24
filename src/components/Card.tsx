import { View, ViewProps, Platform, StyleSheet } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ViewProps {
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = false, style, ...props }: CardProps) {
  // Check if backgroundColor is explicitly set in style prop
  // Handle both object and array styles
  let hasCustomBackground = false;
  if (style) {
    if (Array.isArray(style)) {
      hasCustomBackground = style.some((s: any) => s && s.backgroundColor);
    } else {
      hasCustomBackground = !!(style as any).backgroundColor;
    }
  }
  
  // Remove bg-white from className if custom background is provided
  // Also adjust border color for dark backgrounds
  const baseClassName = hasCustomBackground 
    ? "rounded-xl shadow-md p-6 group"  // Remove border classes - let style prop handle it
    : "bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-6 group";
  
  return (
    <View 
      style={[styles.card, style]}
      className={twMerge(
        baseClassName,
        // Hover state simulation for web - made more prominent
        Platform.OS === 'web' && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30",
        className
      )} 
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor removed - let style prop or className handle it
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)', // Subtle border for refinement
  }
});
