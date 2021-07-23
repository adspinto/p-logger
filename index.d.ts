import { AxiosError, AxiosResponse } from "axios";
export declare type CustomLogger = {
    request: () => void;
    success: (respose: AxiosResponse) => AxiosResponse,
    error: (error: AxiosError) => Promise<AxiosError>
};