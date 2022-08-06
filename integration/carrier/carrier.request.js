class CarrierRequest {
  constructor(name, email, phoneNumber) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  isValid() {
    if (!this.name)
      throw new Error('carrier name is null');
    if (!this.email)
      throw new Error('carrier email is null');
    if (!this.phoneNumber)
      throw new Error('carrier phone number is null');
  }

  getRequestBody() {
    return {
      'name': this.name,
      'phoneNumber': this.phoneNumber,
      'email': this.email
    }
  }
}

module.exports = CarrierRequest;
