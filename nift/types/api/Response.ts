export interface BasicResponse {
    status: string;
    data: {};
}

export interface SuccessResponse extends BasicResponse {}

export interface FailedResponse extends BasicResponse {
    data: BasicMessage;
}

export interface BasicMessage {
    message: string;
}
