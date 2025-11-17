import AsyncStorage from '@react-native-async-storage/async-storage';


export async function saveJSON(key: string, value: any) {
await AsyncStorage.setItem(key, JSON.stringify(value));
}


export async function loadJSON(key: string, fallback: any = null) {
const raw = await AsyncStorage.getItem(key);
if (!raw) return fallback;
try { return JSON.parse(raw); } catch { return fallback; }
}


export async function removeKey(key: string) {
await AsyncStorage.removeItem(key);
}