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
class OrderService {
    constructor(client) {
        this.client = client;
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get('orders');
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    getOrderDetails(orderNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!orderNumber)
                throw new Error('order number is null');
            try {
                const response = yield this.client.get(`orders/${orderNumber}`);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    getOrderQuery(orderQueryRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            orderQueryRequest.isValid();
            const requestBody = orderQueryRequest.getRequestBody();
            try {
                const response = yield this.client.post(`orders/query`, requestBody);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    deleteOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!orderId)
                throw new Error('order id is null');
            if (typeof orderId !== 'number') {
                throw new Error('order id is not number');
            }
            try {
                yield this.client.delete(`/orders/${orderId}`);
                return "OK";
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    assignOrder(orderId, carrierId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!orderId)
                throw new Error('order id is null');
            if (typeof orderId !== 'number') {
                throw new Error('order id is not number');
            }
            if (!carrierId)
                throw new Error('carrier id is null');
            if (typeof carrierId !== 'number')
                throw new Error('carrier id is not number');
            try {
                yield this.client.put(`/orders/assign/${orderId}/${carrierId}`);
                return "OK";
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    insertOrder(orderInfoRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = orderInfoRequest.getRequestBody();
            if (requestBody.orderId)
                throw new Error('should not have any order id during insert');
            try {
                const response = yield this.client.post('orders', requestBody);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
    editOrder(orderInfoRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = orderInfoRequest.getRequestBody();
            if (!requestBody.orderId)
                throw new Error('order must have id to edit');
            try {
                const response = yield this.client.put(`order/edit/${requestBody.orderId}`, requestBody);
                return response.data;
            }
            catch (e) {
                processApiError(e);
            }
        });
    }
}
module.exports = OrderService;
