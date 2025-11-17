import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../../components/Button';
import { useAppStore } from '../../context/store';
import * as Location from 'expo-location';

export default function ReportScreen({ navigation }: any) {
  const addReport = useAppStore(s => s.addReport);
  const [type, setType] = useState('robo');
  const [desc, setDesc] = useState('');

  const submit = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const loc = await Location.getCurrentPositionAsync({});
    const report = {
      id: Date.now().toString(),
      type,
      desc,
      level: type === 'robo' || type === 'asalto' ? 'high' : 'medium',
      lat: loc.coords.latitude,
      lng: loc.coords.longitude,
      createdAt: new Date().toISOString(),
    } as any;
    await addReport(report);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar incidente</Text>
      <Text style={styles.label}>Tipo</Text>
      <TextInput value={type} onChangeText={setType} style={styles.input} />
      <Text style={styles.label}>Descripción</Text>
      <TextInput value={desc} onChangeText={setDesc} style={styles.input} />
      <Button title="Enviar" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 12 },
  label: { color: '#ccc', marginTop: 8, marginBottom: 6 },
  input: { backgroundColor: '#111', color: '#fff', borderWidth: 1, borderColor: '#333', padding: 12, borderRadius: 10 },
});