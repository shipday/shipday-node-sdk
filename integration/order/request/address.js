class Address {
  constructor(unit, street, city, state, zip, country) {
    this.unit = unit;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
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
