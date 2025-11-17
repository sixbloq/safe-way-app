import React, { useState } from 'react';
import { View, TextInput, Button, Picker, Text } from 'react-native';
import { addReport } from '../services/mockBackend';
import * as Location from 'expo-location';


export default function ReportScreen({ navigation }: any) {
const [type, setType] = useState('robo');
const [desc, setDesc] = useState('');


const submit = async () => {
const loc = await Location.getCurrentPositionAsync({});
const report = {
id: Date.now().toString(),
type,
desc,
level: type === 'robo' || type === 'asalto' ? 'high' : 'medium',
lat: loc.coords.latitude,
lng: loc.coords.longitude,
createdAt: new Date().toISOString()
};
await addReport(report);
navigation.goBack();
};


return (
<View style={{ padding: 20 }}>
<Text style={{ fontSize: 18, marginBottom: 10 }}>Reportar incidente</Text>
<Text>Tipo</Text>
{/* Picker is deprecated in RN, but for prototype we keep it simple */}
<TextInput value={type} onChangeText={setType} style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} />
<Text>Descripción</Text>
<TextInput value={desc} onChangeText={setDesc} style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} />
<Button title="Enviar reporte (usar ubicación actual)" onPress={submit} />
</View>
);
}