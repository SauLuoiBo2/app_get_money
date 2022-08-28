// import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";

import { ThemeColorModeEnum } from "@/store/slices";
import { usePersistStore } from "@/store/useBearStore";

import { dark_colors } from "../base/dark-color";
import { light_colors } from "../base/light-color";
import { muiDarkTheme, muiLightTheme } from "../mui/theme";
import { darkTheme, lightTheme } from "../styled-components/theme";

export const useStyleTheme = () => {
    // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    // console.log(prefersDarkMode);

    const { themeColorMode } = usePersistStore();
    const STYLE_THEME = useMemo(
        () => (themeColorMode === ThemeColorModeEnum.DARK ? darkTheme : lightTheme),
        [themeColorMode]
    );
    const COLOR = useMemo(
        () => (themeColorMode === ThemeColorModeEnum.DARK ? dark_colors : light_colors),
        [themeColorMode]
    );
    const MUI_THEME = useMemo(
        () => (themeColorMode === ThemeColorModeEnum.DARK ? muiDarkTheme : muiLightTheme),
        [themeColorMode]
    );

    return { STYLE_THEME, MUI_THEME, COLOR };
};
