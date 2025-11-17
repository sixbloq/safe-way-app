import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { useAppStore } from './context/store';

export default function App() {
  const init = useAppStore(s => s.init);
  const initDone = useAppStore(s => s.initDone);
  useEffect(() => { if (!initDone) init(); }, [initDone]);

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});