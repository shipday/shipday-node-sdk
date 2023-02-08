"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const processApiError = require('../util/response.util');
class OnDemandDeliveryService {
    constructor(client) {
        this.client = client;
    }
    getServices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get('on-demand/services');
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    getEstimate(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateOrderId(orderId);
            try {
                const response = yield this.client.get(`/on-demand/estimate/${orderId}`);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    assignToOnDemand(assignOnDemandRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            assignOnDemandRequest.isValidAssignRequest();
            try {
                const response = yield this.client.post('/on-demand/assign', assignOnDemandRequest.getRequestBody());
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    getDetails(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateOrderId(orderId);
            try {
                const response = yield this.client.get(`on-demand/details/${orderId}`);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    cancelAssignment(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateOrderId(orderId);
            try {
                const response = yield this.client.post(`on-demand/cancel/${orderId}`);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    checkAvailability(availabilityRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            availabilityRequest.isValidAvailabilityRequest();
            try {
                const response = yield this.client.post('third-party/availability', availabilityRequest.getRequestBody());
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    validateOrderId(orderId) {
        if (!orderId)
            throw new Error('order id required to get on demand delivery details');
        if (typeof orderId !== 'number')
            throw new Error('order id is not of number type');
    }
}
module.exports = OnDemandDeliveryService;
