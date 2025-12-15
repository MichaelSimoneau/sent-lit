import { View, ViewProps, Platform, StyleSheet } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ViewProps {
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = false, style, ...props }: CardProps) {
  // Use explicit stylesheet as fallback/primary with tailwind as overlay
  return (
    <View 
      style={[styles.card, style]}
      className={twMerge(
        "bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-6 group",
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
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0', // slate-200
  }
});
