// Simulate purchase flow for prototyping
import { setVip } from './mockBackend';


export async function purchaseVipMonthly() {
// Simulate a network delay
await new Promise(r => setTimeout(r, 1000));
const until = new Date();
until.setMonth(until.getMonth() + 1);
await setVip(true, until.toISOString());
return { success: true, until: until.toISOString() };
}


export async function cancelVip() {
await setVip(false, null);
return { success: true };
}