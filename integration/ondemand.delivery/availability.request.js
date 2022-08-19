class AvailabilityRequest {
  constructor(pickupAddress, deliveryAddress, deliveryTime) {
    this.pickupAddress = pickupAddress;
    this.deliveryAddress = deliveryAddress;
    this.deliveryTime = deliveryTime;
  }

  isValidAvailabilityRequest() {
    if (!this.pickupAddress)
      throw new Error('pickup address is null');
    if (typeof this.pickupAddress !== 'string')
      throw new Error('pickup address is not of string type');
    if (!this.deliveryAddress)
      throw new Error('delivery address is null');
    if (typeof this.deliveryAddress !== 'string')
      throw new Error('delivery address is not of string type');
    if (this.deliveryTime) {
      if (typeof this.deliveryTime.getMonth !== 'function')
        throw new Error('delivery time is not a valid date');
    }
  }

  getRequestBody() {
    const deliveryTimeInISO8601 = this.deliveryTime ? this.deliveryTime.toISOString() : null;

    return {
      'pickupAddress': this.pickupAddress,
      'deliveryAddress': this.deliveryAddress,
      ...(deliveryTimeInISO8601 !== null && {deliveryTime: deliveryTimeInISO8601})
    }
  }
}

module.exports = AvailabilityRequest;
