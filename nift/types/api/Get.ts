import { BasicResponse, FailedResponse } from "./Response";

export interface GetIdGetQuery {
    id: string;
    code?: number;
}

export interface GetIdGetSuccessResponse extends BasicResponse {
    data: {
        nft_id: string; // nft_status
        is_used: boolean; // nft_status
        series_id: string; // series_nfts
        nft_name: string; // series_detail
        brand_name: string; // series_detail
        description: string; // series_detail    
        common_image_url: string; // series_image
    }
}

export interface GetIdGetFailureResponse extends FailedResponse {}

// Get時点でCodeがあれば、Postを促す
export interface GetCodePostBody {
    id: string;
    code: number;
}

export interface GetCodePostSuccessResponse extends BasicResponse {
    data: {
        nft_id: string; // nft_id (it's not same of real nft token id)
        series_id: string; // series_id
        nft_name: string; // nftの名前
        brand_name: string; // brand name
        description: string; // description of NFT
        image_url: string; // image url
        rareity: string; // common, rare, very rare
        order: number; // #1, #2, #3, #4 ...
        wallet_address: string; // 企業のwallet Address (必要なければ消す)
    }
}

export interface GetCodePostFailedReponse extends FailedResponse {}