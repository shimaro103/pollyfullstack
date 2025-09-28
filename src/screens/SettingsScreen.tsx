import React, {useState} from 'react';
import {View, Text, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Card from '../components/Card';
import Button from '../components/Button';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            การตั้งค่า
          </Text>
          <Text className="text-gray-600">
            จัดการการตั้งค่าแอปพลิเคชัน
          </Text>
        </View>

        <Card title="การแจ้งเตือน" className="mb-4">
          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="text-gray-900 font-medium">
                  การแจ้งเตือนทั่วไป
                </Text>
                <Text className="text-gray-600 text-sm">
                  รับการแจ้งเตือนสำหรับกิจกรรมสำคัญ
                </Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{false: '#d1d5db', true: '#3b82f6'}}
                thumbColor={notifications ? '#ffffff' : '#f4f3f4'}
              />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="text-gray-900 font-medium">
                  อัปเดตอัตโนมัติ
                </Text>
                <Text className="text-gray-600 text-sm">
                  อัปเดตแอปโดยอัตโนมัติเมื่อมีเวอร์ชันใหม่
                </Text>
              </View>
              <Switch
                value={autoUpdate}
                onValueChange={setAutoUpdate}
                trackColor={{false: '#d1d5db', true: '#3b82f6'}}
                thumbColor={autoUpdate ? '#ffffff' : '#f4f3f4'}
              />
            </View>
          </View>
        </Card>

        <Card title="การแสดงผล" className="mb-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-gray-900 font-medium">
                โหมดมืด
              </Text>
              <Text className="text-gray-600 text-sm">
                เปลี่ยนเป็นธีมมืดสำหรับการใช้งานในเวลากลางคืน
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{false: '#d1d5db', true: '#3b82f6'}}
              thumbColor={darkMode ? '#ffffff' : '#f4f3f4'}
            />
          </View>
        </Card>

        <Card title="ข้อมูลแอป" className="mb-4">
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">เวอร์ชัน:</Text>
              <Text className="text-gray-900 font-medium">1.0.0</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">บิลด์:</Text>
              <Text className="text-gray-900 font-medium">1001</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">แพลตฟอร์ม:</Text>
              <Text className="text-gray-900 font-medium">React Native</Text>
            </View>
          </View>
        </Card>

        <Card title="การสนับสนุน" className="mb-6">
          <View className="space-y-3">
            <Button
              title="ติดต่อฝ่ายสนับสนุน"
              onPress={() => console.log('Contact support pressed')}
              variant="outline"
            />
            <Button
              title="รายงานปัญหา"
              onPress={() => console.log('Report issue pressed')}
              variant="outline"
            />
            <Button
              title="ให้คะแนนแอป"
              onPress={() => console.log('Rate app pressed')}
              variant="outline"
            />
          </View>
        </Card>

        <Button
          title="ออกจากระบบ"
          onPress={() => console.log('Logout pressed')}
          variant="secondary"
        />
      </ScrollView>
    </SafeAreaView>
  );
}