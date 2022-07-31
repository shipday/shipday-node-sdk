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

  async assignOrder(orderId, carrierId) {
    if (!orderId)
      throw new Error('order id is null');
    if (typeof orderId !== 'number') {
      throw new Error('order id is not number')
    }
    if (!carrierId)
      throw new Error('carrier id is null');
    if (typeof carrierId !== 'number')
      throw new Error('carrier id is not number');

    try {
      await this.client.put(`/orders/assign/${orderId}/${carrierId}`);
      return "OK";
    } catch (e) {
      const statusCode = e.response.status;
      if (statusCode === 403)
        return new Error('authentication error');
      else
        return new Error('bad request');
    }
  }

  async insertOrder(orderInfoRequest) {
    const requestBody = orderInfoRequest.getRequestBody();
    if (requestBody.orderId)
      throw new Error('should not have any order id during insert');
    console.log(requestBody);
    const response = await this.client.post('orders', requestBody);
    return response.data;
  }

  async editOrder(orderInfoRequest) {
    const requestBody = orderInfoRequest.getRequestBody();
    if (requestBody.orderId) {
      const response = await this.client.put(`order/edit/${requestBody.orderId}`, requestBody);
      return response.data;
    } else {
      throw new Error('order must have id to edit');
    }
  }
}

module.exports = OrderService;