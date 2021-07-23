import { AxiosError, AxiosResponse } from "axios";
/**
 * Custom Logger to show simple data and detailed data colapsed from axios responses
 * @param config Axios response
 * @returns logs the data
 */
export declare const logSuccess: (response: AxiosResponse) => AxiosResponse;
/**
 * Custom Logger to show simple data and detailed data colapsed from axios Requests
 * @param config Axios response
 * @returns logs the data
*/
export declare const logRequest: () => void;
/**
 * Custom Logger to show simple data and detailed data colapsed from axios errors
 * @param error Axios error
 * @returns logs the error data
*/
export declare const logError: () => (error: AxiosError) => Promise<AxiosError>;
