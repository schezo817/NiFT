import { BasicResponse, FailedResponse } from "./Response";

export interface ReservedGetQuery {
    id: string; // user id
}

export interface ReservedGetSuccessResponse extends BasicResponse {
    data: Array<{
        nft_id: string;
        series_id: string;
        brand_name: string;
        code: number;
        is_used: boolean;
    }>
}

export interface ReservedGetFailedResponse extends FailedResponse {}