import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { changeLanguage } from "@/libs/translations/i18n";
import { Styles } from "@/theme";
import { SplashLottieErrorDoodle } from "@/widgets/lottie";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const hi: SxProps<Theme> = {
        fontSize: { sm: 12, lg: 20 },
        wordWrap: "break-word",
        width: "11rem",
        color: red[400],
    };

    const { t, i18n } = useTranslation("common");
    console.log(t("button.primary"));

    return (
        <Stack mx={2}>
            <Typography sx={hi} variant='caption'>
                Login page
            </Typography>

            <Link to={"/register"}> register</Link>
            <Styles.Position.Center>
                <div style={{ maxWidth: "900px" }}>
                    <SplashLottieErrorDoodle />
                </div>
            </Styles.Position.Center>

            <Button
                variant='containedSizeLarge'
                size='large'
                onClick={() => changeLanguage(i18n.language === "en" ? "vi" : "en")}
            >
                sdaads
            </Button>
        </Stack>
    );
};
