const assert = require('chai').assert;
const expect = require('chai').expect;
const OrderQueryRequest = require('../../../integration/order/request/order.query.request');
const OrderState = require('../../../integration/order/types/order.state');

describe('Order Query Request', () => {
  it('all null is valid', () => {
    const request = new OrderQueryRequest(null, null, null, null, null);
    expect(() => request.isValid()).to.not.throw();
  });

  describe('start cursor and end cursor', () => {
    it('start cursor and end cursor need to be number if present', () => {
      const request = new OrderQueryRequest(null, null, null, 1, 8);
      expect(() => request.isValid()).to.not.throw();
    });

    it('non numeric start cursor and end cursor should throw error', () => {
      const request = new OrderQueryRequest(null, null, null, 1, '8');
      expect(() => request.isValid()).to.throw('end cursor is not a valid number');
    });
  });

  describe('start time and end time', () => {
    it('start time and end time need to be date if present', () => {
      const startDate = new Date();
      startDate.setDate(1);

      const endDate = new Date();
      endDate.setHours(15);
      const request = new OrderQueryRequest(startDate, endDate, null, null, null);
      expect(() => request.isValid()).to.not.throw();
    });

    it('if start time and end time is not in date type, should throw error', () => {
      const request = new OrderQueryRequest('2022-08-11 15:22:33', null, null, null, null);
      expect(() => request.isValid()).to.throw('startTime is not of date type');
    });
  });

  describe('order status', () => {
    it('order status should be from OrderState', () => {
      const request = new OrderQueryRequest(null, null, OrderState.ACTIVE, null, null);
      expect(() => request.isValid()).to.not.throw();
    });

    it('If order status not from OrderState, should throw error', () => {
      const request = new OrderQueryRequest(null, null, 'Active', null, null);
      expect(() => request.isValid()).to.throw('orderStatus is not a valid value');
    });
  });
});
