"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function constructAxios(apiKey, timeOut = 1000) {
    return axios_1.default.create({
        baseURL: 'https://api.shipday.com/',
        timeout: timeOut,
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Content-Type': 'application/json'
        }
    });
}
exports.default = constructAxios;
