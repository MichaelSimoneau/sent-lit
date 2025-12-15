import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ViewProps {
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <View 
      className={twMerge(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )} 
      {...props}
    >
      {children}
    </View>
  );
}

