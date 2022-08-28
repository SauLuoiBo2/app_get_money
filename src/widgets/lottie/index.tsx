import React from "react";
import Lottie, { EventListener } from "react-lottie";

import { optionsLottie } from "./config";

export interface CustomLottieProps {
    eventListeners?: ReadonlyArray<EventListener>;
}

export const SplashLottieSettingGear: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <>
            <Lottie options={optionsLottie.settingGear} isClickToPauseDisabled eventListeners={eventListeners} />
        </>
    );
};

export const SplashLottieErrorDoodle: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <>
            <Lottie options={optionsLottie.errorDoodle} isClickToPauseDisabled eventListeners={eventListeners} />
        </>
    );
};

export * from "./config";
