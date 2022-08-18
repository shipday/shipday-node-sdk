const axiosConstructor = require('./httpclient/axiosclient');
const OrderService = require('./order/order.service');
const CarrierService = require('./carrier/carrier.service');
const OnDemandService = require('./ondemand.delivery/on.demand.delivery.service');

class Shipday {
  constructor(apiKey, timeout = 1000) {
    this.axiosClient = axiosConstructor(apiKey, timeout);
    this.orderService = new OrderService(this.axiosClient);
    this.carrierService = new CarrierService(this.axiosClient);
    this.onDemandService = new OnDemandService(this.axiosClient);
  }

  sayHello() {
    return 'shipday node sdk - v 1.1.0';
  }
}

module.exports = Shipday;
