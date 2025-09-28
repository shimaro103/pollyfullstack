import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Button from '../components/Button';
import Card from '../components/Card';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            ยินดีต้อนรับ
          </Text>
          <Text className="text-gray-600 text-lg">
            แอปพลิเคชัน React Native กับ Tailwind CSS
          </Text>
        </View>

        <View className="mb-6">
          <Card title="ข้อมูลแอป" className="mb-4">
            <Text className="text-gray-700 mb-2">
              • ใช้ React Native เวอร์ชัน 0.72.6
            </Text>
            <Text className="text-gray-700 mb-2">
              • ใช้ NativeWind สำหรับ Tailwind CSS
            </Text>
            <Text className="text-gray-700 mb-2">
              • มี Navigation แบบ Tab
            </Text>
            <Text className="text-gray-700">
              • เหมาะสำหรับการทดสอบ GitHub
            </Text>
          </Card>

          <Card title="ฟีเจอร์หลัก" className="mb-4">
            <View className="space-y-2">
              <Button
                title="ทดสอบปุ่ม Primary"
                onPress={() => console.log('Primary button pressed')}
                variant="primary"
              />
              <Button
                title="ทดสอบปุ่ม Secondary"
                onPress={() => console.log('Secondary button pressed')}
                variant="secondary"
              />
              <Button
                title="ทดสอบปุ่ม Outline"
                onPress={() => console.log('Outline button pressed')}
                variant="outline"
              />
            </View>
          </Card>
        </View>

        <View className="bg-blue-500 p-6 rounded-lg mb-6">
          <Text className="text-white text-xl font-semibold mb-2">
            🚀 พร้อมใช้งาน
          </Text>
          <Text className="text-blue-100">
            โปรเจคนี้พร้อมสำหรับการพัฒนาและทดสอบบน GitHub แล้ว
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}