import { BasicResponse, FailedResponse } from "./Response";

export interface CheckPostBody {
    id: string;
    code: number;
}

export interface CheckPostSuccessResponse extends BasicResponse {
    data: {
        message: string; // 結果だけを返せば良い
    };
}

export interface CheckPostFailureResponse extends FailedResponse {}
