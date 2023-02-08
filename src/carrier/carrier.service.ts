import processApiError from '../util/response.util';

export default class CarrierService {
  client: any;
  constructor(client: any) {
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

  async addCarrier(carrierRequest: { isValid: () => void; getRequestBody: () => any; }) {
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

  async deleteCarrier(carrierId: any) {
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
