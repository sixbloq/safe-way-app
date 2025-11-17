import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import FabButton from '../../components/FabButton';
import MapMarker from '../../components/MapMarker';
import { fetchHotspots } from '../../services/hotspots';
import { useAppStore } from '../../context/store';
import AdBanner from '../../components/AdBanner';

export default function MapScreen({ navigation }: any) {
  const [region, setRegion] = useState<any>(null);
  const reports = useAppStore(s => s.reports);
  const refreshReports = useAppStore(s => s.refreshReports);

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

  useEffect(() => { refreshReports(); }, []);

  const [hotspots, setHotspots] = useState<any[]>([]);
  useEffect(() => { (async () => setHotspots(await fetchHotspots()))(); }, []);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={region} showsUserLocation>
          {hotspots.map(m => (
            <Marker coordinate={{ latitude: m.lat, longitude: m.lng }} key={m.id}>
              <MapMarker level={m.level} />
            </Marker>
          ))}
          {reports.map((r: any) => (
            <Marker coordinate={{ latitude: r.lat, longitude: r.lng }} key={r.id}>
              <MapMarker level={r.level} />
            </Marker>
          ))}
        </MapView>
      ) : null}

      <FabButton onPress={() => navigation.navigate('Report')} label="+" />
      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  map: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
});