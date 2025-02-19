import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

// 1) FontAwesome 임포트
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// 2) 커스텀 아이콘 컴포넌트
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // iOS에서 BlurView 등 적용 가능
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: '홈',
          // 3) tabBarIcon에서 FontAwesome 사용
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="boxtv"
        options={{
          tabBarLabel: '박스TV',
          tabBarIcon: ({ color }) => <TabBarIcon name="television" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my_song"
        options={{
          tabBarLabel: '내 음악',
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: '탐색',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: '24/7',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
