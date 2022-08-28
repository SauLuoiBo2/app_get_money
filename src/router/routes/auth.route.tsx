import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { MainLayout } from "@/widgets";

import { PATH } from "../pathname";

const LoginPage = lazy(() => import("@/modules").then(({ LoginPage }) => ({ default: LoginPage })));
const RegisterPage = lazy(() => import("@/modules").then(({ RegisterPage }) => ({ default: RegisterPage })));

const { AUTH_PATH } = PATH;

export const authRoute = (isLoggedIn: boolean) => {
    return {
        path: "/",
        element: !isLoggedIn ? <MainLayout /> : <Navigate to='/' />,
        children: [
            { path: "", element: <Navigate to={"/" + AUTH_PATH.LOGIN} /> },
            { path: AUTH_PATH.LOGIN, element: <LoginPage /> },
            { path: AUTH_PATH.REGISTER, element: <RegisterPage /> },
        ],
    };
};
