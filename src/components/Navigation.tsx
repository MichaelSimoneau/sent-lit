import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './Container';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, title }: { href: string; title: string }) => (
    <Link href={href as any} asChild>
      <TouchableOpacity className="py-2 lg:py-0 px-4">
        <Text className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-base">
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <Container>
        <View className="flex-row items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text className="text-xl font-bold text-primary dark:text-white tracking-tight">
                SENTINEL LITIGATION
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Desktop Navigation */}
          <View className="hidden md:flex flex-row items-center space-x-4">
            <NavLink href="/about" title="About" />
            <NavLink href="/practice-areas" title="Practice Areas" />
            <NavLink href="/resources" title="Resources" />
            <NavLink href="/contact" title="Contact" />
          </View>

          {/* Mobile Menu Button */}
          <TouchableOpacity 
            className="md:hidden p-2"
            onPress={() => setIsMenuOpen(!isMenuOpen)}
          >
            <View className="space-y-1.5">
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <View className="md:hidden py-4 border-t border-slate-100 dark:border-slate-800">
            <NavLink href="/about" title="About" />
            <NavLink href="/practice-areas" title="Practice Areas" />
            <NavLink href="/resources" title="Resources" />
            <NavLink href="/contact" title="Contact" />
          </View>
        )}
      </Container>
    </View>
  );
}

