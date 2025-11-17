import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAppStore } from '../../context/store';

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const login = useAppStore(s => s.login);

  const onRegister = async () => {
    if (!email) return;
    await login(email.trim().toLowerCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Input label="Email" value={email} onChangeText={setEmail} placeholder="tu@email" />
      <Input label="Contraseña" value={pass} onChangeText={setPass} placeholder="••••••" secureTextEntry />
      <Button title="Registrarme" onPress={onRegister} />
      <Button title="Volver" variant="secondary" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginBottom: 16, textAlign: 'center' },
});