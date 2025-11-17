import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppStore } from '../context/store';

export default function AdBanner() {
  const isVip = useAppStore(s => s.vip.active);
  if (isVip) return null;
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>Anuncio (mock)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    backgroundColor: '#111',
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },
  text: { color: '#aaa' },
});