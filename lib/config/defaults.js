"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.defaults = void 0;
exports.defaults = {
    tldr: "[TLDR]:",
    resNumber: `ResNo:`,
    reqNumber: `ReqNo:`,
    errorNumber: `ErrNo:`,
    response: "response",
    request: "request",
    error: "error"
};
const setConfig = (newDefaults) => {
    exports.defaults = Object.assign(Object.assign({}, exports.defaults), newDefaults);
};
exports.setConfig = setConfig;
