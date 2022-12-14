import { blue, grey, red } from "@mui/material/colors";

export const light_colors = {
    background: {
        default: "#f8f9fa",
        home: "#fcf0f1",
    },
    comcom: {
        black: "#000",
        white: "#fff",
    },
    text: {
        primary: "#fcf0f1",
        secondary: "red",
        disabled: "#9e9e9e",
        main: grey[900],
    },
    primary: {
        main: red[500],
        focus: red[300],
    },
    secondary: {
        main: blue[500],
        focus: blue[300],
    },
    success: {
        main: "#2e7d32",
        focus: "#4caf50",
    },
    warning: {
        main: "#ed6c02",
        focus: "ff9800",
    },
};

export type ColorThemeType = typeof light_colors;
