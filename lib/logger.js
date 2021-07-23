"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logRequest = exports.logSuccess = void 0;
const defaults_1 = require("./config/defaults");
const stringbuilder_1 = require("./stringbuilder");
const counter_1 = require("./counter");
/**
 * Custom Logger to show simple data and detailed data colapsed from axios responses
 * @param config Axios response
 * @returns logs the data
 */
const logSuccess = (response) => {
    const { config, status, data } = response;
    console.groupCollapsed(defaults_1.defaults.tldr, stringbuilder_1.buildMethodString(response), defaults_1.defaults.resNumber, counter_1.updateCounter(defaults_1.defaults.response), config.url, status);
    console.log({
        baseURL: config.baseURL,
        url: config.url,
        responseStatus: status,
        responseData: data,
        config,
    });
    console.groupEnd();
    return response;
};
exports.logSuccess = logSuccess;
/**
 * Custom Logger to show simple data and detailed data colapsed from axios Requests
 * @param config Axios response
 * @returns logs the data
*/
const logRequest = () => { };
exports.logRequest = logRequest;
/**
 * Custom Logger to show simple data and detailed data colapsed from axios errors
 * @param error Axios error
 * @returns logs the error data
*/
const logError = () => (error) => {
    const info = error.response;
    console.groupCollapsed(defaults_1.defaults.tldr, stringbuilder_1.buildMethodString(info, defaults_1.defaults.error), defaults_1.defaults.errorNumber, counter_1.updateCounter(defaults_1.defaults.error), info === null || info === void 0 ? void 0 : info.config.url, info === null || info === void 0 ? void 0 : info.status);
    console.log({
        baseURL: info === null || info === void 0 ? void 0 : info.config.baseURL,
        url: info === null || info === void 0 ? void 0 : info.config.url,
        responseStatus: info === null || info === void 0 ? void 0 : info.status,
        responseData: info === null || info === void 0 ? void 0 : info.data,
        config: info === null || info === void 0 ? void 0 : info.config,
    });
    console.groupEnd();
    return Promise.reject(error);
};
exports.logError = logError;
