// app/(tabs)/(banner)/_layout.tsx
import { Stack, useRouter } from 'expo-router'; // useRouter 임포트
import React from 'react';
import { Button } from 'react-native';

export default function BannerLayout() {
  const router = useRouter(); // router 객체 생성

  return (
    <Stack
      screenOptions={{
        headerShown: true, // 헤더 표시
        headerLeft: () => (
          <Button title="뒤로가기" onPress={() => router.back()} /> // 뒤로가기 버튼
        ),
      }}
    >
      {/* 배너 페이지들을 네비게이션에 등록 */}
      <Stack.Screen name="banner1" />
      <Stack.Screen name="banner2" />
      <Stack.Screen name="banner3" />
    </Stack>
  );
}
