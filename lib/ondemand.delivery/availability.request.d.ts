export default class AvailabilityRequest {
    pickupAddress: string;
    deliveryAddress: string;
    deliveryTime: Date;
    constructor(pickupAddress: string, deliveryAddress: string, deliveryTime: Date);
    isValidAvailabilityRequest(): void;
    getRequestBody(): {
        deliveryTime?: string | undefined;
        pickupAddress: string;
        deliveryAddress: string;
    };
}
