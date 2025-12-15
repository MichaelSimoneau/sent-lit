import { TouchableOpacity, Text, View } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onPress?: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  onPress, 
  title, 
  variant = 'primary', 
  size = 'md', 
  className,
  disabled 
}: ButtonProps) {
  const baseStyles = "rounded-lg items-center justify-center transition-colors";
  
  const variants = {
    primary: "bg-primary text-white active:bg-primary-light",
    secondary: "bg-secondary text-white active:bg-secondary-light",
    outline: "border border-primary bg-transparent active:bg-slate-100 dark:active:bg-slate-800",
    ghost: "bg-transparent active:bg-slate-100 dark:active:bg-slate-800"
  };

  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3"
  };

  const textStyles = {
    primary: "text-white font-semibold",
    secondary: "text-white font-semibold",
    outline: "text-primary font-semibold dark:text-white",
    ghost: "text-primary font-semibold dark:text-white"
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      disabled={disabled}
      className={twMerge(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        disabled && "opacity-50",
        className
      )}
    >
      <Text className={twMerge(textStyles[variant], size === 'lg' ? 'text-lg' : 'text-base')}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

