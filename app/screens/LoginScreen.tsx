import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAppStore } from '../../context/store';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const login = useAppStore(s => s.login);
  const init = useAppStore(s => s.init);
  const initDone = useAppStore(s => s.initDone);

  useEffect(() => { if (!initDone) init(); }, [initDone]);

  const onLogin = async () => {
    if (!email) return;
    await login(email.trim().toLowerCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safe Way</Text>
      <Input label="Email" value={email} onChangeText={setEmail} placeholder="tu@email" />
      <Input label="Contraseña" value={pass} onChangeText={setPass} placeholder="••••••" secureTextEntry />
      <Button title="Ingresar" onPress={onLogin} />
      <Button title="Crear cuenta" variant="secondary" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 28, fontWeight: '800', marginBottom: 16, textAlign: 'center' },
});