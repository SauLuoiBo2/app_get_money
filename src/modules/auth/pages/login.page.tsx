import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

import { ResultEnum } from "@/store/slices/auth/history-slice";
import { usePersistStore } from "@/store/useBearStore";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const hi: SxProps<Theme> = {
        fontSize: { sm: 12, lg: 20 },
        wordWrap: "break-word",
        width: "11rem",
        color: red[400],
    };

    const { getStrateNext, addNewTurn, addResult, subResult, getLastResult } = usePersistStore();

    console.log(getLastResult());
    console.log(getStrateNext());
    return (
        <Stack mx={2}>
            <Typography sx={hi} variant='caption'>
                Login page
            </Typography>

            <Stack>
                <Button variant='containedSizeLarge' size='large' onClick={addNewTurn}>
                    Add turn new
                </Button>

                <Button variant='containedSizeLarge' size='large' onClick={() => addResult(ResultEnum.TAI)}>
                    Add TAI
                </Button>

                <Button variant='containedSizeLarge' size='large' onClick={() => addResult(ResultEnum.XIU)}>
                    Add XIU
                </Button>
                <Button variant='containedSizeLarge' size='large' onClick={subResult}>
                    CLEAR RESULT
                </Button>
            </Stack>
        </Stack>
    );
};
