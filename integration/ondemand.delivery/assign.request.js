class AssignRequest {
  constructor(name, orderId, tip, estimateReference) {
    this.name = name;
    this.orderId = orderId;
    this.tip = tip;
    this.estimateReference = estimateReference;
  }

  isValidAssignRequest() {
    if (!this.name)
      throw new Error('on demand delivery service name is null');
    if (typeof this.name !== 'string')
      throw new Error('on demand service name should be string');
    if (!this.orderId)
      throw new Error('order id is null');
    if (typeof this.orderId !== 'number')
      throw new Error('orderId should be integer');
    if (this.tip) {
      if (typeof this.tip !== 'number')
        throw new Error('tip should be of number type');
    }
    if (this.estimateReference) {
      if (typeof this.estimateReference !== 'string')
        throw new Error('estimate reference should be of string type');
    }
  }

  getRequestBody() {
    return {
      'name': this.name,
      'orderId': this.orderId,
      ...(this.tip !== null && {tip: this.tip}),
      ...(this.estimateReference !== null && {estimateReference: this.estimateReference}),
    }
  }
}

module.exports = AssignRequest;
