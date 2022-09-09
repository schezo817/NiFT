import { BasicResponse, FailedResponse } from "./Response";

export interface CreatePostBody {
    id: string; // user id
    nft_name: string; // name of the nft
    brand_name: string; // brand name
    description: string; // description
    total_lots: number;
    rare_lots: number;
    veryrare_lots: number;
    common_image_url: string;
    rare_image_url: string;
    veryrare_image_url: string;
    royalty_first: number;
}

export interface CreatePostSuccessResponse extends BasicResponse {
    data: {
        message: string; // 配列をすべて返すとエグいことになるので返さない。結果だけ返す
    };
}

export interface CreatePostFailedReponse extends FailedResponse {}
