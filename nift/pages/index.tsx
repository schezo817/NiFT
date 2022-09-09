import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { nftItemsTest } from "toy/nftItemsTest";
import { MarketNFT } from "types/nfts";
import NFTHomeCard from "components/NFTHomeCard";

const Home: NextPage = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-800 to-pink-500 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <div>
                            <span className="box-decoration-clone bg-gradient-to-r text-5xl font-bold from-indigo-400 to-pink-500 leading-normal">
                                NiFT | a gift with NFT
                            </span>
                            <p className="py-6">Buy and sell NFT gifts.</p>
                            <div>
                                <Link href={"/marketplace"}>
                                    <button className="btn btn-primary">Go MarketPlace</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        {marketNFT?.nfts.map((v, i) => {
                            return (
                                <NFTHomeCard
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
                        {marketNFT?.nfts.map((v, i) => {
                            return (
                                <NFTHomeCard
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
                        {marketNFT?.nfts.map((v, i) => {
                            return (
                                <NFTHomeCard
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
                        {marketNFT?.nfts.map((v, i) => {
                            return (
                                <NFTHomeCard
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
                </div>
            </div>
        </div>
    );
};

export default Home;
