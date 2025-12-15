import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './Container';
import { NAVIGATION, COMPANY_INFO } from '../constants/content';
import { AISearch } from './AISearch';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024; // lg breakpoint

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isDesktop, isMenuOpen]);

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <View className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Phone */}
      <View className="bg-slate-50 dark:bg-slate-950 py-1 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <View className="flex-row justify-end items-center">
            <Text className="text-slate-500 text-xs mr-2">Call Us Today!</Text>
            <Text className="text-primary font-bold text-sm">{COMPANY_INFO.phone}</Text>
          </View>
        </Container>
      </View>

      <Container>
        <View className="flex-row items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" asChild>
            <TouchableOpacity className="flex-1">
              <Text className="text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                SENTINEL
                <Text className="text-primary"> LITIGATION</Text>
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Desktop Search */}
          {isDesktop && (
            <View style={{ width: '33%', marginHorizontal: 16 }}>
              <AISearch />
            </View>
          )}

          {/* Desktop Nav */}
          {isDesktop && (
            <View className="flex-row items-center" style={{ gap: 24 }}>
            {NAVIGATION.map((item) => (
              <View key={item.title} className="relative z-10">
                {item.children ? (
                  <TouchableOpacity 
                    className="py-2"
                    onPress={() => toggleDropdown(item.title)}
                  >
                    <Text className="text-slate-700 dark:text-slate-200 font-medium">
                      {item.title} {activeDropdown === item.title ? '▼' : '▶'}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Link href={item.href as any} asChild>
                    <TouchableOpacity className="py-2" onPress={() => setActiveDropdown(null)}>
                      <Text className="text-slate-700 dark:text-slate-200 font-medium">
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Link>
                )}
                
                {/* Desktop Dropdown */}
                {item.children && activeDropdown === item.title && (
                  <View className="absolute top-full left-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 min-w-48 py-2">
                    {item.children.map((child) => (
                      <Link key={child.title} href={child.href as any} asChild>
                        <TouchableOpacity className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">
                          <Text className="text-slate-700 dark:text-slate-200">
                            {child.title}
                          </Text>
                        </TouchableOpacity>
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
            
            <Link href="/contact" asChild>
              <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                <Text className="text-white font-bold text-sm">Free Consultation</Text>
              </TouchableOpacity>
            </Link>
          </View>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <TouchableOpacity 
              className="p-2"
              onPress={() => setIsMenuOpen(!isMenuOpen)}
            >
            <View className="space-y-1.5">
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
              <View className="w-6 h-0.5 bg-slate-800 dark:bg-white" />
            </View>
          </TouchableOpacity>
          )}
        </View>

        {/* Mobile Menu */}
        {!isDesktop && isMenuOpen && (
          <ScrollView className="max-h-[80vh] border-t border-slate-100 dark:border-slate-800 py-4">
            <View className="mb-6 px-4">
              <AISearch />
            </View>
            
            {NAVIGATION.map((item) => (
              <View key={item.title}>
                <TouchableOpacity 
                  className="py-3 px-4 flex-row justify-between items-center"
                  onPress={() => item.children ? toggleDropdown(item.title) : null}
                >
                  <Link href={item.href as any} asChild>
                    <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                      <Text className="text-slate-800 dark:text-white font-semibold text-lg">
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Link>
                  {item.children && (
                    <Text className="text-slate-400">{activeDropdown === item.title ? '−' : '+'}</Text>
                  )}
                </TouchableOpacity>
                
                {/* Mobile Submenu */}
                {item.children && activeDropdown === item.title && (
                  <View className="bg-slate-50 dark:bg-slate-800 px-4 py-2">
                    {item.children.map((child) => (
                      <Link key={child.title} href={child.href as any} asChild>
                        <TouchableOpacity 
                          className="py-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-1"
                          onPress={() => setIsMenuOpen(false)}
                        >
                          <Text className="text-slate-600 dark:text-slate-300">
                            {child.title}
                          </Text>
                        </TouchableOpacity>
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
            
            <View className="p-4 mt-4">
              <TouchableOpacity className="bg-primary py-3 rounded-xl items-center">
                <Text className="text-white font-bold text-lg">Free Consultation</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Container>
    </View>
  );
}
