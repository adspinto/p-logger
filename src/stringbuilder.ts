import { defaults } from "./config/defaults";
import { AxiosResponse } from "axios";

export const buildMethodString = (config: AxiosResponse, type: string = defaults.response) => {
    const logMethodPost = config.config?.method?.length === 4 ? " " : "";
    const logMethodGetOrPut = config.config?.method?.length === 3;

    switch (type) {
        case defaults.error:
        case defaults.response:
            return `${config.config.method?.toUpperCase()}${logMethodGetOrPut ? "  " : logMethodPost}`;
        case defaults.request:
            return "";
        default:
            return "";
    }
}
