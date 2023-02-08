"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosclient_1 = __importDefault(require("./httpclient/axiosclient"));
const order_service_1 = __importDefault(require("./order/order.service"));
const carrier_service_1 = __importDefault(require("./carrier/carrier.service"));
const on_demand_delivery_service_1 = __importDefault(require("./ondemand.delivery/on.demand.delivery.service"));
class Shipday {
    constructor(apiKey, timeout = 1000) {
        this.axiosClient = (0, axiosclient_1.default)(apiKey, timeout);
        this.orderService = new order_service_1.default(this.axiosClient);
        this.carrierService = new carrier_service_1.default(this.axiosClient);
        this.onDemandService = new on_demand_delivery_service_1.default(this.axiosClient);
    }
    sayHello() {
        return 'shipday node sdk - v 1.1.0';
    }
}
exports.default = Shipday;
