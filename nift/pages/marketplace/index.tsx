import { NextPage } from "next";
import { useState } from "react";
import { nftItemsTest } from "toy/nftItemsTest";
import { MarketNFT } from "types/nfts";
import NFTMarketCard from "components/NFTMarketCard";

const MarketPlace: NextPage = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);

    return (
        <div className="flex items-center flex-col py-8 px-4">
            <h1 className="text-4xl font-black">Marketplace</h1>
            {/* 保持している or していたNFTの情報 */}
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {marketNFT?.nfts.map((v, i) => {
                    return (
                        <NFTMarketCard
                            key={v.nft_id}
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
            <div className="btn-group">
                <input type="radio" name="options" data-title="1" className="btn" />
                <input type="radio" name="options" data-title="2" className="btn" />
                <input type="radio" name="options" data-title="3" className="btn" />
                <input type="radio" name="options" data-title="4" className="btn" />
            </div>
        </div>
    );
};

export default MarketPlace;
