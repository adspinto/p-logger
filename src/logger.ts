import { updateCounter } from "./counter";
import { defaults } from "./config";
import { buildMethodString } from "./stringbuilder";
import { AxiosError, AxiosResponse } from "axios";

export const customLogger = {
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios Requests
     * @param config Axios response
     * @returns logs the data
     */
    request: () => {},
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios responses
     * @param config Axios response
     * @returns logs the data
     */
    success: (response: AxiosResponse) => {
        const { config, status, data } = response;
        console.groupCollapsed(
            defaults.tldr,
            buildMethodString(response),
            defaults.resNumber,
            updateCounter(defaults.response),
            config.url,
            status,
        );
        console.log({
            baseURL: config.baseURL,
            url: config.url,
            responseStatus: status,
            responseData: data,
            config,
        });
        console.groupEnd();
        return config;
    },
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios errors
     * @param error Axios error
     * @returns logs the error data
     */
    error: (error: AxiosError) => {
        const info = error.response;
        updateCounter(defaults.response);
        updateCounter(defaults.error);
        console.groupCollapsed(defaults.tldr, buildMethodString(info, defaults.error), info.config.url, info.status);
        console.log({
            baseURL: info.config.baseURL,
            url: info.config.url,
            responseStatus: info.status,
            responseData: info?.data,
            config: info.config,
        });
        console.groupEnd();
        return Promise.reject(error);
    },
};
