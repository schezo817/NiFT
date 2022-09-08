import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { NFT } from "types/nfts";

const Sell: NextPage = () => {
    const router = useRouter();
    const { nft_id } = router.query;

    const [detailNFT, setDetailNFT] = useState<NFT>({
        nft_id: nft_id as string,
        nft_name: "NFT Name",
        series_id: "Series ID",
        brand_name: "Brand Name",
        description: "This is description section",
        image_url:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        price: 100,
        wallet_address: "0x000000",
    });

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* <!-- Product info --> */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={detailNFT.image_url}
                            alt="Model wearing plain white basic tee."
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    {/* <!-- Options --> */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {detailNFT.nft_name}
                        </h1>
                        <h1 className="mt-1 text-2xl tracking-tight text-gray-900 sm:text-xl">
                            {detailNFT.brand_name}
                        </h1>
                        <div className="mt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">出品価格</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="0.0010" className="input input-bordered" />
                                    <span>ETH</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-6 mt-10">
                            <p className="text-base text-gray-900">{detailNFT.description}</p>
                        </div>
                        <div className="my-10 btn btn-primary w-full">出品する</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;
