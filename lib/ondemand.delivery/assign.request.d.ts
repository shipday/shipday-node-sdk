export default class AssignRequest {
    name: string;
    orderId: string;
    tip: string;
    estimateReference: string;
    constructor(name: string, orderId: string, tip: string, estimateReference: string);
    isValidAssignRequest(): void;
    getRequestBody(): {
        estimateReference?: string | undefined;
        tip?: string | undefined;
        name: string;
        orderId: string;
    };
}
