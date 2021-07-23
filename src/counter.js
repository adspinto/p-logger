"use strict";
exports.__esModule = true;
exports.updateCounter = exports.counter = void 0;
exports.counter = {
    request: 0,
    response: 0,
    error: 0
};
var updateCounter = function (type) {
    return exports.counter[type] += 1;
};
exports.updateCounter = updateCounter;
