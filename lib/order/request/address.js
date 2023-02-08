"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(unit, street, city, state, zip, country) {
        this.unit = unit;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    isValidAddress() {
        if (typeof this.unit !== 'string')
            throw new Error('unit need to be of string type');
        if (typeof this.street !== 'string')
            throw new Error('street need to be of string type');
        if (typeof this.city !== 'string')
            throw new Error('city need to be of string type');
        if (typeof this.state !== 'string')
            throw new Error('state need to be of string type');
        if (typeof this.country !== 'string')
            throw new Error('country need to be of string type');
        return true;
    }
    getRequestBody() {
        return {
            'address': {
                'unit': this.unit,
                'street': this.street,
                'city': this.city,
                'state': this.state,
                'zip': this.zip,
                'country': this.country
            }
        };
    }
}
exports.default = Address;
