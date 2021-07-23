// type Defaults = {
//     tldr?: string;
//     resNumber?: string;
//     reqNumber?: string;
//     errorNumber?: string;
//     response?: string;
//     request?: string;
//     error?: string
// }

export let defaults = {
    tldr: "[TLDR]:",
    resNumber: `ResNo:`,
    reqNumber: `ReqNo:`,
    errorNumber: `ErrNo:`,
    response: "response",
    request: "request",
    error: "error"
}

export const setConfig = (newDefaults) => {
    defaults = {
        ...defaults,
        ...newDefaults,
    }
}
