import { AxiosInstance } from "axios";
import OrderInfoRequest from "./request/order.info.request";
import OrderQueryRequest from "./request/order.query.request";
export default class OrderService {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    getOrders(): Promise<any>;
    getOrderDetails(orderNumber: string): Promise<any>;
    getOrderQuery(orderQueryRequest: OrderQueryRequest): Promise<any>;
    deleteOrder(orderId: number): Promise<"OK" | undefined>;
    assignOrder(orderId: number, carrierId: string): Promise<"OK" | undefined>;
    insertOrder(orderInfoRequest: OrderInfoRequest): Promise<any>;
    editOrder(orderInfoRequest: OrderInfoRequest): Promise<any>;
}
