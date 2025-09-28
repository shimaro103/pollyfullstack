import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Card from '../components/Card';
import Button from '../components/Button';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
            <Text className="text-white text-2xl font-bold">D</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">นักพัฒนา</Text>
          <Text className="text-gray-600">React Native Developer</Text>
        </View>

        <Card title="ข้อมูลส่วนตัว" className="mb-4">
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">ชื่อ:</Text>
              <Text className="text-gray-900 font-medium">นักพัฒนา React Native</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">อีเมล:</Text>
              <Text className="text-gray-900 font-medium">developer@example.com</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">ตำแหน่ง:</Text>
              <Text className="text-gray-900 font-medium">Mobile Developer</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">ประสบการณ์:</Text>
              <Text className="text-gray-900 font-medium">2+ ปี</Text>
            </View>
          </View>
        </Card>

        <Card title="ทักษะ" className="mb-4">
          <View className="flex-row flex-wrap gap-2">
            {['React Native', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'].map(
              (skill, index) => (
                <View
                  key={index}
                  className="bg-blue-100 px-3 py-1 rounded-full">
                  <Text className="text-blue-800 text-sm font-medium">
                    {skill}
                  </Text>
                </View>
              ),
            )}
          </View>
        </Card>

        <Card title="สถิติ" className="mb-6">
          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">15</Text>
              <Text className="text-gray-600 text-sm">โปรเจค</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">98%</Text>
              <Text className="text-gray-600 text-sm">ความสำเร็จ</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-purple-600">3</Text>
              <Text className="text-gray-600 text-sm">รางวัล</Text>
            </View>
          </View>
        </Card>

        <Button
          title="แก้ไขโปรไฟล์"
          onPress={() => console.log('Edit profile pressed')}
          variant="primary"
        />
      </ScrollView>
    </SafeAreaView>
  );
}