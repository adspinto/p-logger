const _defaults = require("./config/defaults");
const stringbuilder = require("./stringbuilder");
const _counter = require("./counter");
const customLogger = {
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios Requests
     * @param config Axios response
     * @returns logs the data
     */
    request: () => {},
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios responses
     * @param config Axios response
     * @returns logs the data
     */
    success: (response) => {
        const { config, status, data } = response;
        console.groupCollapsed(
            _defaults.tldr,
            stringbuilder.buildMethodString(response),
            _defaults.resNumber,
            _counter.updateCounter(_defaults.response),
            config.url,
            status,
        );
        console.log({
            baseURL: config.baseURL,
            url: config.url,
            responseStatus: status,
            responseData: data,
            config,
        });
        console.groupEnd();
        return config;
    },
    /**
     * Custom Logger to show simple data and detailed data colapsed from axios errors
     * @param error Axios error
     * @returns logs the error data
     */
    error: (error) => {
        const info = error.response;
        _counter.updateCounter(_defaults.response);
        _counter.updateCounter(_defaults.error);
        console.groupCollapsed(_defaults.tldr, stringbuilder.buildMethodString(info, _defaults.error), info.config.url, info.status);
        console.log({
            baseURL: info.config.baseURL,
            url: info.config.url,
            responseStatus: info.status,
            responseData: info?.data,
            config: info.config,
        });
        console.groupEnd();
        return Promise.reject(error);
    },
};

module.exports = customLogger;