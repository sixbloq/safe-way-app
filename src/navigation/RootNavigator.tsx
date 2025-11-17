import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import StoreScreen from '../screens/StoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';


const Tab = createBottomTabNavigator();


export default function RootNavigator() {
// For prototyping we show login as one of the stack screens
return (
<NavigationContainer>
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Mapa" component={MapScreen} />
<Tab.Screen name="Tienda" component={StoreScreen} />
<Tab.Screen name="Perfil" component={ProfileScreen} />
</Tab.Navigator>
</NavigationContainer>
);
}