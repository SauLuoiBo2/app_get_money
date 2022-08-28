import { GetPersistType, SetPersistType } from "@/store/model";

export enum ThemeColorModeEnum {
    LIGHT = 0,
    DARK = 1,
}

export interface ThemeStore {
    themeColorMode: ThemeColorModeEnum;
    themeColorOnToggle: () => void;
    themeColorOnLight: () => void;
    themeColorOnDark: () => void;
}

export const themeSlice: (set: SetPersistType, get: GetPersistType) => ThemeStore = (set, get) => ({
    // color_theme: initialState,
    themeColorMode: ThemeColorModeEnum.LIGHT,
    themeColorOnToggle: () => {
        if (get().themeColorMode === ThemeColorModeEnum.LIGHT) {
            set({ themeColorMode: ThemeColorModeEnum.DARK });
        } else {
            set({ themeColorMode: ThemeColorModeEnum.LIGHT });
        }
    },
    themeColorOnLight: () => {
        set({ themeColorMode: ThemeColorModeEnum.LIGHT });
    },
    themeColorOnDark: () => {
        set({ themeColorMode: ThemeColorModeEnum.DARK });
    },
});
