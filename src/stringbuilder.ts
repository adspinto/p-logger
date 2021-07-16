import { AxiosResponse } from "axios";
import { defaults } from "./config";

export const buildMethodString = (config: AxiosResponse, type: string = defaults.response) => {
    const logMethodPost = config.config?.method?.length === 4 ? " " : "";
    const logMethodGetOrPut = config.config?.method?.length === 3;

    switch (type) {
        case defaults.response:
            return `${config.config.method?.toUpperCase()}${logMethodGetOrPut ? "  " : logMethodPost}`
        case defaults.request:
            return "";
        case defaults.error:
            
        
    }
}