export default class OrderItem {
    name: string;
    unitPrice: number;
    quantity: number;
    addOns: string[];
    detail: string;
    constructor(name: string, unitPrice: number, quantity: number, addOns?: never[], detail?: string);
    getRequestBody(): {
        name: string;
        unitPrice: number;
        quantity: number;
        detail?: string | undefined;
        addOns?: string[] | undefined;
    };
}
