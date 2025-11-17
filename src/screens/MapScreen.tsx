import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import FabButton from '../components/FabButton';
import MapMarker from '../components/MapMarker';
import { getReports } from '../services/mockBackend';
import { useIsFocused } from '@react-navigation/native';


export default function MapScreen({ navigation }: any) {
const [region, setRegion] = useState<any>(null);
const [reports, setReports] = useState<any[]>([]);
const focused = useIsFocused();


useEffect(() => {
(async () => {
const { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') {
setRegion({ latitude: -33.45, longitude: -70.66, latitudeDelta: 0.03, longitudeDelta: 0.03 });
return;
}
const loc = await Location.getCurrentPositionAsync({});
setRegion({ latitude: loc.coords.latitude, longitude: loc.coords.longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 });
})();
}, []);


useEffect(() => {
(async () => {
const r = await getReports();
setReports(r);
})();
}, [focused]);


const sampleMarkers = [
{ id: 'm1', latitude: -33.45, longitude: -70.66, level: 'high' },
{ id: 'm2', latitude: -33.46, longitude: -70.65, level: 'medium' },
{ id: 'm3', latitude: -33.449, longitude: -70.655, level: 'low' },
];


return (
<View style={styles.container}>
{region ? (
<MapView
style={styles.map}
provider={PROVIDER_GOOGLE}
initialRegion={region}
showsUserLocation
>
{sampleMarkers.map(m => (
<Marker coordinate={{ latitude: m.latitude, longitude: m.longitude }} key={m.id}>
<MapMarker level={m.level} />
</Marker>
))}


{reports.map((r: any) => (
<Marker coordinate={{ latitude: r.lat, longitude: r.lng }} key={r.id}>
<MapMarker level={r.level} />
});