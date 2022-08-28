import { Navigate } from "react-router-dom";

import { MainLayout } from "@/widgets";

export const appRoute = (isLoggedIn: boolean) => {
    return {
        path: "/",
        element: isLoggedIn ? <MainLayout /> : <Navigate to='/login' />,
        children: [
            { path: "home", element: <div>home</div> },
            { path: "about", element: <div>about</div> },
            // { path: '/*', element: <Navigate to='/app/dashboard' /> },
        ],
    };
};
