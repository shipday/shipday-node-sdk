"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processApiError(error) {
    const status = error.response.status;
    if (status === 403)
        throw new Error('authentication error');
    throw new Error('bad request');
}
exports.default = processApiError;
