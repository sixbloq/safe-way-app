import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useAppStore } from '../../context/store';

export default function ProfileScreen() {
  const user = useAppStore(s => s.user);
  const vip = useAppStore(s => s.vip);
  const logout = useAppStore(s => s.logout);
  const cancelVip = useAppStore(s => s.cancelVip);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.row}>Usuario: <Text style={styles.value}>{user?.email}</Text></Text>
      <Text style={styles.row}>VIP: <Text style={styles.value}>{vip.active ? `Activo hasta ${vip.until}` : 'No activo'}</Text></Text>
      {vip.active ? (
        <Button title="Cancelar VIP" onPress={cancelVip} />
      ) : null}
      <Button title="Cerrar sesión" variant="secondary" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 12 },
  row: { color: '#aaa', marginVertical: 4 },
  value: { color: '#fff', fontWeight: '700' },
});