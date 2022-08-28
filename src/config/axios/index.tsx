import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import querySting from "query-string";

import { ENV } from "../env";

const { API_ENDPOINT, API_TIMEOUT, BASE_URL } = ENV.API;

const axiosClient = axios.create({
    baseURL: API_ENDPOINT,
    timeout: API_TIMEOUT,
    headers: {
        Accept: "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        responseEncoding: "utf8",
        responseType: "json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL || "*",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "X-Application": "web app",
        "X-Version": "1.0.1",
    },
    paramsSerializer: (params) => querySting.stringify(params),
});

export const request = (options: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
        // logger.debug('Response API:', response?.data);
        return response?.data;
    };
    const onError = async (error: AxiosError) => {
        // logger.debug('Axios Options:', options);
        // optionally catch errors and add additional logging here
        await Promise.reject({
            statusCode: error.status,
            message: error.message,
            statusText: error?.response?.statusText,
            status: error?.response?.status,
            data: error?.response?.data,
        });
    };
    return axiosClient(options).then(onSuccess).catch(onError);
};

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   async (error) => {
//     // Handle errors
//     throw error;
//   }
// );

// axiosClient.interceptors.request.use(
//     async (config) => {
//         // Handle token here ...

//         // config.headers["Access-Control-Allow-Methods"] =
//         //   "GET, PUT, POST, DELETE, OPTIONS";

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosClient;
