import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function MapMarker({ level }: any) {
const bg = level === 'high' ? '#ff4d4d' : level === 'medium' ? '#ffcc00' : '#4caf50';
return (
<View style={[styles.wrapper, { backgroundColor: bg }]}>
<Text style={styles.txt}>{level === 'high' ? '¡P!' : level === 'medium' ? '!' : '✓'}</Text>
</View>
);
}


const styles = StyleSheet.create({
wrapper: {
padding: 6,
borderRadius: 8,
borderWidth: 2,
borderColor: '#fff',
},
txt: { color: '#fff', fontWeight: '700' }
});