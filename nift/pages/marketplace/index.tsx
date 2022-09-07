import { NextPage } from "next";
import { MarketNFT } from "types/nfts";
import { useState } from "react";
import { nftItemsTest } from "toy/nftItemsTest";
import NFTCard from "components/NFTCard";

const MarketPlace: NextPage = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);

    return (
        <div>
            {/* 保持している or していたNFTの情報 */}
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    marketNFT?.nfts.map((v, i) => {
                        return (
                            <NFTCard
                                nft_id={v.nft_id}
                                nft_name={v.nft_name}
                                series_id={v.series_id}
                                brand_name={v.brand_name}
                                description={v.description}
                                image_url={v.image_url}
                                price={v.price}
                                wallet_address={v.wallet_address}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MarketPlace;
