import { AxiosInstance } from "axios";
export default class OnDemandDeliveryService {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    getServices(): Promise<any>;
    getEstimate(orderId: any): Promise<any>;
    assignToOnDemand(assignOnDemandRequest: {
        isValidAssignRequest: () => void;
        getRequestBody: () => any;
    }): Promise<any>;
    getDetails(orderId: any): Promise<any>;
    cancelAssignment(orderId: any): Promise<any>;
    checkAvailability(availabilityRequest: {
        isValidAvailabilityRequest: () => void;
        getRequestBody: () => any;
    }): Promise<any>;
    validateOrderId(orderId: any): void;
}
