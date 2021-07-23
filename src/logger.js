"use strict";
exports.__esModule = true;
exports.logError = exports.logRequest = exports.logSuccess = void 0;
var defaults_1 = require("./config/defaults");
var stringbuilder_1 = require("./stringbuilder");
var counter_1 = require("./counter");
/**
 * Custom Logger to show simple data and detailed data colapsed from axios responses
 * @param config Axios response
 * @returns logs the data
 */
var logSuccess = function (response) {
    var config = response.config, status = response.status, data = response.data;
    console.groupCollapsed(defaults_1.defaults.tldr, stringbuilder_1.buildMethodString(response), defaults_1.defaults.resNumber, counter_1.updateCounter(defaults_1.defaults.response), config.url, status);
    console.log({
        baseURL: config.baseURL,
        url: config.url,
        responseStatus: status,
        responseData: data,
        config: config
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
var logRequest = function () { };
exports.logRequest = logRequest;
/**
 * Custom Logger to show simple data and detailed data colapsed from axios errors
 * @param error Axios error
 * @returns logs the error data
*/
var logError = function () { return function (error) {
    var info = error.response;
    console.groupCollapsed(defaults_1.defaults.tldr, stringbuilder_1.buildMethodString(info, defaults_1.defaults.error), defaults_1.defaults.errorNumber, counter_1.updateCounter(defaults_1.defaults.error), info.config.url, info.status);
    console.log({
        baseURL: info.config.baseURL,
        url: info.config.url,
        responseStatus: info.status,
        responseData: info === null || info === void 0 ? void 0 : info.data,
        config: info.config
    });
    console.groupEnd();
    return error;
}; };
exports.logError = logError;
