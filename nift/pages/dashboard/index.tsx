import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { BsPatchCheck } from "react-icons/bs";
import NFTMyCard from "components/NFTMyCard";
import { nftItemsTest } from "toy/nftItemsTest";
import { MarketNFT } from "types/nfts";

const Dashboard: NextPage = () => {
    const [marketNFT, setMarketNFT] = useState<MarketNFT>(nftItemsTest);

    return (
        <div className="bg-white">
            {/* Top画像 */}
            <div className="min-w-fit max-h-32">
                <img
                    src="https://placeimg.com/1920/800/arch"
                    className="w-screen max-h-96 object-cover"
                />
            </div>
            <div className="min-w-[20%] w-10/12 justify-center -translate-y-12 translate-x-4 md:translate-x-12 md:w-2/3 bg-white rounded-xl">
                <div className="p-4">
                    <div className="flex flex-row flex-wrap justify-start gap-4 p-4 w-full">
                        <div className="avatar px-0 md:px-8">
                            <div className="w-48 h-48 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4 p-4 w-96 max-w-full break-all">
                            <p className="text-4xl font-bold">NiFT Official</p>
                            <div className="flex items-center">
                                <BsPatchCheck className="text-2xl mr-2" />
                                <span>Wallet is connected</span>
                            </div>
                            <p>0x9edd29d64b3bcd5378b18ee59fc66e90</p>
                            <Link href={"/dashboard/user"}>
                                <div className="btn modal-button btn-primary">編集</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white translate-y-0">
                <h1 className="p-8 pb-4 text-4xl font-bold">My NFT</h1>
                {/* 保持しているNFTの情報 */}
                <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    {marketNFT?.nfts.map((v, i) => {
                        return (
                            <NFTMyCard
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
    );
};

export default Dashboard;
