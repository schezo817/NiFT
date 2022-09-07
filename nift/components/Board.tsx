import Link from "next/link";
import { useState } from "react";
import { nftItemsTest } from "toy/nftItemsTest";
import { MarketNFT } from "types/nfts";
import NFTMarketCard from "./NFTMarketCard";

const Board = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);

    return (
        // 一番大きな箱を返す。
        <div className="bg-white">
            {/* Top画像 */}
            <div className="min-w-fit max-h-32">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>
            {/* icon画像 */}
            <div className="min-w-[20%] w-1/12 -translate-y-12 translate-x-12 shadow-lg">
                <img src="https://placeimg.com/192/192/people" alt="icon" className="rounded-lg"/>
            </div>

            {/* 保持している・していたNFTの情報 */}
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {marketNFT?.nfts.map((v, i) => {
                    return (
                        <NFTMarketCard
                            nft_id={v.nft_id}
                            nft_name={v.nft_name}
                            series_id={v.series_id}
                            brand_name={v.brand_name}
                            description={v.description}
                            image_url={v.image_url}
                            price={v.price}
                            wallet_address={v.wallet_address}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Board;