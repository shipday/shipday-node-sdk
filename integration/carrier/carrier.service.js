const processApiError = require('../util/response.util');

class CarrierService {
  constructor(client) {
    this.client = client;
  }

  async getCarriers() {
    try {
      const response = await this.client.get('carriers');
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async addCarrier(carrierRequest) {
    if (!carrierRequest)
      throw new Error('carrier info is null');
    carrierRequest.isValid();
    try {
      const response = await this.client.post('carriers', carrierRequest.getRequestBody());
      return response.data;
    } catch (e) {
      processApiError(e);
    }
  }

  async deleteCarrier(carrierId) {
    if (!carrierId)
      throw new Error('carrier id is null');
    try {
      await this.client.delete(`carriers/${carrierId}`);
      return "OK";
    } catch (e) {
      processApiError(e);
    }
  }
}

module.exports = CarrierService;
