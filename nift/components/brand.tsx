import Link from "next/link";
import { useState } from "react";
import { nftItemsTest } from "toy/nftItemsTest";
import { MarketNFT } from "types/nfts";
import NFTMarketCard from "./NFTMarketCard"

const Brand = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);
    
    return (
        <div className="bg-white">
            {/* Top画像 */}
            <div className="min-w-fit min-h-fit">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>
            {/* icon画像 */}
            <div className="w-1/12 -translate-y-12 translate-x-12 shadow-lg">
                <img src="https://placeimg.com/192/192/people" alt="icon" className=" rounded-lg"/>
            </div>

            {/* ブランド名 */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Leonardo da Vinci</h1>
                </div>

                {/* ウォレットID */}
                <div className="mt-6 input-group">
                    <select className="select select-bordered">
                    <option disabled selected>ウォレットIDを選択</option>
                    <option>artifacts.eth</option>
                    <option>0x623FC4F577926c0aADAEf11a243754C546C1F98c</option>
                    </select>
                    <button className="btn">copy</button>
                </div>

                {/* ブランド詳細 */}
                <form className="mt-10">
                    <div className="space-y-6">
                    <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                    </div>
                </form>
            </div>

            {/* 保持している保持していたNFTを表示*/}
            <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
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
    );
};

export default Brand;
