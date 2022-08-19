const expect = require('chai').expect;
const AvailabilityRequest = require('../../integration/ondemand.delivery/availability.request');

describe('availability request for on demand delivery', () => {
  describe('pickup address', () => {
    it('pickup address must not be null', () => {
      const request = new AvailabilityRequest(null, 'Palo Alto Caltrain Station, University Avenue, Palo Alto, CA, USA');
      expect(() => {
        request.isValidAvailabilityRequest()
      }).to.throw('pickup address is null');
    });
    it('pickup address should be of type string', () => {
      const request = new AvailabilityRequest(
        'Palo Alto High School, Embarcadero Road, Palo Alto, CA, USA',
        'Palo Alto Caltrain Station, University Avenue, Palo Alto, CA, USA'
      );
      expect(() => {
        request.isValidAvailabilityRequest()
      }).to.not.throw();
    });
  });

  describe('delivery address', () => {
    it('delivery address must not be null', () => {
      const request = new AvailabilityRequest(
        'Palo Alto High School, Embarcadero Road, Palo Alto, CA, USA',
        null
      );
      expect(
        () => request.isValidAvailabilityRequest()
      ).to.throw('delivery address is null');
    });
  });

});
