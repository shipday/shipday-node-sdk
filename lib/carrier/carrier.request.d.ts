export default class CarrierRequest {
    name: string;
    email: string;
    phoneNumber: string;
    constructor(name: string, email: string, phoneNumber: string);
    isValid(): void;
    getRequestBody(): {
        name: string;
        phoneNumber: string;
        email: string;
    };
}
