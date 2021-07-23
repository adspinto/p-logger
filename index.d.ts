import { AxiosError, AxiosResponse } from "axios";
export declare function logRequest(): void;
export declare function logSuccess(response: AxiosResponse): AxiosResponse;
export declare function logError(error: AxiosError): Promise<AxiosError>;
