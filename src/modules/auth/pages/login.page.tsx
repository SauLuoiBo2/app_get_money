import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

import { useGameStore } from "@/store/useGameStore";
import { ResultPointEnum } from "@/utils";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const hi: SxProps<Theme> = {
        fontSize: { sm: 12, lg: 20 },
        wordWrap: "break-word",
        width: "11rem",
        color: red[400],
    };

    const { save_current_to_history_list, create_new_point, remove_last_point, clear_current_list } = useGameStore();

    return (
        <Stack mx={2}>
            <Typography sx={hi} variant='caption'>
                Login page
            </Typography>
            <Stack>
                <Button
                    variant='containedSizeLarge'
                    size='large'
                    onClick={() => create_new_point(ResultPointEnum.BLACK)}
                >
                    Add TAI
                </Button>

                <Button
                    variant='containedSizeLarge'
                    size='large'
                    onClick={() => create_new_point(ResultPointEnum.WHITE)}
                >
                    Add XIU
                </Button>
                <Button variant='containedSizeLarge' size='large' onClick={remove_last_point}>
                    CLEAR RESULT
                </Button>
                <Button variant='containedSizeLarge' size='large' onClick={clear_current_list}>
                    CLEAT CURRENT
                </Button>

                <Button variant='containedSizeLarge' size='large' onClick={save_current_to_history_list}>
                    SAVE TO HISTORY
                </Button>
            </Stack>
        </Stack>
    );
};
