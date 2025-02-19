// app/(tabs)/(banner)/banner3.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Banner3Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="뒤로가기" onPress={() => router.back()} />
      <Text style={styles.title}>배너 3 상세 화면</Text>
      <Image
        source={require('../../../assets/images/favicon.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        배너 3에 대한 상세 설명이 여기에 나옵니다.
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
