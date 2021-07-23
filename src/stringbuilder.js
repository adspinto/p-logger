"use strict";
exports.__esModule = true;
exports.buildMethodString = void 0;
var defaults_1 = require("./config/defaults");
var buildMethodString = function (config, type) {
    var _a, _b, _c, _d, _e;
    if (type === void 0) { type = defaults_1.defaults.response; }
    var logMethodPost = ((_b = (_a = config.config) === null || _a === void 0 ? void 0 : _a.method) === null || _b === void 0 ? void 0 : _b.length) === 4 ? " " : "";
    var logMethodGetOrPut = ((_d = (_c = config.config) === null || _c === void 0 ? void 0 : _c.method) === null || _d === void 0 ? void 0 : _d.length) === 3;
    switch (type) {
        case defaults_1.defaults.error:
        case defaults_1.defaults.response:
            return "" + ((_e = config.config.method) === null || _e === void 0 ? void 0 : _e.toUpperCase()) + (logMethodGetOrPut ? "  " : logMethodPost);
        case defaults_1.defaults.request:
            return "";
        default:
            return "";
    }
};
exports.buildMethodString = buildMethodString;
