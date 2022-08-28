import React from "react";
import { Outlet } from "react-router-dom";
import { useBoolean, useTimeout } from "usehooks-ts";

import { TIME_APP } from "@/config";
import { renderCheckBoolean } from "@/libs";
import { Styles } from "@/theme";

import { SplashLottieSettingGear } from "../lottie";

export interface SplashAppLayoutProps {}

const { CenterApp } = Styles.Position;

const { SPLASH: time_delay } = TIME_APP;

export const SplashAppLayout: React.FC<SplashAppLayoutProps> = () => {
    const openSplash = useBoolean(false);

    useTimeout(openSplash.setTrue, time_delay);

    return (
        <>
            {renderCheckBoolean(
                openSplash.value,
                <Outlet />,
                <CenterApp>
                    <div style={{ maxWidth: "900px" }}>
                        <SplashLottieSettingGear />
                    </div>
                </CenterApp>
            )}
        </>
    );
};
