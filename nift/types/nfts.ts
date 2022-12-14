export interface reserved_nfts {
    user_id: string;
    series_id: string;
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

export interface NFT {
    nft_id: string; // スマートコントラクトから取得されるNFTのID
    nft_name: string; // 表示名

    series_id: string; // シリーズのID
    brand_name: string; // ブランド名

    description: string; // ブランドの説明
    image_url: string; // 画像のURL

    price: number; // ETHの価格
    wallet_address: string; // 所有者のWalletAddress
}

export interface MarketNFT {
    nfts: Array<NFT>;
}

export interface Reserved {
    series_id: string;
    nft_id: string;
    brand_name: string;
    code: number;
    is_used: boolean;
}

export interface ReservedNFT {
    nfts: Array<Reserved>;
}
