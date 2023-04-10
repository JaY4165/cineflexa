import { create } from "zustand";

interface BearState {
  hamBurgerOpened: boolean;
  changeHamBurgerOpened: (value: boolean) => void;
  sideBarOpened: boolean;
  changeSideBarOpened: (value: boolean) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  hamBurgerOpened: false,
  changeHamBurgerOpened: (value) =>
    set((state) => ({ hamBurgerOpened: value })),
  sideBarOpened: false,
  changeSideBarOpened: (value) => set((state) => ({ sideBarOpened: value })),
}));
