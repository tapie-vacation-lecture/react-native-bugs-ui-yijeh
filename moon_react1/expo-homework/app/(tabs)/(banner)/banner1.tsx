import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRouter } from 'expo-router'; // **useRouter** 훅을 사용하여 뒤로가기 처리

export default function Banner1Screen() {
  const router = useRouter();  // **router** 사용하여 뒤로 가기 기능

  return (
    <View style={styles.container}>
      <Button title="뒤로가기" onPress={() => router.back()} />  {/* **뒤로가기 버튼** */}
      <Text style={styles.title}>배너 1 상세 화면</Text>
      <Image
        source={require('../../../assets/images/adaptive-icon.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        배너 1에 대한 상세 설명이 여기에 나옵니다. 자세한 정보를 확인해 주세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
