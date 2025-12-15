import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Button } from './Button';

export function ConsultationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <View className="space-y-4">
      <View>
        <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Name</Text>
        <TextInput 
          className="w-full px-3 py-2 border border-slate-300 rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />
      </View>
      <View>
        <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Email</Text>
        <TextInput 
          className="w-full px-3 py-2 border border-slate-300 rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />
      </View>
      <View>
        <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Message</Text>
        <TextInput 
          className="w-full px-3 py-2 border border-slate-300 rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white h-24"
          multiline
          value={formData.message}
          onChangeText={(text) => setFormData({...formData, message: text})}
        />
      </View>
      <Button title="Send Message" onPress={() => console.log(formData)} />
    </View>
  );
}
