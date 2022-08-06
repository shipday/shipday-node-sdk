const OrderState = require('../types/order.state');

class OrderQueryRequest {
  constructor(startTime, endTime, orderStatus, startCursor, endCursor) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.orderStatus = orderStatus;
    this.startCursor = startCursor;
    this.endCursor = endCursor;
  }

  isValid() {
    if (this.startTime)
      if (typeof this.startTime.getMonth !== 'function')
        throw new Error('startTime is not of date type');
    if (this.endTime)
      if (typeof this.endTime.getMonth !== 'function')
        throw new Error('endTime is not of date type');
    if (this.orderStatus)
      if (Object.values(OrderState).indexOf(this.orderStatus) === -1) {
        throw new Error('orderStatus is not a valid value');
      }
    if (this.startCursor)
      if (typeof this.startCursor !== 'number') {
        throw new Error('start cursor is not a valid number');
      }
    if (this.endCursor)
      if (typeof this.endCursor !== 'number') {
        throw new Error('end cursor is not a valid number');
      }
  }

  getRequestBody() {
    const startTimeInISO8601 = this.startTime ? this.startTime.toISOString() : null;
    const endTimeInISO8601 = this.endTime ? this.endTime.toISOString() : null;
    return {
      ...(startTimeInISO8601 !== null && {startTime: startTimeInISO8601}),
      ...(endTimeInISO8601 !== null && {endTime: endTimeInISO8601}),
      ...(this.orderStatus !== null && {orderStatus: this.orderStatus}),
      ...(this.startCursor !== null && {startCursor: this.startCursor}),
      ...(this.endCursor !== null && {endCursor: this.endCursor})
    };
  }
}

module.exports = OrderQueryRequest;
