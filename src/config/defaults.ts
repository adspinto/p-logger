type Defaults = {
    tldr: string;
}

var defaults = {
    tldr: "[TLDR]:",
    resNumber: `ResNo:`,
    reqNumber: `ReqNo:`,
    response: "response",
    request: "request",
    error: "error"
}

const setConfig = (newDefaults) => {
    defaults = {
        ...defaults,
        ...newDefaults,
    }
}

module.exports = setConfig;
module.exports = defaults;