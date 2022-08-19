const expect = require('chai').expect;
const AssignRequest = require('../../integration/ondemand.delivery/assign.request');

describe('Assign Request for on demand delivery', () => {

  describe('name', () => {
    it('should throw error if name is missing', () => {
      const request = new AssignRequest(null, 754);
      expect(request.isValidAssignRequest).to.throw();
      expect(() => {
        request.isValidAssignRequest()
      }).to.throw('on demand delivery service name is null');
    });
    it('name should be string', () => {
      const invalidRequest = new AssignRequest(5, 754);
      expect(() => {
        invalidRequest.isValidAssignRequest()
      }).to.throw('on demand service name should be string');
      const validRequest = new AssignRequest('SExpress', 754);
      expect(() => validRequest.isValidAssignRequest()).to.not.throw();
    });
  });

  describe('orderId', () => {
    it('should throw error if orderId is missing', () => {
      const request = new AssignRequest('SExpress', null);
      expect(request.isValidAssignRequest).to.throw();
      expect(() => {
        request.isValidAssignRequest()
      }).to.throw('order id is null');
    });
    it('orderId should be number', () => {
      const invalidRequest = new AssignRequest('SExpress', '754');
      expect(() => {
        invalidRequest.isValidAssignRequest()
      }).to.throw('orderId should be integer');
      const validRequest = new AssignRequest('SExpress', 754);
      expect(() => validRequest.isValidAssignRequest()).to.not.throw();
    });
  });

  it('if tip exists, it should be number', () => {
    const validRequest = new AssignRequest('SExpress', 754, 7);
    expect(() => validRequest.isValidAssignRequest()).to.not.throw();


    const invalidRequest = new AssignRequest('SExpress', 754, '7');
    expect(() => {
      invalidRequest.isValidAssignRequest()
    }).to.throw('tip should be of number type');
  });

  it('if estimated reference exist, it should be string', () => {
    const validRequest = new AssignRequest('SExpress', 754, null, 'es768');
    expect(() => validRequest.isValidAssignRequest()).to.not.throw();


    const invalidRequest = new AssignRequest('SExpress', 754, null, 76);
    expect(() => {
      invalidRequest.isValidAssignRequest()
    }).to.throw('estimate reference should be of string type');
  });
});