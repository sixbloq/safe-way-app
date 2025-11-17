import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function FabButton({ onPress, label = '+' }: any) {
return (
<TouchableOpacity style={styles.fab} onPress={onPress}>
<Text style={styles.text}>{label}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
fab: {
position: 'absolute',
right: 20,
bottom: 80,
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: '#ff5b5b',
alignItems: 'center',
justifyContent: 'center',
elevation: 6,
},
text: { color: 'white', fontSize: 28, fontWeight: '600' }
});