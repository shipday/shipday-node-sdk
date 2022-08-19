const assert = require('chai').assert;
const Shipday = require('../integration');

describe('Shipday SDK', () => {
  it('should return version', () => {
    const shipday = new Shipday('api key');
    assert.equal(shipday.sayHello(), 'shipday node sdk - v 1.1.0');
  });
});