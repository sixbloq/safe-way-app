# Safe Way (Expo + React Native)

Aplicación móvil tipo Waze para visualizar zonas peligrosas en un mapa, con login simple, reportes de usuarios y suscripción VIP mensual (mock funcional).

## Requisitos
- Node 18+
- Expo CLI (se instala automáticamente con los scripts)
- Expo Go en el móvil (opcional)

## Instalación y ejecución

```powershell
# Desde la carpeta del proyecto
npm install
npx expo start
```

- Presiona "a" para Android o escanea el QR con Expo Go.

## Funcionalidad
- Mapa interactivo con marcadores por nivel de riesgo (alto/medio/bajo)
- Posición del usuario en tiempo real (requiere permisos de ubicación)
- Reporte de incidentes (usa ubicación actual)
- Login/Registro fake con persistencia en AsyncStorage
- Tienda con suscripción VIP mensual (mock). Beneficios: sin anuncios, datos avanzados, reportes ilimitados.

## Estructura
- `app/` pantallas y navegación
- `components/` UI reutilizable (tema blanco/negro)
- `services/` API fake (hotspots, storage, VIP)
- `context/` store global con Zustand
- `hooks/` hooks utilitarios
- `src/assets/` icono (reutilizado)

## Notas
- In-App Purchases es un mock local (`services/iap.ts`). Puedes integrar `expo-in-app-purchases` en producción.
- `react-native-maps` usa proveedor de Google si está disponible.
- Permisos de ubicación son solicitados al abrir el mapa.
