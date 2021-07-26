import { defaults } from "./config/defaults";
import { buildMethodString } from "./stringbuilder";
import { updateCounter } from "./counter";
import { AxiosError, AxiosResponse } from "axios";

/**
 * Custom Logger to show simple data and detailed data colapsed from axios responses
 * @param config Axios response
 * @returns logs the data
 */
export const logSuccess = (response: AxiosResponse): AxiosResponse => {
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
    return response;
};

/**
 * Custom Logger to show simple data and detailed data colapsed from axios Requests
 * @param config Axios response
 * @returns logs the data
*/
export const logRequest = () => {};

/**
 * Custom Logger to show simple data and detailed data colapsed from axios errors
 * @param error Axios error
 * @returns logs the error data
*/
export const logError = (error: AxiosError): Promise<AxiosError> => {
    const info = error.response;
    console.groupCollapsed(
        defaults.tldr, 
        buildMethodString(info, defaults.error), 
        defaults.errorNumber,
        updateCounter(defaults.error), 
        info?.config.url, info?.status
    );
    console.log({
        baseURL: info?.config.baseURL,
        url: info?.config.url,
        responseStatus: info?.status,
        responseData: info?.data,
        config: info?.config,
    });
    console.groupEnd();
    return Promise.reject(error);
};
