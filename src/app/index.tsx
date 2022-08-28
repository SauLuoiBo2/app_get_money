import "@/libs/translations";

import React from "react";

import { QueryProvider } from "@/config";
import { RoutesProvider } from "@/router";
import { ThemeAppProvider } from "@/theme";

const App: React.FC = () => {
    return (
        <QueryProvider>
            <ThemeAppProvider>
                <RoutesProvider />
            </ThemeAppProvider>
        </QueryProvider>
    );
};

export default App;
