import contained from "./contained";
import root from "./root";

export const buttonMui: any = {
    defaultProps: {
        disableRipple: true,
    },
    styleOverrides: {
        root: { ...root },
        contained: { ...contained.base },
        containedSizeSmall: { ...contained.small },
        containedSizeLarge: { ...contained.large },
        containedPrimary: { ...contained.primary },
        containedSecondary: { ...contained.secondary },
        // outlined: { ...outlined.base },
        // outlinedSizeSmall: { ...outlined.small },
        // outlinedSizeLarge: { ...outlined.large },
        // outlinedPrimary: { ...outlined.primary },
        // outlinedSecondary: { ...outlined.secondary },
        // text: { ...text.base },
        // textSizeSmall: { ...text.small },
        // textSizeLarge: { ...text.large },
        // textPrimary: { ...text.primary },
        // textSecondary: { ...text.secondary },
    },
};

export type ButtonThemeType = typeof buttonMui;
