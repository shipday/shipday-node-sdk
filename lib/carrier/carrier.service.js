class CarrierService {
  constructor(client) {
    this.client = client;
  }

  async getCarriers() {
    const response = await this.client.get('carriers');
    return response.data;
  }

  async addCarrier(carrierInfo) {
    if (!carrierInfo)
      throw new Error('carrier info is null');
    if (!carrierInfo.name)
      throw new Error('carrier name is null');
    if (!carrierInfo.email)
      throw new Error('carrier email is null');
    if (!carrierInfo.phoneNumber)
      throw new Error('carrier phone number is null');
    try {
      const response = await this.client.post(carrierInfo);
      return response.data;
    } catch (e) {
      return new Error('something went wrong');
    }

  }
}

module.exports = CarrierService;