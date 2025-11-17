// Minimal login screen for future expansion (not wired in bottom tabs)
import React from 'react';
import { View, Text, Button } from 'react-native';


export default function LoginScreen({ navigation }: any) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{ fontSize: 24, marginBottom: 20 }}>Safe Way</Text>
<Button title="Ingresar con Google (simulado)" onPress={() => { /* no-op */ }} />
<Button title="Entrar como invitado" onPress={() => navigation.navigate('Mapa')} />
</View>
);
}