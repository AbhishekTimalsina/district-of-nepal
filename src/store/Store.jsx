import { create } from "zustand";

const useProvinceStore = create((set) => ({
  provinceId: 0,
  action: {
    updateProvinceId: (val) =>
      set(() => ({
        provinceId: val,
      })),
  },
}));

export const useProvinceId = () =>
  useProvinceStore((state) => state.provinceId);
export const useProvinceActions = () =>
  useProvinceStore((state) => state.action);
