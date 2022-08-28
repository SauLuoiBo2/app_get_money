import React, { PropsWithChildren } from "react";

import MuiTheme from "../mui";
import StyledTheme from "../styled-components";

export interface ThemeAppProviderProps extends PropsWithChildren {}

export const ThemeAppProvider: React.FC<ThemeAppProviderProps> = ({ children }) => {
    return (
        <StyledTheme>
            <MuiTheme>{children}</MuiTheme>
        </StyledTheme>
    );
};
