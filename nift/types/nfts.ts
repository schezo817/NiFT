export interface reserved_nfts {
    user_id: string;
    serie_id: string;
}

export interface series_nfts {
    series_id: string;
    nft_id: string;
}

export interface series_image {
    series_id: string;
    common_image_url: string;
    rare_image_url: string;
    veryrare_image_url: string;
}

export interface series_lot {
    series_id: string;
    total_lots: number;
    total_lots_used: number;
    rare_lots: number;
    rare_lots_used: number;
    veryrare_lots: number;
    veryrare_lots_used: number;
}

export interface series_detail {
    series_id: string;
    brand_name: string;
    description: string;
    royality_first: number;
}

export interface nft_status {
    nft_id: string;
    nft_code: number;
    is_used: boolean;
}

///

export interface NFTPreview {
    nft_name: string;
    brand_name: string;
    description: string;
    image_url: string;
    price: number;
}

export interface NFTCreation {
    nft_name: string;
    brand_name: string;
    description: string;

    total_lots: number;
    rare_lots: number;
    veryrare_lots: number;

    common_image_url: string;
    rare_image_url: string;
    veryrare_image_url: string;

    royalty: string;
}