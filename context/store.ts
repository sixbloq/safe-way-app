import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Report, VipState, User, getReports, addReport as addReportSvc, isVip, setVip as setVipSvc, getUser, setUser as setUserSvc } from '../services/mockBackend';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppState = {
  user: User;
  vip: VipState;
  reports: Report[];
  initDone: boolean;

  init: () => Promise<void>;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  addReport: (r: Report) => Promise<void>;
  refreshReports: () => Promise<void>;
  purchaseVip: (untilISO: string) => Promise<void>;
  cancelVip: () => Promise<void>;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      vip: { active: false, until: null },
      reports: [],
      initDone: false,
      init: async () => {
        const [u, v, rs] = await Promise.all([getUser(), isVip(), getReports()]);
        set({ user: u, vip: v, reports: rs, initDone: true });
      },
      login: async (email: string) => {
        const user = { email } as User;
        await setUserSvc(user);
        set({ user });
      },
      logout: async () => {
        await setUserSvc(null);
        set({ user: null });
      },
      addReport: async (r: Report) => {
        const next = await addReportSvc(r);
        set({ reports: next });
      },
      refreshReports: async () => {
        const rs = await getReports();
        set({ reports: rs });
      },
      purchaseVip: async (untilISO: string) => {
        await setVipSvc(true, untilISO);
        set({ vip: { active: true, until: untilISO } });
      },
      cancelVip: async () => {
        await setVipSvc(false, null);
        set({ vip: { active: false, until: null } });
      },
    }),
    {
      name: 'safe_way_zustand_cache',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ user: s.user, vip: s.vip })
    }
  )
);
