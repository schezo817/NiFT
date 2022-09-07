import { MarketNFT } from "types/nfts";

export const nftItemsTest: MarketNFT = {
    nfts: [
        {
            nft_id: "12345", // スマートコントラクトから取得されるNFTのID
            nft_name: "NFT Name", // 表示名
        
            series_id: "12345", // シリーズのID
            brand_name: "Brand Name", // ブランド名
        
            description: "This is a NFT ", // ブランドの説明
            image_url: "https://placeimg.com/400/400/shoes", // 画像のURL
        
            price: 0.50, // ETHの価格
            wallet_address: "0xtest" // 所有者のWalletAddress    
        }
    ]
}