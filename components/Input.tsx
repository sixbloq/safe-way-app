import React from 'react';
import { TextInput, StyleSheet, View, Text, ViewStyle } from 'react-native';

type Props = {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  style?: ViewStyle;
};

export default function Input({ label, value, placeholder, onChangeText, secureTextEntry, style }: Props) {
  return (
    <View style={style}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor="#888"
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: '#ccc', marginBottom: 6 },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    padding: 12,
    borderRadius: 10,
  },
});