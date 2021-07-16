type Defaults = {
    tldr: string;
}

export let defaults = {
    tldr: "[TLDR]:",
    resNumber: `ResNo:`,
    reqNumber: `ReqNo:`,
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
