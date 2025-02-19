import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxTVScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>박스TV 화면</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
