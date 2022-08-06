const expect = require('chai').expect;
const CarrierRequest = require('../../integration/carrier/carrier.request');

describe('Insert Carrier Request', () => {
  it('should throw error if name is missing', () => {
    const carrierRequest = new CarrierRequest(null, 'hello@hello.com', '+8801287');
    expect(carrierRequest.isValid).to.throw();
    expect(() => {
      carrierRequest.isValid()
    }).to.throw('carrier name is null');
  });

  it('should throw error if email is missing', () => {
    const carrierRequest = new CarrierRequest('good name', null, '+8801287');
    expect(carrierRequest.isValid).to.throw();
    expect(() => {
      carrierRequest.isValid()
    }).to.throw('carrier email is null');
  });

  it('should throw error if phoneNumber is missing', () => {
    const carrierRequest = new CarrierRequest('good name', 'hello@hello.com', null);
    expect(carrierRequest.isValid).to.throw();
    expect(() => {
      carrierRequest.isValid()
    }).to.throw('carrier phone number is null');
  });
});
