/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeOptions } from "@mui/material";
import React from "react";

import { FontThemeType } from "../base";
import { ColorThemeType } from "../base/light-color";

declare module "@mui/material/styles" {
    interface ThemeOptions {
        status?: {
            danger: string;
        };
        fonts?: FontThemeType;
    }

    interface Theme {
        status: {
            danger: string;
        };
        fonts: FontThemeType;
    }
    interface PaletteOptions extends ColorThemeType {}

    interface Palette {
        hi: {
            danger: string;
        };
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        containedSizeSmall: true;
        containedSizeLarge: true;
        containedPrimary: true;
        containedSecondary: true;
    }
}
