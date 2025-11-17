// Simple mock backend for reports and VIP state using AsyncStorage
import { saveJSON, loadJSON } from './storage';


const REPORTS_KEY = 'safe_way_reports_v1';
const VIP_KEY = 'safe_way_vip_v1';


export async function getReports() {
return await loadJSON(REPORTS_KEY, []);
}


export async function addReport(report: any) {
const current = await getReports();
const next = [report, ...current];
await saveJSON(REPORTS_KEY, next);
return next;
}


export async function isVip() {
const v = await loadJSON(VIP_KEY, { active: false, until: null });
return v;
}


export async function setVip(active: boolean, until: string | null = null) {
await saveJSON(VIP_KEY, { active, until });
}