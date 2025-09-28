# AI Power React Native

React Native application with Tailwind CSS for GitHub testing purposes.

## 🚀 Features

- ✅ React Native 0.72.6
- ✅ NativeWind (Tailwind CSS for React Native)
- ✅ TypeScript support
- ✅ Bottom Tab Navigation
- ✅ Reusable components
- ✅ Thai language support
- ✅ Clean project structure

## 📱 Screens

1. **หน้าหลัก (Home)** - แสดงข้อมูลแอปและฟีเจอร์หลัก
2. **โปรไฟล์ (Profile)** - แสดงข้อมูลผู้ใช้และทักษะ
3. **ตั้งค่า (Settings)** - จัดการการตั้งค่าแอปพลิเคชัน

## 🧩 Components

- **Button** - ปุ่มที่รองรับหลาย variant (primary, secondary, outline)
- **Card** - การ์ดสำหรับแสดงเนื้อหา

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts
├── screens/            # Screen components
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   └── SettingsScreen.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
└── utils/              # Utility functions and constants
    └── constants.ts
```

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd aipower-react-native
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only)
```bash
cd ios && pod install && cd ..
```

## 🏃‍♂️ Running the App

### Android
```bash
npm run android
# or
yarn android
```

### iOS
```bash
npm run ios
# or
yarn ios
```

## 🎨 Styling

This project uses NativeWind for styling, which brings Tailwind CSS to React Native. You can use Tailwind classes directly in your components:

```tsx
<View className="flex-1 bg-gray-50 p-4">
  <Text className="text-xl font-bold text-gray-900">Hello World</Text>
</View>
```

## 📦 Dependencies

### Main Dependencies
- `react`: React library
- `react-native`: React Native framework
- `@react-navigation/native`: Navigation library
- `@react-navigation/bottom-tabs`: Bottom tab navigation
- `nativewind`: Tailwind CSS for React Native
- `react-native-safe-area-context`: Safe area handling

### Dev Dependencies
- `typescript`: TypeScript support
- `tailwindcss`: Tailwind CSS
- `eslint`: Code linting
- `prettier`: Code formatting

## 🤝 Contributing

This project is for GitHub testing purposes. Feel free to fork and experiment!

## 📄 License

MIT License - feel free to use this project for learning and testing purposes.