const { VITE_API_ENDPOINT } = import.meta.env;
const { VITE_BASE_URL } = import.meta.env;
const VITE_API_TIMEOUT = Number(import.meta.env.API_TIMEOUT || 15);
import { convertMiliSeconds } from "@/utils";
// api

const API = {
    BASE_URL: VITE_BASE_URL as string,
    API_ENDPOINT: VITE_API_ENDPOINT as string,
    API_TIMEOUT: convertMiliSeconds(VITE_API_TIMEOUT).getFromSeconds(),
};

export const ENV = {
    API: { ...API },
};
