"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_util_1 = __importDefault(require("../util/response.util"));
class CarrierService {
    constructor(client) {
        this.client = client;
    }
    async getCarriers() {
        try {
            const response = await this.client.get('carriers');
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async addCarrier(carrierRequest) {
        if (!carrierRequest)
            throw new Error('carrier info is null');
        carrierRequest.isValid();
        try {
            const response = await this.client.post('carriers', carrierRequest.getRequestBody());
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async deleteCarrier(carrierId) {
        if (!carrierId)
            throw new Error('carrier id is null');
        try {
            await this.client.delete(`carriers/${carrierId}`);
            return "OK";
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
}
exports.default = CarrierService;
