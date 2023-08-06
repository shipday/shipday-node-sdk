import AddressFields from '../types/address';
export {AddressFields}

export default class Address {
  address: AddressFields;
  
  constructor(address: AddressFields) {
    this.address = address;
  }

  isValidAddress() {
    if (typeof this.address.unit !== 'string')
      throw new Error('unit need to be of string type');
    if (typeof this.address.street !== 'string')
      throw new Error('street need to be of string type');
    if (typeof this.address.city !== 'string')
      throw new Error('city need to be of string type');
    if (typeof this.address.state !== 'string')
      throw new Error('state need to be of string type');
    if (typeof this.address.country !== 'string')
      throw new Error('country need to be of string type');
      
    return true;
  }

  getRequestBody() {
    return {
      'address': this.address
    }
  }
}
