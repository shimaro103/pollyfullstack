import React from 'react';
import {View, Text} from 'react-native';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({title, children, className = ''}: CardProps) {
  return (
    <View className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 ${className}`}>
      {title && (
        <Text className="text-lg font-semibold text-gray-900 mb-3">
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}