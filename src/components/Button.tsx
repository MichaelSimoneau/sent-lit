import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onPress?: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

export function Button({ 
  onPress, 
  title, 
  variant = 'primary', 
  size = 'md', 
  className,
  disabled,
  loading,
  style
}: ButtonProps) {
  const baseStyles = "rounded-lg items-center justify-center transition-all duration-200 flex-row";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-md hover:shadow-lg border-b-2 border-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-light active:bg-slate-600 shadow-sm",
    outline: "border-2 border-primary bg-transparent text-primary hover:bg-slate-50 active:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-slate-800",
    ghost: "bg-transparent text-primary hover:bg-slate-50 active:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
  };

  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-6 py-3", // Increased padding for better touch target
    lg: "px-8 py-4"
  };

  const textStyles = {
    primary: "text-white font-bold",
    secondary: "text-white font-bold",
    outline: "text-primary font-bold dark:text-white",
    ghost: "text-primary font-bold dark:text-white"
  };

  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  // Explicit fallback styles if NativeWind fails
  const getButtonStyle = () => {
    switch(variant) {
      case 'outline': return styles.outlineButton;
      case 'ghost': return styles.ghostButton;
      default: return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
     switch(variant) {
      case 'outline': return styles.outlineText;
      case 'ghost': return styles.ghostText;
      default: return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.base, 
        getButtonStyle(), 
        style
      ]}
      className={twMerge(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      activeOpacity={0.7}
    >
      {loading && <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#0f172a' : 'white'} className="mr-2" />}
      <Text 
        style={[getTextStyle()]}
        className={twMerge(textStyles[variant], textSize[size])}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  primaryButton: {
    backgroundColor: '#2563eb', // blue-600
    borderBottomWidth: 2,
    borderBottomColor: '#1e3a8a', // blue-900
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2563eb',
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  primaryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  outlineText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ghostText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
