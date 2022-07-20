class CarrierService {
  constructor(client) {
    this.client = client;
  }

  async getCarriers() {
    const response = await this.client.get('carriers');
    return response.data;
  }
}

module.exports = CarrierService;