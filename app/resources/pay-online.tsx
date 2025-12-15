import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';

export default function PayOnline() {
  const [caseReference, setCaseReference] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | null>(null);

  return (
    <>
      <Stack.Screen options={{ title: 'Pay Online' }} />
      <View className="flex-1 bg-white dark:bg-slate-900">
        <Navigation />
        <ScrollView>
          <Container className="py-12">
            <Text className="text-3xl font-bold text-primary dark:text-white mb-4 font-serif">
              Pay Online
            </Text>
            <Text className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Make a secure payment for your case or account.
            </Text>

            <Card className="p-8 max-w-2xl">
              <View className="mb-6">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Case Reference Number (Optional)
                </Text>
                <TextInput
                  value={caseReference}
                  onChangeText={setCaseReference}
                  placeholder="Enter your case reference number"
                  className="border border-slate-300 dark:border-slate-600 rounded-lg p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </View>

              <View className="mb-6">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Payment Amount
                </Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-xl text-slate-600">$</Text>
                  <TextInput
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="0.00"
                    keyboardType="numeric"
                    className="flex-1 border border-slate-300 dark:border-slate-600 rounded-lg p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xl"
                  />
                </View>
              </View>

              <View className="mb-6">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Payment Method
                </Text>
                <View className="flex-row gap-4">
                  <TouchableOpacity
                    onPress={() => setPaymentMethod('card')}
                    className={`flex-1 p-4 border-2 rounded-lg ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Text className="text-center font-semibold text-slate-900 dark:text-white">
                      Credit/Debit Card
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setPaymentMethod('bank')}
                    className={`flex-1 p-4 border-2 rounded-lg ${
                      paymentMethod === 'bank'
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Text className="text-center font-semibold text-slate-900 dark:text-white">
                      Bank Transfer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {paymentMethod && (
                <View className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <Text className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    {paymentMethod === 'card'
                      ? 'You will be redirected to our secure payment processor.'
                      : 'Bank transfer instructions will be provided after submission.'}
                  </Text>
                </View>
              )}

              <Button
                title="Continue to Payment"
                size="lg"
                disabled={!amount || !paymentMethod}
                onPress={() => {
                  // Payment processing would go here
                  console.log('Processing payment:', { caseReference, amount, paymentMethod });
                }}
              />

              <View className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <Text className="text-sm text-slate-500 dark:text-slate-400 text-center">
                  Secure payment processing. All transactions are encrypted and secure.
                </Text>
              </View>
            </Card>

            <Card className="mt-8 p-6 bg-slate-50 dark:bg-slate-800">
              <Text className="font-semibold text-slate-900 dark:text-white mb-2">
                Need Help?
              </Text>
              <Text className="text-slate-600 dark:text-slate-300">
                If you have questions about your payment or need assistance, please contact us at{' '}
                <Text className="text-primary font-semibold">312-626-3585</Text> or{' '}
                <Text className="text-primary font-semibold">info@sentinellegal.us</Text>
              </Text>
            </Card>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
