import PaymentMethod from '../types/payment.method';
import CardType from '../types/card.type';
import Address from './address';
import OrderItem from './order.item';

export default class OrderInfoRequest {
  orderNumber: string;
  customerName: string;
  customerAddress: Address;
  customerEmail: string;
  customerPhoneNumber: string;
  restaurantName: string;
  restaurantAddress: Address;
  yyyy_mm_dd_regex: RegExp;
  hh_mm_ss_regex: RegExp;
  orderId?: number;
  restaurantPhoneNumber?: string;
  expectedDeliveryDate?: string;
  expectedPickupTime?: string;
  expectedDeliveryTime?: string;
  pickupLatitude?: number;
  pickupLongitude?: number;
  deliveryLatitude?: number;
  deliveryLongitude?: number;
  tips?: number;
  tax?: number;
  discountAmount?: number;
  deliveryFee?: number;
  orderCost?: number;
  deliveryInstruction?: string;
  orderSource?: string;
  additionalId?: string;
  clientRestaurantId?: number ;
  paymentOption?: string;
  cardType?: string;
  lastFour?: string;
  orderItems?: OrderItem[];
  pickupAddress?: Address;
  dropOffAddress?: Address;
  constructor(
    orderNumber: string, customerName: string, customerAddress: Address, customerEmail: string,
    customerPhoneNumber: string, restaurantName: string, restaurantAddress: Address
  ) {
    this.orderNumber = orderNumber;
    this.customerName = customerName;
    this.customerAddress = customerAddress;
    this.customerEmail = customerEmail;
    this.customerPhoneNumber = customerPhoneNumber;
    this.restaurantName = restaurantName;
    this.restaurantAddress = restaurantAddress;
    this.yyyy_mm_dd_regex = /^\d{4}-\d{2}-\d{2}$/;
    this.hh_mm_ss_regex = /^(?:2[0-3]|[01]\d):[0-5]\d:[0-5]\d$/;
  }

  setOrderId(orderId: number) {
    if (orderId && typeof orderId === 'number')
      this.orderId = orderId;
  }

  setRestaurantPhoneNumber(phone: string) {
    if (phone && typeof phone === 'string') {
      this.restaurantPhoneNumber = phone;
    } else {
      throw new Error('invalid restaurant phone');
    }
  }

  setExpectedDeliveryDate(deliveryDate: string) {
    if (deliveryDate.match(this.yyyy_mm_dd_regex)) {
      this.expectedDeliveryDate = deliveryDate;
    } else {
      throw new Error('delivery date not in YYYY-MM-DD format');
    }
  }

  setExpectedPickupTime(pickupTime: string) {
    if (pickupTime.match(this.hh_mm_ss_regex)) {
      this.expectedPickupTime = pickupTime;
    } else {
      throw new Error('pickup time not in hh:mm:ss format');
    }
  }

  setExpectedDeliveryTime(deliveryTime: string) {
    if (deliveryTime.match(this.hh_mm_ss_regex)) {
      this.expectedDeliveryTime = deliveryTime;
    } else {
      throw new Error('delivery time not in hh:mm:ss format');
    }
  }

  setPickupLatLong(latitude: number, longitude: number) {
    if (this.isLatitude(latitude))
      this.pickupLatitude = latitude;
    else
      throw new Error('pickup latitude is invalid');
    if (this.isLongitude(longitude))
      this.pickupLongitude = longitude;
    else
      throw new Error('pickup longitude is invalid');
  }

  isLatitude(lat: number) {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  isLongitude(lng: number) {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }

  setDeliveryLatLong(latitude: number, longitude: number) {
    if (this.isLatitude(latitude))
      this.deliveryLatitude = latitude;
    else
      throw new Error('delivery latitude is invalid');
    if (this.isLongitude(longitude))
      this.deliveryLongitude = longitude;
    else
      throw new Error('delivery longitude is invalid');
  }

  setTips(tips: number) {
    if (tips && typeof tips === 'number')
      this.tips = tips;
    else
      throw new Error('invalid tips');
  }

  setTax(tax: number) {
    if (tax && typeof tax === 'number')
      this.tax = tax;
    else
      throw new Error('invalid tax');
  }

  setDiscountAmount(discountAmount: number) {
    if (discountAmount && typeof discountAmount === 'number')
      this.discountAmount = discountAmount;
    else
      throw new Error('invalid discount amount');
  }

  setDeliveryFee(deliveryFee: number) {
    if (deliveryFee && typeof deliveryFee === 'number') {
      this.deliveryFee = deliveryFee;
    } else {
      throw new Error('invalid delivery fee');
    }
  }

  setTotalOrderCost(orderCost: number) {
    if (orderCost && typeof orderCost === 'number') {
      this.orderCost = orderCost;
    } else {
      throw new Error('invalid order cost');
    }
  }

  setDeliveryInstruction(deliveryInstruction: string) {
    if (deliveryInstruction && typeof deliveryInstruction === 'string') {
      this.deliveryInstruction = deliveryInstruction;
    } else {
      throw new Error('invalid delivery instruction');
    }
  }

  setOrderSource(orderSource: string) {
    if (orderSource && typeof orderSource === 'string') {
      this.orderSource = orderSource;
    } else {
      throw new Error('invalid order source');
    }
  }

  setAdditionalId(additionalId: string) {
    if (additionalId && typeof additionalId === 'string') {
      this.additionalId = additionalId;
    } else {
      throw new Error('invalid additional id');
    }
  }
  
  setClientRestaurantId(restaurantId: number) {
    if (restaurantId && typeof restaurantId === 'number') {
      this.clientRestaurantId = restaurantId;
    } else {
      throw new Error('invalid client restaurant id');
    }
  }

  setPaymentMethod(paymentOption: string) {
    if (paymentOption && Object.values(PaymentMethod).indexOf(paymentOption) >= 0) {
      this.paymentOption = paymentOption;
    } else {
      throw new Error('invalid payment option');
    }
  }

  setCreditCardType(cardType: string) {
    if (cardType && Object.values(CardType).indexOf(cardType) >= 0) {
      this.cardType = cardType;
    } else {
      throw new Error('invalid card type');
    }
  }

  setCardLast4(lastFour: string) {
    if (lastFour && typeof lastFour === 'string') {
      this.lastFour = lastFour;
    }
  }

  setOrderItems(orderItems: OrderItem[]) {
    if (orderItems && orderItems.constructor === Array) {
      this.orderItems = orderItems;
    }
  }

  setPickup(pickupAddress: Address) {
    if (pickupAddress && pickupAddress.isValidAddress())
      this.pickupAddress = pickupAddress;
  }

  setDropOff(dropOffAddress: Address) {
    if (dropOffAddress && dropOffAddress.isValidAddress())
      this.dropOffAddress = dropOffAddress;
  }

  getRequestBody() {
    if (!this.orderNumber)
      throw new Error('order number required');
    if (!this.customerName || typeof this.customerName !== 'string')
      throw new Error('invalid customer name');
    if (!this.customerAddress || !(this.customerAddress instanceof Address))
      throw new Error('invalid customer address');
    if (!this.customerEmail || typeof this.customerEmail !== 'string')
      throw new Error('invalid customer email');
    if (!this.customerPhoneNumber || typeof this.customerPhoneNumber !== 'string')
      throw new Error('invalid customer phone number');
    if (!this.restaurantName || typeof this.restaurantName !== 'string')
      throw new Error('invalid restaurant name');
    if (!this.restaurantAddress || !(this.restaurantAddress instanceof Address))
      throw new Error('invalid restaurant address');

    let requestBody: Record<string, any> = {
      'orderNumber': this.orderNumber,
      'customerName': this.customerName,
      'customerAddress': this.customerAddress,
      'customerEmail': this.customerEmail,
      'customerPhoneNumber': this.customerPhoneNumber,
      'restaurantName': this.restaurantName,
      'restaurantAddress': this.restaurantAddress,
      'restaurantPhoneNumber': this.restaurantPhoneNumber,
      'orderId': this.orderId,
      'expectedDeliveryDate': this.expectedDeliveryDate,
      'expectedPickupTime': this.expectedPickupTime,
      'expectedDeliveryTime': this.expectedDeliveryTime,
      'pickupLatitude': this.pickupLatitude,
      'pickupLongitude': this.pickupLongitude,
      'deliveryLatitude': this.deliveryLatitude,
      'deliveryLongitude': this.deliveryLongitude,
      'orderItem': this.orderItems ? this.orderItems.map(item => item.getRequestBody()) : this.orderItems,
      'tips': this.tips,
      'tax': this.tax,
      'discountAmount': this.discountAmount,
      'deliveryFee': this.deliveryFee,
      'totalOrderCost': this.orderCost,
      'deliveryInstruction': this.deliveryInstruction,
      'orderSource': this.orderSource,
      'additionalId': this.additionalId,
      'clientRestaurantId': this.clientRestaurantId,
      'paymentMethod': this.paymentOption,
      'creditCardType': this.cardType,
      'creditCardId': this.lastFour,
      'pickup': this.pickupAddress,
      'dropoff': this.dropOffAddress
    }

    Object.keys(requestBody).forEach((key) => { 
      if(requestBody[key] === undefined || requestBody[key] === null){
        delete requestBody[key];
      }
    });

    return requestBody;
  }
}
