import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";
export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    useScrollToTop();
    return (
        <>
            <header>header </header>
            <main style={{ width: "100%" }}>
                <React.Suspense fallback={<div>loanding ...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <footer>footer</footer>
        </>
    );
};
