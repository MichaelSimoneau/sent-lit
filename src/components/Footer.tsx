import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './Container';
import { COMPANY_INFO, PRACTICE_AREAS, NAVIGATION } from '../constants/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <View className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <Container>
        <View className="flex-col lg:flex-row gap-12 mb-16">
          
          {/* Brand & Contact */}
          <View className="flex-1">
            <Text className="text-2xl font-serif font-bold text-white mb-6">
              SENTINEL <Text className="text-primary">LITIGATION</Text>
            </Text>
            <Text className="text-lg mb-6 leading-relaxed max-w-sm">
              Dedicated to protecting consumers from fraud, deception, and unfair practices.
            </Text>
            <View className="space-y-2">
              <Text className="text-white font-bold text-xl">{COMPANY_INFO.phone}</Text>
              <Text>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}</Text>
              <Text>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</Text>
              <Text className="mt-2">{COMPANY_INFO.email}</Text>
            </View>
          </View>

          {/* Quick Links */}
          <View className="flex-1">
            <Text className="text-white font-bold text-lg mb-6">Quick Links</Text>
            <View className="space-y-3">
              {NAVIGATION.map(item => (
                <Link key={item.title} href={item.href as any} asChild>
                  <TouchableOpacity>
                    <Text className="hover:text-primary transition-colors">{item.title}</Text>
                  </TouchableOpacity>
                </Link>
              ))}
              <Link href="/portal" asChild>
                <TouchableOpacity>
                  <Text className="hover:text-primary transition-colors">Client Portal</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>

          {/* Practice Areas */}
          <View className="flex-1">
            <Text className="text-white font-bold text-lg mb-6">Practice Areas</Text>
            <View className="flex-row flex-wrap gap-x-8 gap-y-3">
              <View className="space-y-3">
                {PRACTICE_AREAS.slice(0, 6).map(area => (
                  <Link key={area.id} href={`/practice-areas/${area.slug}` as any} asChild>
                    <TouchableOpacity>
                      <Text className="hover:text-primary transition-colors text-sm">{area.title}</Text>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
              <View className="space-y-3">
                {PRACTICE_AREAS.slice(6).map(area => (
                  <Link key={area.id} href={`/practice-areas/${area.slug}` as any} asChild>
                    <TouchableOpacity>
                      <Text className="hover:text-primary transition-colors text-sm">{area.title}</Text>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </View>

        </View>

        <View className="border-t border-slate-800 pt-8 flex-col lg:flex-row justify-between items-center gap-4">
          <Text className="text-sm">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </Text>
          <View className="flex-row gap-6">
            <TouchableOpacity><Text className="text-sm hover:text-white">Privacy Policy</Text></TouchableOpacity>
            <TouchableOpacity><Text className="text-sm hover:text-white">Terms of Service</Text></TouchableOpacity>
            <TouchableOpacity><Text className="text-sm hover:text-white">Disclaimer</Text></TouchableOpacity>
          </View>
        </View>
        
        <Text className="text-xs text-slate-600 mt-8 text-center max-w-3xl mx-auto">
          Attorney Advertising. The information on this website is for general information purposes only. 
          Nothing on this site should be taken as legal advice for any individual case or situation. 
          This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </Text>
      </Container>
    </View>
  );
}
