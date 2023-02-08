export default class Address {
    unit: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    constructor(unit: string, street: string, city: string, state: string, zip: string, country: string);
    isValidAddress(): boolean;
    getRequestBody(): {
        address: {
            unit: string;
            street: string;
            city: string;
            state: string;
            zip: string;
            country: string;
        };
    };
}
