import { createTheme, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { useStyleTheme } from "../hook";

export interface MuiThemeProps extends PropsWithChildren {}

const MuiTheme: React.FC<MuiThemeProps> = ({ children }) => {
    const { MUI_THEME } = useStyleTheme();

    const theme = createTheme({ ...MUI_THEME });
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
