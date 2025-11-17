import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useAppStore } from '../../context/store';
import { purchaseVipMonthly } from '../../services/iap';

export default function StoreScreen() {
  const vip = useAppStore(s => s.vip);
  const setVip = useAppStore(s => s.purchaseVip);
  const [loading, setLoading] = useState(false);

  const buy = async () => {
    setLoading(true);
    const res = await purchaseVipMonthly();
    if (res.success) await setVip(res.until);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safe Way VIP</Text>
      <Text style={styles.text}>Beneficios:</Text>
      <Text style={styles.text}>• Mapa sin anuncios</Text>
      <Text style={styles.text}>• Acceso a zonas peligrosas avanzadas</Text>
      <Text style={styles.text}>• Reportes ilimitados</Text>

      {!vip.active ? (
        <Button title={loading ? 'Procesando…' : 'Suscripción mensual VIP — $2.99'} onPress={buy} />
      ) : (
        <Text style={[styles.text, { color: '#4caf50', marginTop: 12 }]}>VIP activo hasta: {new Date(vip.until!).toLocaleString()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 12 },
  text: { color: '#ddd', marginVertical: 4 },
});