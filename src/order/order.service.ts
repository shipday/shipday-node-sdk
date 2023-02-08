import { AxiosInstance } from "axios";

import processApiError from '../util/response.util';
import OrderInfoRequest from "./request/order.info.request";
import OrderQueryRequest from "./request/order.query.request";

export default class OrderService {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getOrders() {
    try {
      const response = await this.client.get('orders');
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async getOrderDetails(orderNumber: string) {
    if (!orderNumber)
      throw new Error('order number is null');
    try {
      const response = await this.client.get(`orders/${orderNumber}`);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async getOrderQuery(orderQueryRequest: OrderQueryRequest) {
    orderQueryRequest.isValid();
    const requestBody = orderQueryRequest.getRequestBody();
    try {
      const response = await this.client.post(`orders/query`, requestBody);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async deleteOrder(orderId: number) {
    if (!orderId)
      throw new Error('order id is null');
    if (typeof orderId !== 'number') {
      throw new Error('order id is not number')
    }
    try {
      await this.client.delete(`/orders/${orderId}`);
      return "OK";
    } catch (e) {
      processApiError(e);
    }
  }

  async assignOrder(orderId: number, carrierId: string) {
    if (!orderId)
      throw new Error('order id is null');
    if (typeof orderId !== 'number') {
      throw new Error('order id is not number')
    }
    if (!carrierId)
      throw new Error('carrier id is null');
    if (typeof carrierId !== 'number')
      throw new Error('carrier id is not number');

    try {
      await this.client.put(`/orders/assign/${orderId}/${carrierId}`);
      return "OK";
    } catch (e) {
      processApiError(e);
    }
  }

  async insertOrder(orderInfoRequest: OrderInfoRequest) {
    const requestBody = orderInfoRequest.getRequestBody();
    if (requestBody.orderId)
      throw new Error('should not have any order id during insert');
    try {
      const response = await this.client.post('orders', requestBody);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async editOrder(orderInfoRequest: OrderInfoRequest) {
    const requestBody = orderInfoRequest.getRequestBody();
    if (!requestBody.orderId)
      throw new Error('order must have id to edit');
    try {
      const response = await this.client.put(`order/edit/${requestBody.orderId}`, requestBody);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }
}
