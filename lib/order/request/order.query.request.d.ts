export default class OrderQueryRequest {
    startTime: Date;
    endTime: Date;
    orderStatus: string;
    startCursor: number;
    endCursor: number;
    constructor(startTime: Date, endTime: Date, orderStatus: string, startCursor: number, endCursor: number);
    isValid(): boolean;
    getRequestBody(): {
        endCursor?: number | undefined;
        startCursor?: number | undefined;
        orderStatus?: string | undefined;
        endTime?: string | undefined;
        startTime?: string | undefined;
    };
}
