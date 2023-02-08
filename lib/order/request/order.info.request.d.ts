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
    clientRestaurantId?: number;
    paymentOption?: string;
    cardType?: string;
    lastFour?: string;
    orderItems?: OrderItem[];
    pickupAddress?: Address;
    dropOffAddress?: Address;
    constructor(orderNumber: string, customerName: string, customerAddress: Address, customerEmail: string, customerPhoneNumber: string, restaurantName: string, restaurantAddress: Address);
    setOrderId(orderId: number): void;
    setRestaurantPhoneNumber(phone: string): void;
    setExpectedDeliveryDate(deliveryDate: string): void;
    setExpectedPickupTime(pickupTime: string): void;
    setExpectedDeliveryTime(deliveryTime: string): void;
    setPickupLatLong(latitude: number, longitude: number): void;
    isLatitude(lat: number): boolean;
    isLongitude(lng: number): boolean;
    setDeliveryLatLong(latitude: number, longitude: number): void;
    setTips(tips: number): void;
    setTax(tax: number): void;
    setDiscountAmount(discountAmount: number): void;
    setDeliveryFee(deliveryFee: number): void;
    setTotalOrderCost(orderCost: number): void;
    setDeliveryInstruction(deliveryInstruction: string): void;
    setOrderSource(orderSource: string): void;
    setAdditionalId(additionalId: string): void;
    setClientRestaurantId(restaurantId: number): void;
    setPaymentMethod(paymentOption: string): void;
    setCreditCardType(cardType: string): void;
    setCardLast4(lastFour: string): void;
    setOrderItems(orderItems: OrderItem[]): void;
    setPickup(pickupAddress: Address): void;
    setDropOff(dropOffAddress: Address): void;
    getRequestBody(): Record<string, any>;
}
