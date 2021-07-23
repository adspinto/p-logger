import { AxiosError, AxiosResponse } from "axios";
import { defaults } from "./config/defaults";

export const buildMethodString = (config: AxiosResponse | AxiosError | undefined, type = defaults.response) => {
    const logMethodPost = config?.config?.method?.length === 4 ? " " : "";
    const logMethodGetOrPut = config?.config?.method?.length === 3;

    switch (type) {
        case defaults.error:
        case defaults.response:
            return `${config?.config.method?.toUpperCase()}${logMethodGetOrPut ? "  " : logMethodPost}`;
        case defaults.request:
            return "";
        default:
            return "";
    }
}
