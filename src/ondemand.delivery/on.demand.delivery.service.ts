import { AxiosInstance } from "axios";

import processApiError from '../util/response.util';

export default class OnDemandDeliveryService {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getServices() {
    try {
      const response = await this.client.get('on-demand/services');
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async getEstimate(orderId: any) {
    this.validateOrderId(orderId);
    try {
      const response = await this.client.get(`/on-demand/estimate/${orderId}`);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async assignToOnDemand(assignOnDemandRequest: { isValidAssignRequest: () => void; getRequestBody: () => any; }) {
    assignOnDemandRequest.isValidAssignRequest();
    try {
      const response = await this.client.post('/on-demand/assign', assignOnDemandRequest.getRequestBody());
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async getDetails(orderId: any) {
    this.validateOrderId(orderId);
    try {
      const response = await this.client.get(`on-demand/details/${orderId}`);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async cancelAssignment(orderId: any) {
    this.validateOrderId(orderId);
    try {
      const response = await this.client.post(`on-demand/cancel/${orderId}`);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async checkAvailability(availabilityRequest: { isValidAvailabilityRequest: () => void; getRequestBody: () => any; }) {
    availabilityRequest.isValidAvailabilityRequest();
    try {
      const response = await this.client.post('third-party/availability', availabilityRequest.getRequestBody());
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  validateOrderId(orderId: any) {
    if (!orderId)
      throw new Error('order id required to get on demand delivery details');
    if (typeof orderId !== 'number')
      throw new Error('order id is not of number type');
  }
}