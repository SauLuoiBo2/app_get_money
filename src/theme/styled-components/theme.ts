import { breakpoint, fonts, size } from "../base";
import { dark_colors } from "../base/dark-color";
import { light_colors } from "../base/light-color";
import { getBreakpointMaxWidth } from "../function";

export const styled_theme = {
    fonts: {
        ...fonts,
    },
    breakpoint: {
        xs: getBreakpointMaxWidth(breakpoint.xs),
        sm: getBreakpointMaxWidth(breakpoint.sm),
        md: getBreakpointMaxWidth(breakpoint.md),
        lg: getBreakpointMaxWidth(breakpoint.lg),
        xl: getBreakpointMaxWidth(breakpoint.xl),
        xxl: getBreakpointMaxWidth(breakpoint.xxl),
    },
    size: { ...size },
};

export const lightTheme = {
    ...styled_theme,
    colors: { ...light_colors },
};

export const darkTheme = {
    ...styled_theme,
    colors: { ...dark_colors },
};

export type ThemeStyledType = typeof lightTheme;
