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

const useDistrictStore = create((set) => ({
  districtName: null,
  action: {
    setDistrictName: (newDistrict) =>
      set(() => ({
        districtName: newDistrict,
      })),
  },
}));

export const useProvinceId = () =>
  useProvinceStore((state) => state.provinceId);
export const useProvinceActions = () =>
  useProvinceStore((state) => state.action);

export const useDistrictName = () =>
  useDistrictStore((state) => state.districtName);
export const useDistrictActions = () =>
  useDistrictStore((state) => state.action);
