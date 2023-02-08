"use strict";
class OrderItem {
    constructor(name, unitPrice, quantity, addOns = [], detail = '') {
        this.name = name;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.addOns = addOns;
        this.detail = detail;
    }
    getRequestBody() {
        return Object.assign(Object.assign(Object.assign({}, (this.addOns.length > 0 && { 'addOns': this.addOns })), (this.detail.length > 0 && { 'detail': this.detail })), { 'name': this.name, 'unitPrice': this.unitPrice, 'quantity': this.quantity });
    }
}
module.exports = OrderItem;
