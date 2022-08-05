class CarrierService {
  constructor(client) {
    this.client = client;
  }

  async getCarriers() {
    const response = await this.client.get('carriers');
    return response.data;
  }

  async addCarrier(carrierRequest) {
    if (!carrierRequest)
      throw new Error('carrier info is null');
    carrierRequest.isValid();
    try {
      const response = await this.client.post('carriers', carrierRequest.getRequestBody());
      return response.data;
    } catch (e) {
      console.log(e);
      return new Error('something went wrong');
    }

  }

  async deleteCarrier(carrierId) {
    if (!carrierId)
      throw new Error('carrier id is null');
    try {
      await this.client.delete(`carriers/${carrierId}`);
      return "OK";
    } catch (e) {
      const statusCode = e.response.status;
      if (statusCode === 403)
        return new Error('authentication error');
      else
        return new Error('bad request');
    }
  }
}

module.exports = CarrierService;