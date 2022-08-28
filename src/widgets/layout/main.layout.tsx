import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";
import { usePersistStore } from "@/store/useBearStore";
export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    const { themeColorMode, themeColorOnToggle } = usePersistStore();
    useScrollToTop();
    return (
        <>
            <header>
                <div>{themeColorMode}</div>
                <button onClick={themeColorOnToggle}>thmeme</button>
            </header>
            <main style={{ width: "100%" }}>
                <React.Suspense fallback={<div>loanding ...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <footer>footer</footer>
        </>
    );
};
