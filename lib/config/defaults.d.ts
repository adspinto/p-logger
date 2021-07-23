declare type Defaults = {
    tldr?: string;
    resNumber?: string;
    reqNumber?: string;
    errorNumber?: string;
    response?: string;
    request?: string;
    error?: string;
};
export declare let defaults: {
    tldr: string;
    resNumber: string;
    reqNumber: string;
    errorNumber: string;
    response: string;
    request: string;
    error: string;
};
export declare const setConfig: (newDefaults: Defaults) => void;
export {};
