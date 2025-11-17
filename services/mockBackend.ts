import { saveJSON, loadJSON } from './storage';
import type { RiskLevel } from './hotspots';

const REPORTS_KEY = 'safe_way_reports_v1';
const VIP_KEY = 'safe_way_vip_v1';
const USER_KEY = 'safe_way_user_v1';

export type Report = {
  id: string;
  type: string;
  desc: string;
  level: RiskLevel;
  lat: number;
  lng: number;
  createdAt: string;
};

export type VipState = { active: boolean; until: string | null };
export type User = { email: string } | null;

export async function getReports(): Promise<Report[]> {
  return await loadJSON<Report[]>(REPORTS_KEY, []);
}

export async function addReport(report: Report): Promise<Report[]> {
  const current = await getReports();
  const next = [report, ...current];
  await saveJSON(REPORTS_KEY, next);
  return next;
}

export async function isVip(): Promise<VipState> {
  return await loadJSON<VipState>(VIP_KEY, { active: false, until: null });
}

export async function setVip(active: boolean, until: string | null = null) {
  await saveJSON(VIP_KEY, { active, until });
}

export async function getUser(): Promise<User> {
  return await loadJSON<User>(USER_KEY, null);
}

export async function setUser(user: User) {
  await saveJSON(USER_KEY, user);
}
