import { PATH } from "../pathname";

const { ERROR_PATH } = PATH;

export const errorRoute = () => {
    return {
        path: ERROR_PATH.ERROR_404,
        element: <div>error 404</div>,
    };
};
