class OrderService {
  constructor(client) {
    this.client = client;
  }

  async getOrders() {
    try {
      const response = await this.client.get('orders');
      return response.data;
    } catch (e) {
      const status = e.response.status;
      if (status === 403)
        throw new Error('authentication error');
      throw new Error('bad request');
    }
  }

  async getOrderDetails(orderNumber) {
    if (!orderNumber)
      throw new Error('order number is null');
    const response = await this.client.get(`orders/${orderNumber}`);
    return response.data;
  }

  async getOrderQuery(orderQueryRequest) {
    orderQueryRequest.isValid();
    const requestBody = orderQueryRequest.getRequestBody();
    const response = await this.client.post(`orders/query`, requestBody);
    return response.data;
  }

  async deleteOrder(orderId) {
    if (!orderId)
      throw new Error('order id is null');
    if (typeof orderId !== 'number') {
      throw new Error('order id is not number')
    }
    try {
      await this.client.delete(`/orders/${orderId}`);
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

module.exports = OrderService;