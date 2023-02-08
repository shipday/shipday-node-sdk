"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_util_1 = __importDefault(require("../util/response.util"));
class OrderService {
    constructor(client) {
        this.client = client;
    }
    async getOrders() {
        try {
            const response = await this.client.get('orders');
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async getOrderDetails(orderNumber) {
        if (!orderNumber)
            throw new Error('order number is null');
        try {
            const response = await this.client.get(`orders/${orderNumber}`);
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async getOrderQuery(orderQueryRequest) {
        orderQueryRequest.isValid();
        const requestBody = orderQueryRequest.getRequestBody();
        try {
            const response = await this.client.post(`orders/query`, requestBody);
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async deleteOrder(orderId) {
        if (!orderId)
            throw new Error('order id is null');
        if (typeof orderId !== 'number') {
            throw new Error('order id is not number');
        }
        try {
            await this.client.delete(`/orders/${orderId}`);
            return "OK";
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async assignOrder(orderId, carrierId) {
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
            await this.client.put(`/orders/assign/${orderId}/${carrierId}`);
            return "OK";
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async insertOrder(orderInfoRequest) {
        const requestBody = orderInfoRequest.getRequestBody();
        if (requestBody.orderId)
            throw new Error('should not have any order id during insert');
        try {
            const response = await this.client.post('orders', requestBody);
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
    async editOrder(orderInfoRequest) {
        const requestBody = orderInfoRequest.getRequestBody();
        if (!requestBody.orderId)
            throw new Error('order must have id to edit');
        try {
            const response = await this.client.put(`order/edit/${requestBody.orderId}`, requestBody);
            return response.data;
        }
        catch (e) {
            (0, response_util_1.default)(e);
        }
    }
}
exports.default = OrderService;
