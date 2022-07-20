class OrderService {
  constructor(client) {
    this.client = client;
  }

  async getOrders() {
    try {
      return await this.client.get('orders');
    } catch (e) {

    }
  }
}

module.exports = OrderService;