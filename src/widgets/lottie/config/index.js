import * as setting_gear from "../json/102496-settings-gear.json";
import * as error_doodle from "../json/102573-s2s-error-page.json";

const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const settingGear = {
    animationData: setting_gear.default,
    ...options,
};

const errorDoodle = {
    animationData: error_doodle.default,
    ...options,
};

export const optionsLottie = {
    settingGear,
    errorDoodle,
};
