import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  className = '',
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = 'py-3 px-6 rounded-lg items-center justify-center';

    switch (variant) {
      case 'primary':
        return disabled
          ? `${baseStyle} bg-gray-300`
          : `${baseStyle} bg-blue-500 active:bg-blue-600`;
      case 'secondary':
        return disabled
          ? `${baseStyle} bg-gray-200`
          : `${baseStyle} bg-gray-500 active:bg-gray-600`;
      case 'outline':
        return disabled
          ? `${baseStyle} border border-gray-300 bg-transparent`
          : `${baseStyle} border border-blue-500 bg-transparent active:bg-blue-50`;
      default:
        return `${baseStyle} bg-blue-500 active:bg-blue-600`;
    }
  };

  const getTextStyle = () => {
    const baseStyle = 'font-medium text-base';

    switch (variant) {
      case 'primary':
        return disabled
          ? `${baseStyle} text-gray-500`
          : `${baseStyle} text-white`;
      case 'secondary':
        return disabled
          ? `${baseStyle} text-gray-400`
          : `${baseStyle} text-white`;
      case 'outline':
        return disabled
          ? `${baseStyle} text-gray-400`
          : `${baseStyle} text-blue-500`;
      default:
        return `${baseStyle} text-white`;
    }
  };

  return (
    <TouchableOpacity
      className={`${getButtonStyle()} ${className}`}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text className={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}