import { View, Text } from 'react-native';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <View className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 mt-auto">
      <Container>
        <View className="flex-row flex-wrap justify-between gap-8 mb-8">
          <View className="w-full md:w-1/3">
            <Text className="text-lg font-bold text-primary dark:text-white mb-4">
              SENTINEL LITIGATION
            </Text>
            <Text className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Uncompromising advocacy for victims of consumer fraud. We fight for justice when others won't.
            </Text>
          </View>
          
          <View className="w-full md:w-1/4">
            <Text className="font-semibold text-slate-900 dark:text-white mb-4">Contact</Text>
            <Text className="text-slate-600 dark:text-slate-400 mb-2">info@sentinel-litigation.web.app</Text>
            <Text className="text-slate-600 dark:text-slate-400">Chicago, IL</Text>
          </View>
          
          <View className="w-full md:w-1/4">
            <Text className="font-semibold text-slate-900 dark:text-white mb-4">Legal</Text>
            <Text className="text-slate-600 dark:text-slate-400 mb-2">Privacy Policy</Text>
            <Text className="text-slate-600 dark:text-slate-400">Terms of Service</Text>
          </View>
        </View>
        
        <View className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <Text className="text-slate-500 text-sm text-center">
            © {currentYear} Sentinel Litigation. All rights reserved. Attorney Advertising.
          </Text>
        </View>
      </Container>
    </View>
  );
}

