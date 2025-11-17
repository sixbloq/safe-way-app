import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { isVip, setVip } from '../services/mockBackend';


export default function ProfileScreen() {
const [vip, setVipState] = useState<any>({ active: false, until: null });


useEffect(() => {
(async () => {
const v = await isVip();
setVipState(v);
})();
}, []);


const logout = async () => {
// For prototype, just clear vip
await setVip(false, null);
setVipState({ active: false, until: null });
};


return (
<View style={{ flex: 1, padding: 20 }}>
<Text style={{ fontSize: 22 }}>Perfil</Text>
<Text style={{ marginTop: 12 }}>Nombre: Usuario (simulado)</Text>
<Text>Estado VIP: {vip.active ? `Activo hasta ${vip.until}` : 'No VIP'}</Text>


<View style={{ marginTop: 20 }}>
<Button title="Cerrar sesión (simulado)" onPress={logout} />
</View>
</View>
);
}