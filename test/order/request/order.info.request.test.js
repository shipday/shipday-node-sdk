const assert = require('chai').assert;
const expect = require('chai').expect;
const OrderInfoRequest = require("../../../integration/order/request/order.info.request");

describe('Order Info Request', () => {
  describe('order id', () => {
    it('order id needs to be number if present', () => {
      const request = new OrderInfoRequest();
      request.setOrderId(12345)
      assert.equal(request.orderId, 12345)
    });

    it('order id does not set if not a valid number', () => {
      const request = new OrderInfoRequest();
      request.setOrderId("abcde")
      assert.equal(request.orderId, undefined);
    });
  });

  describe('phone number', () => {
    it('phone number needs to be string if present', () => {
      expect(() => new OrderInfoRequest().setRestaurantPhoneNumber("2124567890")).to.not.throw();
    });

    it('phone number does not set if not string', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setRestaurantPhoneNumber(2124567890)).to.throw('invalid restaurant phone');
    });
  });

  describe('expected delivery date', () => {
    it('expected needs to be "yyyy-mm-dd" format string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedDeliveryDate("2022-07-08")).to.not.throw();
      assert.equal(request.expectedDeliveryDate, "2022-07-08");
    });

    it('expected delivery date throws if not "yyyy-mm-dd" format', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedDeliveryDate("08-07-2022")).to.throw('delivery date not in YYYY-MM-DD format');
    });
  });

  describe('expected pickup time', () => {
    it('expected pickup time needs to be "hh:mm:ss" format string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedPickupTime("03:05:12")).to.not.throw();
      assert.equal(request.expectedPickupTime, "03:05:12");
    });

    it('expected pickup time throws if not "hh:mm:ss" format', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedPickupTime("12pm2mint30sec")).to.throw('pickup time not in hh:mm:ss format');
    });
  });

  describe('expected delivery time', () => {
    it('expected delivery time needs to be "hh:mm:ss" format string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedDeliveryTime("03:05:12")).to.not.throw();
      assert.equal(request.expectedDeliveryTime, "03:05:12");
    });

    it('expected delivery time throws if not "hh:mm:ss" format', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setExpectedDeliveryTime("12pm2mint30sec")).to.throw('delivery time not in hh:mm:ss format');
    });
  });

  describe('pickup latitude and pickup longitude', () => {
    it('pickup latitude needs to be valid if present', () => {
      const request = new OrderInfoRequest();
      request.setPickupLatLong(90, 90)
      assert.equal(request.pickupLatitude, 90);
      assert.equal(request.pickupLongitude, 90);
    });

    it('pickup latitude throws if invalid latitude number', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setPickupLatLong(900, 90)).to.throw('pickup latitude is invalid');
    });

    it('pickup longitude throws if invalid longitude number', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setPickupLatLong(90, 900)).to.throw('pickup longitude is invalid');
    });
  });

  describe('delivery latitude and delivery longitude', () => {
    it('delivery latitude needs to be valid if present', () => {
      const request = new OrderInfoRequest();
      request.setDeliveryLatLong(90, 90)
      assert.equal(request.deliveryLatitude, 90);
      assert.equal(request.deliveryLongitude, 90);
    });

    it('delivery latitude throws if invalid latitude number', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryLatLong(900, 90)).to.throw('delivery latitude is invalid');
    });

    it('delivery longitude throws if invalid longitude number', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryLatLong(90, 900)).to.throw('delivery longitude is invalid');
    });
  });

  describe('tips', () => {
    it('tips need to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTips(1.2)).to.not.throw();
      assert.equal(request.tips, 1.2);
    });

    it('tips throws while invalid number provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTips("12%")).to.throw('invalid tips');
    });
  });

  describe('tax', () => {
    it('tax needs to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTax(1.2)).to.not.throw();
      assert.equal(request.tax, 1.2);
    });

    it('tips throws while invalid number provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTax("12%")).to.throw('invalid tax');
    });
  });

  describe('discount amount', () => {
    it('discount amount needs to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDiscountAmount(10)).to.not.throw();
      assert.equal(request.discountAmount, 10);
    });

    it('discount amount throws while invalid number provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDiscountAmount("12%")).to.throw('invalid discount amount');
    });
  });

  describe('delivery fee', () => {
    it('delivery fee needs to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryFee(10)).to.not.throw();
      assert.equal(request.deliveryFee, 10);
    });

    it('delivery fee throws while invalid number provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryFee("abc")).to.throw('invalid delivery fee');
    });
  });

  describe('total order cost', () => {
    it('total order cost needs to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTotalOrderCost(10)).to.not.throw();
      assert.equal(request.orderCost, 10);
    });

    it('discount amount throws while invalid string provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setTotalOrderCost("12%")).to.throw('invalid order cost');
    });
  });

  describe('delivery instruction', () => {
    it('delivery instruction needs to be valid string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryInstruction("At the door")).to.not.throw();
      assert.equal(request.deliveryInstruction, "At the door");
    });

    it('delivery instruction throws while invalid string provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDeliveryInstruction()).to.throw('invalid delivery instruction');
    });
  });

  describe('order source', () => {
    it('order source needs to be valid string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setOrderSource("At the door")).to.not.throw();
      assert.equal(request.orderSource, "At the door");
    });

    it('order source throws while invalid string provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setOrderSource()).to.throw('invalid order source');
    });
  });

  describe('additional id', () => {
    it('additional id needs to be valid string if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setAdditionalId("1A01")).to.not.throw();
      assert.equal(request.additionalId, "1A01");
    });

    it('additional id throws while invalid string provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setAdditionalId()).to.throw('invalid additional id');
    });
  });

  describe('client restaurant id', () => {
    it('client restaurant id needs to be valid number if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setClientRestaurantId(1234)).to.not.throw();
      assert.equal(request.clientRestaurantId, 1234);
    });

    it('client restaurant id throws while invalid number provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setClientRestaurantId("ABC")).to.throw('invalid client restaurant id');
    });
  });

  describe('payment method', () => {
    it('payment method needs to be valid from `PaymentMethod` if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setPaymentMethod('cash')).to.not.throw();
      assert.equal(request.paymentOption, 'cash');
    });

    it('payment method throws while invalid payment method provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setPaymentMethod("Not Ok Payment")).to.throw('invalid payment option');
    });
  });

  describe('credit card type', () => {
    it('credit card types needs to be valid from `CardType` if present', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setCreditCardType('visa')).to.not.throw();
      assert.equal(request.cardType, 'visa');
    });

    it('credit card types throws while invalid card type provided', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setCreditCardType("crypto")).to.throw('invalid card type');
    });
  });

  describe('card last 4 digit', () => {
    it('card last 4 digits needs to be string if present', () => {
      const request = new OrderInfoRequest();
      request.setCardLast4("1234")
      assert.equal(request.lastFour, "1234");
    });
  });

  describe('order items', () => {
    it('order items needs to be an array if present', () => {
      const request = new OrderInfoRequest();
      request.setOrderItems([])
      assert.equal(request.orderItems.length, 0);
    });
  });

  describe('pickup address', () => {
    it('if pickup address is not a instance of Address, should throw error', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setPickup("St Jose 17, Cal")).to.throw();
    });
  });

  describe('dropoff address', () => {
    it('if dropoff address is not a instance of Address, should throw error', () => {
      const request = new OrderInfoRequest();
      expect(() => request.setDropOff('St Jose 17, Cal')).to.throw();
    });
  });

  describe('request body', () => {
    it('request body throws error if orderNumber not defined', () => {
      const request = new OrderInfoRequest();
      expect(() => request.getRequestBody()).to.throw('order number required');
    });
    it('request body throws error if customerName not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234");
      expect(() => request.getRequestBody()).to.throw('invalid customer name');
    });
    it('request body throws error if customerAddress not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234", "JK Ruul");
      expect(() => request.getRequestBody()).to.throw('invalid customer address');
    });
    it('request body throws error if customerEmail not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234", "JK Ruul", "St Pt. street, 1007, R");
      expect(() => request.getRequestBody()).to.throw('invalid customer email');
    });
    it('request body throws error if customerPhoneNumber not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234", "JK Ruul", "St Pt. street, 1007, R", "jkruul@mail.cc");
      expect(() => request.getRequestBody()).to.throw('invalid customer phone number');
    });
    it('request body throws error if restaurantName not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234", "JK Ruul", "St Pt. street, 1007, R", "jkruul@mail.cc", "2124567890");
      expect(() => request.getRequestBody()).to.throw('invalid restaurant name');
    });
    it('request body throws error if restaurantAddress not defined or an invalid string', () => {
      const request = new OrderInfoRequest("1234", "JK Ruul", "St Pt. street, 1007, R", "jkruul@mail.cc", "2124567890", "abul khayer");
      expect(() => request.getRequestBody()).to.throw('invalid restaurant address');
    });
  });
});
