import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ViewProps {
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <View 
      className={twMerge(
        "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6",
        className
      )} 
      {...props}
    >
      {children}
    </View>
  );
}

