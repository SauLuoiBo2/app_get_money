// Vision UI Dashboard React Base Styles

import { size } from "@/theme/base";
import { light_colors } from "@/theme/base/light-color";
import { pxToRem } from "@/theme/function";

export default {
    base: {
        backgroundColor: light_colors.primary.main,
        minHeight: pxToRem(40),
        color: light_colors.text.main,
        // boxShadow: buttonBoxShadow.main,
        padding: `${pxToRem(12)} ${pxToRem(24)}`,

        "&:hover": {
            backgroundColor: light_colors.primary.main,
            // boxShadow: buttonBoxShadow.stateOf,
        },

        "&:focus": {
            // boxShadow: buttonBoxShadow.stateOf,
        },

        "&:active, &:active:focus, &:active:hover": {
            opacity: 0.85,
            // boxShadow: buttonBoxShadow.stateOf,
        },

        "&:disabled": {
            // boxShadow: buttonBoxShadow.main,
        },

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(16)} !important`,
        },
    },

    small: {
        minHeight: pxToRem(32),
        padding: `${pxToRem(8)} ${pxToRem(32)}`,
        fontSize: size.padding,
        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(12)} !important`,
        },
    },

    large: {
        minHeight: pxToRem(47),
        padding: `${pxToRem(14)} ${pxToRem(64)}`,
        fontSize: size.padding,
        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(22)} !important`,
        },
    },

    primary: {
        backgroundColor: size.padding,

        "&:hover": {
            backgroundColor: size.padding,
        },

        "&:focus:not(:hover)": {
            backgroundColor: size.padding,
            // boxShadow: buttonBoxShadow.stateOfNotHover,
        },
    },

    secondary: {
        backgroundColor: light_colors.text.main,

        "&:hover": {
            backgroundColor: light_colors.text.main,
        },

        "&:focus:not(:hover)": {
            backgroundColor: light_colors.text.main,
            // boxShadow: light_colors.text.main,
        },
    },
};
