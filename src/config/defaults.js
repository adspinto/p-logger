"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.setConfig = exports.defaults = void 0;
exports.defaults = {
    tldr: "[TLDR]:",
    resNumber: "ResNo:",
    reqNumber: "ReqNo:",
    errorNumber: "ErrNo:",
    response: "response",
    request: "request",
    error: "error"
};
var setConfig = function (newDefaults) {
    exports.defaults = __assign(__assign({}, exports.defaults), newDefaults);
};
exports.setConfig = setConfig;
