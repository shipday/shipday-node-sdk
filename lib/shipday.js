const axiosConstructor = require('./httpclient/axiosclient');
const OrderService = require('./order/order.service');
const CarrierService = require('./carrier/CarrierService');

class Shipday {
  constructor(apiKey, timeout = 1000) {
    this.axiosClient = axiosConstructor(apiKey, timeout);
    this.orderService = new OrderService(this.axiosClient);
    this.carrierService = new CarrierService(this.axiosClient);
  }

  sayHello() {
    console.log(this.axiosClient);
  }
}

module.exports = Shipday;


