import { ThemeOptions } from "@mui/material";

import { breakpoint } from "../base";
import { dark_colors } from "../base/dark-color";
import { light_colors } from "../base/light-color";
import { buttonMui } from "./mui-components/button";
import list from "./mui-components/list";
import listItem from "./mui-components/list/listItem";
import listItemText from "./mui-components/list/listItemText";

export const mui_theme: ThemeOptions = {
    breakpoints: {
        values: { ...breakpoint },
    },
    status: {
        danger: "red",
    },
    // typography: { ...typography },
    fonts: {
        title: "Oswald, sans-serif",
        main: "Poppins, sans-serif",
    },

    components: {
        MuiButton: { ...buttonMui },
        MuiList: { ...list },
        MuiListItem: { ...listItem },
        MuiListItemText: { ...listItemText },
    },
};

export const muiLightTheme = {
    ...mui_theme,
    palette: { ...light_colors },
};

export const muiDarkTheme = {
    ...mui_theme,
    palette: { ...dark_colors },
};
