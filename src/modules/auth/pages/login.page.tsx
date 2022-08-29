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

    const { current_point_list, create_new_point, remove_last_point } = useGameStore();

    console.log(current_point_list);

    return (
        <Stack mx={2}>
            <Typography sx={hi} variant='caption'>
                Login page
            </Typography>

            <Stack>
                {/* <Button variant='containedSizeLarge' size='large' onClick={addNewTurn}>
                    Add turn new
                </Button> */}

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
            </Stack>
        </Stack>
    );
};
