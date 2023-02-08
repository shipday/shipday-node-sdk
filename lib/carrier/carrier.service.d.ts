export default class CarrierService {
    client: any;
    constructor(client: any);
    getCarriers(): Promise<any>;
    addCarrier(carrierRequest: {
        isValid: () => void;
        getRequestBody: () => any;
    }): Promise<any>;
    deleteCarrier(carrierId: any): Promise<"OK" | undefined>;
}
