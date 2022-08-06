const axiosConstructor = require('./httpclient/axiosclient');
const OrderService = require('./order/order.service');
const CarrierService = require('./carrier/carrier.service');

class Shipday {
  constructor(apiKey, timeout = 1000) {
    this.axiosClient = axiosConstructor(apiKey, timeout);
    this.orderService = new OrderService(this.axiosClient);
    this.carrierService = new CarrierService(this.axiosClient);
  }

  sayHello() {
    return 'shipday node sdk - v 1.0.0';
  }
}

module.exports = Shipday;
