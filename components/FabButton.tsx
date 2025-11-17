import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = { onPress?: () => void; label?: string };
export default function FabButton({ onPress, label = '+' }: Props) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: '#000', fontSize: 26, fontWeight: '800' },
});