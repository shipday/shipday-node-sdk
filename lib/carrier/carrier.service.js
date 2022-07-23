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
      const response = await this.client.delete(`carriers/${carrierId}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return new Error('something went wrong');
    }
  }
}

module.exports = CarrierService;