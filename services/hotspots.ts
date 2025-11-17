export type RiskLevel = 'high' | 'medium' | 'low';
export type Hotspot = {
  id: string;
  street: string;
  comuna: string;
  lat: number;
  lng: number;
  level: RiskLevel;
};

const FAKE_HOTSPOTS: Hotspot[] = [
  { id: 'h1', street: 'Av. Alameda 1000', comuna: 'Santiago Centro', lat: -33.4489, lng: -70.6693, level: 'high' },
  { id: 'h2', street: 'Matta 500', comuna: 'Santiago', lat: -33.457, lng: -70.648, level: 'medium' },
  { id: 'h3', street: 'Av. Grecia 2000', comuna: 'Ñuñoa', lat: -33.4565, lng: -70.598, level: 'low' },
];

export async function fetchHotspots(): Promise<Hotspot[]> {
  // Simula un fetch a una API remota
  await new Promise(r => setTimeout(r, 150));
  return FAKE_HOTSPOTS;
}
