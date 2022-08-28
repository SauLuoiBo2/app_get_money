import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { useStyleTheme } from "../hook";
import { GlobalStyle } from "./global.style";

export interface StyledThemeProps extends PropsWithChildren {}

const StyledTheme: React.FC<StyledThemeProps> = ({ children }) => {
    const { STYLE_THEME } = useStyleTheme();
    return (
        <ThemeProvider theme={STYLE_THEME}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default StyledTheme;
