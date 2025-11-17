import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { isVip } from '../services/mockBackend';
import { purchaseVipMonthly } from '../services/iapSimulator';


export default function StoreScreen() {
const [vip, setVip] = useState<any>({ active: false, until: null });
const [loading, setLoading] = useState(false);


useEffect(() => {
(async () => {
const v = await isVip();
setVip(v);
})();
}, []);


const buy = async () => {
setLoading(true);
const res = await purchaseVipMonthly();
if (res.success) setVip({ active: true, until: res.until });
setLoading(false);
};


return (
<View style={{ flex: 1, padding: 20 }}>
<Text style={{ fontSize: 22, fontWeight: '700' }}>Safe Way VIP</Text>
<Text style={{ marginTop: 12 }}>Beneficios:</Text>
<Text>• Rutas alternativas seguras (simulado)</Text>
<Text>• Alertas avanzadas</Text>
<Text>• Estadísticas detalladas</Text>


{!vip.active ? (
<Button title={loading ? 'Procesando...' : 'Comprar VIP mensual — 5.99 USD'} onPress={buy} disabled={loading} />
) : (
<Text style={{ marginTop: 12, color: 'green' }}>Tu VIP está activo hasta: {new Date(vip.until).toLocaleString()}</Text>
)}
</View>
);
}