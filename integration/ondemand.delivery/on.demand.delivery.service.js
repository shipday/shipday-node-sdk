const processApiError = require('../util/response.util');

class OnDemandDeliveryService {
  constructor(client) {
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

  async getEstimate(orderId) {
    if (!orderId)
      throw new Error('order id required to get estimate');
    if (typeof orderId !== 'number')
      throw new Error('order id is not of number type');

    try {
      const response = await this.client.get(`/on-demand/estimate/${orderId}`);
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async assignToOnDemand(assignOnDemandRequest) {
    assignOnDemandRequest.isValidAssignRequest();
    try {
      const response = await this.client.post('/on-demand/assign', assignOnDemandRequest.getRequestBody());
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }
}

module.exports = OnDemandDeliveryService
