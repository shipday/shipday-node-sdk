export default class Address {
  unit: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  
  constructor(unit: string, street: string, city: string, state: string, zip: string, country: string) {
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
    }
  }
}
