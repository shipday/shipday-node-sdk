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
}

module.exports = OnDemandDeliveryService